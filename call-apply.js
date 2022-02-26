const kibria = {
    id: 101,
    name: 'RJ Kibria',
    major: 'Mathematics',
    money: 5000,
    treatDey: function (expence, boksis, tax) {
        this.money = this.money - expence - boksis - (expence * tax / 100);
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


kibria.treatDey.call(nadira, 1000, 100, 15);

kibria.treatDey.apply(nadira, [1000, 50, 15]);