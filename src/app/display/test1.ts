class Person{
    id;
    name;
    email;

    constructor(id:number, name:String, email:String){
        this.id=id;
        this.name=name;
        this.email=email;
    }

}

// let p = new Person(1,'tejas','tej@gmail.com');
// console.log(p.id+" "+p.name+" "+p.email);
class Employee extends Person{
    salary;
    constructor(id:number, name:String, email:String,salary:number){
        super(id,name,email);
        this.salary=salary;
    }
}



let emp = new Employee(1,'tejas','tej@gmail.com',20000);

console.log(emp.id+" "+emp.name+" "+emp.email+" "+emp.salary);