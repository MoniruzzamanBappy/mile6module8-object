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

for (const key in student) {

    // console.log(student[key]);
    // console.log(key);


}

for (const [key, value] of Object.entries(student)) {

    console.log(key, value);


}