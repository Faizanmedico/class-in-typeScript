
//     Example: Basic Class

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person = new Person("Sultan Ahmed", 60);
person.greet(); // Output: Hello, my name is Sultan Ahmed and I am 60 years old.




//     Example: Class Properties
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

let car = new Car("DFSK Glory", "Pakistan", 2024);
console.log(car.getCarInfo()); // 

    
//     Example: Class Methods
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}

let calculator = new Calculator();
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2




//       Example: Constructors
class Book {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getBookInfo(): string {
        return `${this.title} by ${this.author}`;
    }
}

let book = new Book("2024", "Sultan Ahmed");
console.log(book.getBookInfo()); // Output: 2024 by Sultan Ahmed



//        Example: Getters and Setters
class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        if (value <= 0) {
            throw new Error("Width must be positive.");
        }
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        if (value <= 0) {
            throw new Error("Height must be positive.");
        }
        this._height = value;
    }

    getArea(): number {
        return this._width * this._height;
    }
}

let rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea()); // Output: 200

rectangle.width = 15;
console.log(rectangle.getArea()); // Output: 300

// rectangle.width = -5; // Error: Width must be positive.


