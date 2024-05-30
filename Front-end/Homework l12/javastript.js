function submitForm(formId, resultDivId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const resultDiv = document.getElementById(resultDivId);

    resultDiv.innerHTML = ''; // Clear previous results

    formData.forEach((value, key) => {
        resultDiv.innerHTML += `<p>${key}: ${value}</p>`;
    });
}

// For students
function submitStudentForm() {
    submitForm('studentForm', 'studentResults');
}

// For teachers
function submitTeacherForm() {
    submitForm('teacherForm', 'teacherResults');
}