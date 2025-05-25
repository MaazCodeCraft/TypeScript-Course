"use strict";
class Ride {
    static _activeRide = 0;
    start() {
        Ride._activeRide++;
    }
    stop() {
        Ride._activeRide--;
    }
    static get activeRide() {
        return Ride._activeRide;
    }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRide);
//# sourceMappingURL=index.js.map