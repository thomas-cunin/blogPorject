export class CardModel {
    constructor(
        public id :number,
        public author:string,
        public tagName:string,
        public description:string,
        public image: {
            src : string,
            alt :string ,

        }
    ){}
}