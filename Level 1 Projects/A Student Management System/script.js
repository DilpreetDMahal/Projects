// init students array
const students =[];

// add student
function addStudents(name, grade){
    students.push({
        name,
        grade,
    });
}

// function to remove students
function removeStudent(name){
    const index = students.findIndex(students => students.name === name);
    if(index !== -1){
        students.splice(index, 1);
        console.log(name, "has been removed");
    } else {
        console.log(name,"was not found");
    }

}

//Function to filter students
function filterTopStudents(minGrade){
    return students.filter((students) => students.grade >= minGrade);
}

// function to map students in formatted list
function formatStudentList(){
    return students.map((students) => `${students.name} - Grade : ${students.grade}`);
}

// start

console.log("students = ", students);

//add students
addStudents("Alice", 85);
addStudents("Davie", 95);
addStudents("Charles", 65);

console.log("STUDENT LIST:");
console.log(formatStudentList());

removeStudent("Davie");


console.log("STUDENT LIST:");
console.log(formatStudentList());

addStudents("Emma", 92);

console.log("Student with Grade equal or higher than 80")
console.log(filterTopStudents(80));