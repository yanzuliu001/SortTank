// @ts-nocheck

const $tankItem = require("./Level-29086_tankItem");
const $tankBoardConfig = require("./Level-29086_tankBoardConfig");

export default class Level29086TankBoard {
    owner: any = null;
    root: cc.Node = null;
    config: any = null;
    items: any[] = [];
    movingItem: any = null;
    ready: boolean = false;
    debugCreateIndex: number = 0;
    boardDebugNode: cc.Node = null;

    init(owner, root, config) {
        this.owner = owner;
        this.root = root;
        this.config = config;
        this.items = [];
        this.movingItem = null;
        this.ready = false;
        this.debugCreateIndex = 0;
        this.boardDebugNode = null;

        var oldChildren = root.children.slice();
        for (var i = 0; i < oldChildren.length; i++) {
            oldChildren[i].removeFromParent(false);
            oldChildren[i].destroy();
        }
        this.createBoardDebugNode();

        for (i = 0; i < config.tanks.length; i++) {
            var spawn = config.tanks[i];
            var typeKey = $tankBoardConfig.getTankTypeKey(spawn.type);
            var typeConfig = $tankBoardConfig.TankTypeConfig[typeKey];
            if (!typeConfig) {
                cc.error("Unknown tank type:", spawn.type, spawn.id);
                continue;
            }
            this.createItem(spawn, typeConfig);
        }

        root.active = true;
        this.syncOwnerData();
        this.preloadAssets();
        return this.items.length > 0;
    }

    createBoardDebugNode() {
        var board = this.config && this.config.board;
        if (!this.root || !board) {
            return;
        }
        var width = board.right - board.left;
        var height = board.top - board.bottom;
        var node = new cc.Node("tankWaitingBoardDebugArea");
        node.anchorX = 0.5;
        node.anchorY = 0.5;
        node.width = width;
        node.height = height;
        node.position = cc.v2((board.left + board.right) / 2, (board.bottom + board.top) / 2);
        node.active = !!(this.owner && this.owner.tankLayoutDebugEnabled);
        this.root.addChild(node);
        node.setSiblingIndex(0);

        var graphics = node.addComponent(cc.Graphics);
        graphics.clear();
        graphics.lineWidth = 2;
        graphics.fillColor = cc.color(255, 80, 40, 45);
        graphics.strokeColor = cc.color(255, 80, 40, 220);
        graphics.rect(-width / 2, -height / 2, width, height);
        graphics.fill();
        graphics.stroke();
        this.boardDebugNode = node;
    }

    setDebugAreaVisible(visible) {
        if (this.boardDebugNode && cc.isValid(this.boardDebugNode)) {
            this.boardDebugNode.active = !!visible;
        }
    }

    createItem(spawn, typeConfig?) {
        var typeKey = $tankBoardConfig.getTankTypeKey(spawn.type);
        typeConfig = typeConfig || $tankBoardConfig.TankTypeConfig[typeKey];
        if (!typeConfig) {
            cc.error("Unknown tank type:", spawn.type, spawn.id);
            return null;
        }
        var node = new cc.Node("tank_" + spawn.id);
        this.root.addChild(node);
        var item = node.addComponent($tankItem.default);
        item.init(this, spawn, typeConfig);
        // Waiting-board tanks use directional sprites/colliders. Keep parent rotation flat
        // so pasted debug layouts are not affected by the legacy prefab angles.
        node.angle = 0;
        this.items.push(item);
        return item;
    }

    syncOwnerData() {
        if (!this.owner) {
            return;
        }
        this.owner.carNodeArr = this.items.map(function (item) {
            return item.node;
        });
        this.owner.tankAssemblyTotalCarAmount = this.items.length;
        this.owner.allPersonAmount = this.items.reduce(function (total, item) {
            return total + item.capacity;
        }, 0);
        this.owner.allPersonAmount2 = this.owner.allPersonAmount;
    }

    isInsideBoard(localPoint) {
        var board = this.config && this.config.board;
        if (!board || !localPoint) {
            return false;
        }
        return (
            localPoint.x >= board.left &&
            localPoint.x <= board.right &&
            localPoint.y >= board.bottom &&
            localPoint.y <= board.top
        );
    }

    isInsideWorldPosition(worldPosition) {
        if (!this.root || !cc.isValid(this.root) || !worldPosition) {
            return false;
        }
        return this.isInsideBoard(this.root.convertToNodeSpaceAR(worldPosition));
    }

    addDebugItem(type, direction, worldPosition) {
        if (!this.root || !cc.isValid(this.root) || !worldPosition) {
            return null;
        }
        var typeKey = $tankBoardConfig.getTankTypeKey(type);
        var typeConfig = $tankBoardConfig.TankTypeConfig[typeKey];
        if (!typeConfig) {
            cc.error("Unknown tank debug type:", type);
            return null;
        }
        var localPoint = this.root.convertToNodeSpaceAR(worldPosition);
        if (!this.isInsideBoard(localPoint)) {
            return null;
        }
        this.debugCreateIndex += 1;
        var item = this.createItem(
            {
                id: "debug_" + this.debugCreateIndex,
                type: type,
                direction: direction,
                x: Number(localPoint.x.toFixed(3)),
                y: Number(localPoint.y.toFixed(3))
            },
            typeConfig
        );
        this.syncOwnerData();
        return item;
    }

    clearDebugItems() {
        for (var i = this.items.length - 1; i >= 0; i--) {
            var item = this.items[i];
            if (item && item.node && cc.isValid(item.node)) {
                item.node.stopAllActions();
                item.node.removeFromParent(false);
                item.node.destroy();
            }
        }
        this.items = [];
        this.movingItem = null;
        this.syncOwnerData();
    }

    getConfigSnapshot() {
        var result = [];
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (!item || !item.node || !cc.isValid(item.node) || !item.node.active) {
                continue;
            }
            result.push({
                type: $tankBoardConfig.getTankTypeValue(item.tankTypeKey || item.tankType),
                direction: item.direction,
                x: Number(item.node.x.toFixed(3)),
                y: Number(item.node.y.toFixed(3))
            });
        }
        result.sort(function (a, b) {
            if (Math.abs(a.y - b.y) > 0.001) {
                return b.y - a.y;
            }
            return a.x - b.x;
        });
        for (i = 0; i < result.length; i++) {
            result[i].id = "t" + (i + 1 < 10 ? "0" : "") + (i + 1);
        }
        return result;
    }

    preloadAssets() {
        var paths = [];
        var typeNames = Object.keys($tankBoardConfig.TankTypeConfig);
        for (var typeIndex = 0; typeIndex < typeNames.length; typeIndex++) {
            var typeConfig = $tankBoardConfig.TankTypeConfig[typeNames[typeIndex]];
            for (var direction = 0; direction < 8; direction++) {
                paths.push("zqddn_zhb/texture/tank/" + typeConfig.assetPrefix + "_" + direction);
            }
        }
        for (direction = 0; direction < 8; direction++) {
            paths.push("zqddn_zhb/texture/sorttank/tank_arrow_" + direction);
        }
        var remaining = paths.length;
        var self = this;
        var complete = function () {
            remaining -= 1;
            if (remaining <= 0) {
                self.ready = true;
            }
        };
        for (var i = 0; i < paths.length; i++) {
            this.loadSpriteFrame(paths[i], complete);
        }
    }

    loadSpriteFrame(path, callback) {
        this.owner.loadTankSpriteFrame(path, callback);
    }

    handleTouchStart(event) {
        if (!this.ready || this.movingItem || !event) {
            return true;
        }
        var worldPoint = event.getLocation();
        var item = this.findItemAt(worldPoint);
        if (!item || item.state != $tankItem.TankWaitingState.Idle || !item.ready || item.isShaking) {
            return true;
        }

        var parking = this.findFirstEmptyParking();
        if (!parking) {
            this.owner.show("位置已满");
            item.shake();
            return true;
        }

        var route = this.findClearRoute(item);
        if (!route) {
            item.shake();
            return true;
        }

        parking.isEmpty = false;
        parking.tankWaitingReservation = item;
        item.parking = parking;
        item.state = $tankItem.TankWaitingState.Moving;
        item.setArrowVisible(false);
        this.movingItem = item;
        this.runSegments(item, route, 0, this.finishItemAtRoad.bind(this, item, parking));
        return true;
    }

    findItemAt(worldPoint) {
        for (var i = this.items.length - 1; i >= 0; i--) {
            var item = this.items[i];
            if (
                item &&
                item.state == $tankItem.TankWaitingState.Idle &&
                item.node.active &&
                item.containsWorldPoint(worldPoint)
            ) {
                return item;
            }
        }
        return null;
    }

    findFirstEmptyParking() {
        var owner = this.owner;
        var parkingNodes = (this.owner.parkingNodes || []).filter(function (node) {
            return node && node.active && node.isEmpty;
        });
        parkingNodes.sort(function (a, b) {
            var rowA = owner.getTankAssemblyParkingRowIndex
                ? owner.getTankAssemblyParkingRowIndex(a)
                : 0;
            var rowB = owner.getTankAssemblyParkingRowIndex
                ? owner.getTankAssemblyParkingRowIndex(b)
                : 0;
            if (rowA != rowB) {
                return rowA - rowB;
            }
            var ax = a.parent.convertToWorldSpaceAR(a.position).x;
            var bx = b.parent.convertToWorldSpaceAR(b.position).x;
            return ax - bx;
        });
        return parkingNodes[0] || null;
    }

    findClearRoute(item) {
        var candidates = this.buildRouteCandidates(item);
        for (var i = 0; i < candidates.length; i++) {
            if (!this.isRouteBlocked(item, candidates[i])) {
                return candidates[i];
            }
        }
        return null;
    }

    buildRouteCandidates(item) {
        var start = cc.v2(item.node.x, item.node.y);
        var vectorValue = $tankBoardConfig.TankDirectionVector[item.direction];
        if (!vectorValue) {
            return [];
        }
        var vector = cc.v2(vectorValue[0], vectorValue[1]);
        var hit = this.getFirstBoundaryHit(start, vector);
        if (!hit) {
            return [];
        }
        var roadY = this.owner.getRouteRoadLocalPosition(this.root).y;
        var first = { to: hit.position, direction: item.direction };
        if (hit.edge == "bottom") {
            var leftDistance = Math.abs(hit.position.x - this.config.board.left);
            var rightDistance = Math.abs(this.config.board.right - hit.position.x);
            var preferred = leftDistance < rightDistance ? -1 : 1;
            var sides = [preferred, -preferred];
            return sides.map(function (side) {
                var sideX = side < 0 ? this.config.board.left : this.config.board.right;
                return this.compactSegments([
                    first,
                    { to: cc.v2(sideX, hit.position.y), direction: side < 0 ? 1 : 5 },
                    { to: cc.v2(sideX, roadY), direction: 2 }
                ], start);
            }, this);
        }
        if (hit.edge == "left" || hit.edge == "right") {
            return [
                this.compactSegments(
                    [first, { to: cc.v2(hit.position.x, roadY), direction: 2 }],
                    start
                )
            ];
        }
        return [
            this.compactSegments(
                [first, { to: cc.v2(hit.position.x, roadY), direction: 2 }],
                start
            )
        ];
    }

    compactSegments(segments, start) {
        var result = [];
        var current = start;
        for (var i = 0; i < segments.length; i++) {
            var segment = segments[i];
            if (cc.v2(segment.to.x - current.x, segment.to.y - current.y).mag() > 0.1) {
                result.push(segment);
                current = segment.to;
            }
        }
        return result;
    }

    getFirstBoundaryHit(start, vector) {
        var board = this.config.board;
        var hits = [];
        var epsilon = 0.0001;
        if (vector.x < -epsilon) hits.push({ edge: "left", time: (board.left - start.x) / vector.x });
        if (vector.x > epsilon) hits.push({ edge: "right", time: (board.right - start.x) / vector.x });
        if (vector.y < -epsilon) hits.push({ edge: "bottom", time: (board.bottom - start.y) / vector.y });
        if (vector.y > epsilon) hits.push({ edge: "top", time: (board.top - start.y) / vector.y });
        hits = hits.filter(function (hit) {
            return hit.time >= 0;
        });
        hits.sort(function (a, b) {
            return a.time - b.time;
        });
        if (!hits.length) {
            return null;
        }
        var first = hits[0];
        return {
            edge: first.edge,
            position: cc.v2(start.x + vector.x * first.time, start.y + vector.y * first.time)
        };
    }

    isRouteBlocked(item, route) {
        var blockers = this.items.filter(function (candidate) {
            return (
                candidate != item &&
                candidate.state == $tankItem.TankWaitingState.Idle &&
                candidate.node.active
            );
        });
        var current = cc.v2(item.node.x, item.node.y);
        var previousDirection = item.direction;
        var sampleStep = Math.max(2, this.config.collisionSampleStep || 6);

        for (var routeIndex = 0; routeIndex < route.length; routeIndex++) {
            var segment = route[routeIndex];
            if (segment.direction != previousDirection && this.isTurnBlocked(item, current, blockers)) {
                return true;
            }
            var delta = cc.v2(segment.to.x - current.x, segment.to.y - current.y);
            var steps = Math.max(1, Math.ceil(delta.mag() / sampleStep));
            for (var step = 1; step <= steps; step++) {
                var ratio = step / steps;
                var samplePosition = cc.v2(current.x + delta.x * ratio, current.y + delta.y * ratio);
                var movingPolygon = item.getBodyPolygonAt(samplePosition, segment.direction);
                for (var blockerIndex = 0; blockerIndex < blockers.length; blockerIndex++) {
                    var blocker = blockers[blockerIndex];
                    if (cc.Intersection.polygonPolygon(movingPolygon, blocker.getBodyPolygonAt())) {
                        return true;
                    }
                }
            }
            current = segment.to;
            previousDirection = segment.direction;
        }
        return false;
    }

    isTurnBlocked(item, position, blockers) {
        var sides = Math.max(8, this.config.turnEnvelopeSides || 16);
        var radius = item.getTurnRadius();
        var envelope = [];
        for (var i = 0; i < sides; i++) {
            var angle = (Math.PI * 2 * i) / sides;
            envelope.push(cc.v2(position.x + Math.cos(angle) * radius, position.y + Math.sin(angle) * radius));
        }
        for (i = 0; i < blockers.length; i++) {
            if (cc.Intersection.polygonPolygon(envelope, blockers[i].getBodyPolygonAt())) {
                return true;
            }
        }
        return false;
    }

    runSegments(item, segments, index, onComplete) {
        if (!cc.isValid(item.node)) {
            this.cancelMove(item);
            return;
        }
        if (index >= segments.length) {
            onComplete();
            return;
        }
        var segment = segments[index];
        item.setDirection(segment.direction);
        var target = cc.v2(segment.to.x, segment.to.y);
        var distance = target.sub(cc.v2(item.node.x, item.node.y)).mag();
        var duration = distance / Math.max(1, this.config.moveSpeed || 500);
        var self = this;
        cc.tween(item.node)
            .to(duration, { position: target })
            .call(function () {
                self.runSegments(item, segments, index + 1, onComplete);
            })
            .start();
    }

    finishItemAtRoad(item, parking) {
        if (!cc.isValid(item.node) || !cc.isValid(parking)) {
            this.cancelMove(item);
            return;
        }
        var worldTarget = this.owner.getParkingEntryWorldPosition(parking);
        var target = this.root.convertToNodeSpaceAR(worldTarget);
        var distance = Math.abs(target.x - item.node.x);
        var self = this;
        var complete = function () {
            item.state = $tankItem.TankWaitingState.Parked;
            parking.tankWaitingReservation = null;
            self.owner.finishTankAssemblyParking(item.node, parking);
            self.movingItem = null;
        };
        if (distance <= 0.1) {
            complete();
            return;
        }
        item.setDirection(target.x < item.node.x ? 1 : 5);
        cc.tween(item.node)
            .to(distance / Math.max(1, this.config.moveSpeed || 500), { x: target.x })
            .call(complete)
            .start();
    }

    cancelMove(item) {
        if (item && item.parking && cc.isValid(item.parking)) {
            item.parking.isEmpty = true;
            item.parking.tankWaitingReservation = null;
        }
        if (item) {
            item.state = $tankItem.TankWaitingState.Idle;
            item.setArrowVisible(true);
        }
        this.movingItem = null;
    }

    getItemData(node) {
        var item = node && node._tankWaitingItem;
        if (!item) {
            return null;
        }
        return {
            carColor: item.colorId,
            seatTotalAmount: item.capacity,
            item: item
        };
    }

    onAssemblyComplete(node) {
        var item = node && node._tankWaitingItem;
        if (!item) {
            return false;
        }
        item.state = $tankItem.TankWaitingState.Complete;
        var index = this.items.indexOf(item);
        if (index >= 0) {
            this.items.splice(index, 1);
        }
        node.destroy();
        return true;
    }
}
