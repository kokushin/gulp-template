class Message {
    constructor(
        private message:string = 'dummy'
    ) {}

    public say():void {
        console.log(this.message);
    }
}

export default Message;