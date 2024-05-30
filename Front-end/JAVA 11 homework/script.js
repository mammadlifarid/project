const student_fullname_input = document.getElementById("student_fullname_input");
const student_birthdate_input = document.getElementById("student_birthdate_input");
const student_teacher_input = document.getElementById("student_teacher_input");

const teacher_fullname_input = document.getElementById("teacher_fullname_input");
const teacher_subject_input = document.getElementById("teacher_subject_input");
const teacher_experience_input = document.getElementById("teacher_experience_input");

const student_fullname_p = document.getElementById("student_fullname_p");
const student_birthdate_p = document.getElementById("student_birthdate_p");
const student_teacher_p = document.getElementById("student_teacher_p");

const teacher_fullname_p = document.getElementById("teacher_fullname_p");
const teacher_subject_p = document.getElementById("teacher_subject_p");
const teacher_experience_p = document.getElementById("teacher_experience_p");

let student = {};
let teacher = {};

function addStudent() {
    event.preventDefault();
    student = {
        fullname: student_fullname_input.value,
        birthdate: student_birthdate_input.value,
        teacher: student_teacher_input.value,
    };
    student_fullname_p.innerText = "Student fullname: " + student.fullname;
    student_birthdate_p.innerText = "Student birthdate: " + student.birthdate;
    student_teacher_p.innerText = "Student's teacher: " + student.teacher;
    console.log(student);
}

function addTeacher() {
    event.preventDefault();
    teacher = {
        fullname: teacher_fullname_input.value,
        subject: teacher_subject_input.value,
        experience: teacher_experience_input.value,
    };
    let option = document.createElement("option");
    option.value = teacher.fullname + ", " + teacher.subject;
    option.innerText = teacher.fullname + ", " + teacher.subject;
    student_teacher_input.appendChild(option);

    teacher_fullname_p.innerText = "Teacher fullname: " + teacher.fullname;
    teacher_subject_p.innerText = "Teacher subject: " + teacher.subject;
    teacher_experience_p.innerText = "Teacher's experience: " + teacher.experience;
}