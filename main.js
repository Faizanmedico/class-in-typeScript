//     Example: Basic Class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var person = new Person("Sultan Ahmed", 60);
person.greet(); // Output: Hello, my name is Sultan Ahmed and I am 60 years old.
//     Example: Class Properties
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarInfo = function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model);
    };
    return Car;
}());
var car = new Car("DFSK Glory", "Pakistan", 2024);
console.log(car.getCarInfo()); // 
//     Example: Class Methods
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
//       Example: Constructors
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getBookInfo = function () {
        return "".concat(this.title, " by ").concat(this.author);
    };
    return Book;
}());
var book = new Book("2024", "Sultan Ahmed");
console.log(book.getBookInfo()); // Output: 2024 by Sultan Ahmed
//        Example: Getters and Setters
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this._width = width;
        this._height = height;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error("Width must be positive.");
            }
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error("Height must be positive.");
            }
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getArea = function () {
        return this._width * this._height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea()); // Output: 200
rectangle.width = 15;
console.log(rectangle.getArea()); // Output: 300
// rectangle.width = -5; // Error: Width must be positive.
