function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    // Create student object
    const student = {
        firstName,
        lastName,
        email,
        course
    };


    updateDatabase(student);

    document.getElementById('registrationForm').reset();
}

function updateDatabase(student) {
   
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = JSON.parse(xhr.responseText);

            // Add the new student to the data
            data.students.push(student);

            // Update the JSON file
            const updatedData = JSON.stringify(data, null, 2);
            const updateXhr = new XMLHttpRequest();
            updateXhr.open("PUT", "db.json", true);
            updateXhr.setRequestHeader("Content-Type", "application/json");
            updateXhr.send(updatedData);
        }
    };
    xhr.open("GET", "db.json", true);
    xhr.send();
}