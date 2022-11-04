const showHour = document.getElementById('showHour');
const dateHour = document.getElementById('dateHour');


const showDatas = (datas) => {
    let dateFromServer = datas;
    dateHour.innerHTML = dateFromServer;
}

showHour.addEventListener('click', ()=> {

    fetch('/ajaxGetDate.php') // what i want to get 

    .then((response)=>{  //response - json
        return response.json();
    }) 
    .then((datas)=>{ // the return from the back ( ex: json file )
        let dateFromServer = datas;
        dateHour.innerHTML = dateFromServer;
    })
    // anything here is async with fetch 
})