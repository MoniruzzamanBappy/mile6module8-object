const student = {
    id: 101,
    name: 'RJ Kibria',
    major: 'Mathematics',
    money: 5000,
    subject: ['english', 'math 101', 'math fundamental', 'physics', 'Algebra'],
    job: {
        designamtion: 'student',
        friend: {
            name: 'Bappy',
            major: 'English',
            id: 202
        }
    },
    gender: 'male',
    islocal: true,
    takeExam: function () {
        console.log(this.name, 'Take Exam');
    },
    treatDey: function (expence) {
        this.money = this.money - expence;
        return this.money;
    }
}

const key = Object.keys(student);
// console.log(key);
const value = Object.values(student);
// console.log(value);

const all = Object.entries(student.job.friend);
console.log(all);

Object.seal(student);
delete student.name;
console.log(student);