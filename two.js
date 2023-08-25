const student = {
    name: "John",
    age: 18,
    grade: "A"
};

function upDateGrade(newGrade){
    student.grade = newGrade;
}
upDateGrade("B");
console.log(student);