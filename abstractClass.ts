abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string
    ){}

    // abstract getSepia() :void
}


class Instagramm extends TakePhoto{
    constructor(
        public cameraMode :string,
        public filter : string,
        public burst : number
    ){
        super(cameraMode,filter)
    }
}

// const prats = new TakePhoto("test" , "test")