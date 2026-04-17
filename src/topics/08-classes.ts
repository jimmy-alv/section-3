export class Person {
    constructor(
        public name: string, 
        public address: string 
    ){}
}

export class Hero{
    constructor (
        public alterEgo: string, 
        public age: number, 
        public realName: string,
        public person: Person
    ){} 
}

const person = new Person('Jaime', 'Barranquilla')
const me = new Hero('TheJimmyX', 41, 'Jaime', person)

console.log(me)