const showStudents = document.getElementById('showStudents');
const showStudentsBtn = document.getElementById('showStudentsBtn');

showStudentsBtn.addEventListener('click', ()=> {
    
    fetch('/ajaxGetStudents.php')
    // even though we made a json on php file, we still 
    // need to .json again here, to process the string(json) from /ajaxGetDate.php
    .then( response => response.json() ) 
    .then( (data) => {
        showStudents.innerHTML = '';
        data.forEach( student => {
            showStudents.innerHTML += `<li>${student}</li>`
        })
    })
})