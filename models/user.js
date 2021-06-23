const users =[{name:"max",age:22}];

module.exports = class Users{
    constructor(name, age) {
        this.name =name;
        this.age = age
    }
    save(){
        users.push(this)
    }
    static getAll(){
        return users
    }
}