export class Person {
    public name: string;
    public address: string;

    constructor() {
        this.name = 'Jaime'
        this.address = 'Barranquilla'
    }
}


const me = new Person()

console.log(me)