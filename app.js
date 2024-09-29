document.getElementById("year-output").textContent = 0;
document.getElementById("month-output").textContent = 0;
document.getElementById("day-output").textContent = 0;

var  inputDate = document.getElementById("input-date").value;


function ageCalculator(){
    var data = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDay();

    document.getElementById("year-output").textContent = year;
    document.getElementById("year-month").textContent = year;
    document.getElementById("year-day").textContent = year;

}