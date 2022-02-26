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

student.takeExam();

const newBalance = student.treatDey(1200);
console.log(newBalance);