abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
}
const Vikas = new TakePhoto("test", "test");
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstPhoto: string
  ) {
    super(cameraMode, filter);
  }
  getSepia() {
    console.log("Hey");
  }
  getReelTime(): number {
    return 1;
  }
}
const hc = new Instagram("test", "test", "sqsiqjs");
export {};
