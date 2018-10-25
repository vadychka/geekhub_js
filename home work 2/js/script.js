var student = {
    name: "Paha",
    age: 20,
}
console.log(student)
//push

student.faculty = 'economika'
console.log(student)

//pop

delete student.age
console.log(student)

//find

var students = {
    Paha : "23",
    Roma : "30",
    Oleg : "28",
}
var find =Object.seal(students.Roma)
console.log(find)

var findKeys = Object.keys(students)
console.log(findKeys)

var findVal = Object.values(students)
console.log(findVal)


//join

var students2 = {
    0 : 'n',
    1 : 'a',
    2 : 'm',
    3 : 'e',
    length: 4
};

var obj = Object.assign(students,students2)
console.log(obj)

students2.join = [].join;
console.log(students2.join('  '));
// filter

var cars ={
    25 : 'BMV',
    11 : 'VAZ',
    9 : 'LADA',
    67: 'VOLVO'
}
var b = Object.keys(cars).filter(function (num) {
    return num > 12
})
console.log(b)



//toSrting

var b = obj[1].toString()
console.log(b)

//sort

var sortVal = Object.values(obj)
var sortVal2 = sortVal.sort()
console.log(sortVal2)

var sortKeys = Object.keys(obj)
var sortKeys2 = sortKeys.sort()
console.log(sortKeys2)


var b = Object.keys(cars).sort(function (a,b) {
    return b-a;
})
var c = Object.keys(cars).sort(function (a,b) {
    return a-b;
})
console.log(b)
console.log(c)
//map
var cars ={
    25 : 'BMV',
    11 : 'VAZ',
    9 : 'LADA',
    67: 'VOLVO'
}

for (car in cars){
    console.log(car);
    console.log(car.length);
    console.log(car * 2);
}


var b = Object.keys(cars).map(function (num) {
    return num * 2;
})
//length
console.log(Object.keys(cars).length)
console.log(Object.values(cars).length)

var firstStudent = {
    name: 'Oleg',
    surname: 'Ivanov',
    age: 23
}
//get

Object.defineProperty(firstStudent, 'fullName',{

    get : function () {
        return (this.name + ' ' + this.surname);
    }
})
console.log(firstStudent.fullName)
//

var Const = function (name,age) {
    this.name = name;
    this.age = age;
    this.say = function () {
        return 'Hello my name is ' + this.name + ' and I am ' + this.age + ' years old.';
    }
};

var roma = new Const("Roma", 25);

console.log(roma)
var paha = new Const("Pasha", 28);

console.log(roma.say())
