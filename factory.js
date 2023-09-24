// Create different objects with only one class/factory.

// Code example:

class Employee {
  create (type) {
    let employee = null;
    if (type === 'fulltime') {
      employee = new FullTime();
    } else if (type === 'parttime') {
      employee = new PartTime();
    } else if (type === 'temporary') {
      employee = new Temporary();
    } else if (type === 'contractor') {
      employee = new Contractor();
    }
    
    employee.type = type;
    
    employee.say = function () {
      console.log(`${this.type}: rate ${this.rate}/hour`);
    }
  }
}

class Fulltime {
  constructor () {
    this.rate = '$12';
  }
}

class PartTime {
  constructor () {
    this.rate = '$11';
  }
}

class Temporary {
  constructor () {
    this.rate = '$10';
  }
}

class Contractor {
  constructor () {
    this.rate = '$15';
  }
}

const factory = new Employee();
fulltime = factory.create('fulltime');
parttime = factory.create('parttime');
temporary = factory.create('temporary');
contractor = factory.create('contractor');

fulltime.say();
parttime.say();
temporary.say();
contractor.say();
