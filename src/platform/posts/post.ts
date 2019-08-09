export class Post {
    constructor(
        public title: string,
        public id: string = Math.random().toString(36).substring(7)
    ) {}
}
