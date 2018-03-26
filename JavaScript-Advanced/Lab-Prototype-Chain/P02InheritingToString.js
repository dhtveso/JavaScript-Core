function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email)
            this.subject = subject;
        }

        toString() {
            let baseTostring = super.toString().slice(0, -1);
            return `${baseTostring}, subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email)
            this.course = course;
        }
        toString() {
            let baseTostring = super.toString().slice(0, -1);
            return `${baseTostring}, course: ${this.course})`
        }
    }

    return { Person, Teacher, Student }
}

let obj = personAndTeacher();
let Person = obj['Person'];

module.exports = Person;