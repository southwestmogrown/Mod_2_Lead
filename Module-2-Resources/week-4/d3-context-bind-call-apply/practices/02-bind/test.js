const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

const sayJohn = john.sayName.bind(john);

setTimeout(sayJohn, 2000);

const johnOccupation = john.sayOccupation.bind(john)

setTimeout(johnOccupation, 3000);
