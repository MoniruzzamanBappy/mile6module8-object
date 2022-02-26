const name1 = { name: 'bappy', job: 'student', age: 28 }
const name2 = { name: 'bappy', age: 28, job: 'student' }

if (JSON.stringify(name1) === JSON.stringify(name2)) {
    // console.log('are equal');
}
else {
    // console.log('are not equal');
}

function compare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false
        }
    }
    return true;
}

const isEqual = compare(name1, name2);
console.log(isEqual);