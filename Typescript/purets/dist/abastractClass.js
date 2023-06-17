"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
const Vikas = new TakePhoto("test", "test");
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burstPhoto) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstPhoto = burstPhoto;
    }
    getSepia() {
        console.log("Hey");
    }
    getReelTime() {
        return 1;
    }
}
const hc = new Instagram("test", "test", "sqsiqjs");
