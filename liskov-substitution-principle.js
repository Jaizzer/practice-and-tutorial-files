/*

    Liskov-substitution principle basically says that whenever we use a parent class in our code,
    we should be able replace it with its children-class/subclass. For instance, if we use 'Animal'
    class somewhere in our code, in which 'Animal' also have a subclass, let's say 'Dog', then we
    should be able to replace all 'Animal' classes with 'Dog' classes without breaking or altering
    the behavior of our code.

    This makes sense because 'Dog' class just extends its parent class 'Animal' hence it also possesses
    all its properties and methods with just additional ones specific to 'Dog' like bark().
*/

class Animal {
    eat() {
        console.log("The animal is eating");
    }
    breathe() {
        console.log("The animal is breathing");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof woof");
    }
}

let animal1 = new Animal;
animal1.breathe(); // first breathe method call.


animal1 = new Dog; 
animal1.breathe() // second breathe method call.

/*
    Observe that when we replaced instantiation of 'Animal' with 'Dog' the breathe()
    method still works. Hence we can substitute 'Dog' in every 'Animal' instantiations.
*/