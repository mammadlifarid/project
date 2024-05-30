const studentFullnameInput = document.getElementById("student_fullname_input");
const studentBirthdateInput = document.getElementById("student_birthdate_input");
const studentTeacherInput = document.getElementById("student_teacher_input");

const teacherFullnameInput = document.getElementById("teacher_fullname_input");
const teacherSubjectInput = document.getElementById("teacher_subject_input");
const teacherExperienceInput = document.getElementById("teacher_experience_input");

const studentFullnameP = document.getElementById("student_fullname_p");
const studentBirthdateP = document.getElementById("student_birthdate_p");
const studentTeacherP = document.getElementById("student_teacher_p");

const teacherFullnameP = document.getElementById("teacher_fullname_p");
const teacherSubjectP = document.getElementById("teacher_subject_p");
const teacherExperienceP = document.getElementById("teacher_experience_p");

let students = [];
let teachers = [];

function addStudent() {
    event.preventDefault();
    const student = {
        fullname: studentFullnameInput.value,
        birthdate: studentBirthdateInput.value,
        teacher: studentTeacherInput.value,
    };

    students.push(student);

    studentFullnameP.innerText = "Student fullname: " + student.fullname;
    studentBirthdateP.innerText = "Student birthdate: " + student.birthdate;
    studentTeacherP.innerText = "Student's teacher: " + student.teacher;


    const teacherStudentCount = students.filter(s => s.teacher === student.teacher).length;
    if (teacherStudentCount > 5) {
        alert("Max 5 students allowed for " + student.teacher + "'s class");
    }
}
if (studentBirthdateInput < Date) {
    alert("only adults allowed");
}

function addTeacher() {
    event.preventDefault();
    const teacher = {
        fullname: teacherFullnameInput.value,
        subject: teacherSubjectInput.value,
        experience: teacherExperienceInput.value,
    };

    teachers.push(teacher);

    let option = document.createElement("option");
    option.value = teacher.fullname + ", " + teacher.subject;
    option.innerText = teacher.fullname + ", " + teacher.subject;
    studentTeacherInput.appendChild(option);

    teacherFullnameP.innerText = "Teacher fullname: " + teacher.fullname;
    teacherSubjectP.innerText = "Teacher subject: " + teacher.subject;
    teacherExperienceP.innerText = "Teacher's experience: " + teacher.experience;
}