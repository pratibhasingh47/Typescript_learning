abstract class TakePhotoo {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void

    getReelTime(): number {
        return 7
    }
}


class Instagramm extends TakePhotoo {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Hii sepia")
    }
}

const prats = new Instagramm("test", "test", 3)