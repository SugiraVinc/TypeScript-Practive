class Person{
    id: number
    name: string

    constructor(id: number, name:string){
        this.id = id
        this.name = name

    }

    register(){
        return '${this.name} is now registred'
    }

}

class Employee extends Person{
    position: string

    constructor(id:number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(3, 'shawn', 'Developer')
console.log(emp.name)




const brand = new Person(1,'Sugira Prince')
console.log(brand)
console.log(brand.register())