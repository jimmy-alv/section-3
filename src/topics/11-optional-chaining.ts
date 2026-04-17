export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Jaime'
}

const passenger2: Passenger = {
    name: 'Angie', 
    children: ['Alejo', 'Daniel']
}

const returnChildrenNumber = (passenger: Passenger): number => {
    const {children } = passenger

    const howManyChildren = children?.length || 0

    return howManyChildren
}

const name = passenger2.name
const childrenNumber = returnChildrenNumber(passenger2)

console.log(name, childrenNumber)