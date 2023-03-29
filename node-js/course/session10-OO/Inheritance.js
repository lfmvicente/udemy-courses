class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }

    printName(){
        console.log(this.name)
    }

    printColor(){
        console.log(this.color)
    }
}

class Dog extends Animal {
    
    bark(){
        console.log('Awwwwww')
    }

    printDogColor(){
        super.printColor();
        console.log('Now you know my color')
    }
}

let dog = new Dog("Pluto", "Yellow")
dog.printName();
dog.bark();
dog.printDogColor();

class Cat extends Animal{
    constructor(name, color, age){
        super(name, color) //it's like parent::__construct on PHP
        this.age = age
    }

    printAge(){
        console.log(this.age)
    }
}

let meow = new Cat("Meow", "white", 3)
meow.printName()
meow.printColor()
meow.printAge()