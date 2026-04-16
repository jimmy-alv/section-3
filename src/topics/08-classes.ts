export class Person {
    
    constructor( public name: string, public address: string ) {}
}


const me = new Person("Jaime", "Barranquilla")

console.log(me)