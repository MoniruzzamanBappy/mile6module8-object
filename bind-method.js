const kibria = {
    id: 101,
    name: 'RJ Kibria',
    major: 'Mathematics',
    money: 5000,
    treatDey: function (expence) {
        this.money = this.money - expence;
        console.log(this);
        return this.money;
    }
}
const nadira = {
    id: 102,
    name: 'RJ Nadira',
    major: 'Mathematics',
    money: 6000
}

const nadiraTreatDey = kibria.treatDey.bind(nadira);
nadiraTreatDey(2000);