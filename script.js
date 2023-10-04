let date= new Date();
let currentDay=date.getDate();
let currentMonth=date.getMonth()+1;
let currentYear=date.getFullYear();

const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function Submit()
{
    let birthYear= document.getElementById('year').value;
    let birthMonth= document.getElementById('month').value;
    let birthDay= document.getElementById('day').value;
    
    if(birthDay>31 || birthDay<1)
    {
        document.getElementById("day").style.borderColor = "red";
        document.getElementById("day-label").style.color = "red";
        document.getElementById("valid-day").innerHTML="Must be a valid day";
    }
    else 
    {
        document.getElementById("day").style.borderColor = "rgb(236, 235, 235)";
        document.getElementById("day-label").style.color = "gray";
        document.getElementById("valid-day").innerHTML="";
    }
    if(birthMonth>12 || birthMonth<1)
    {
        document.getElementById("month").style.borderColor = "red";
        document.getElementById("month-label").style.color = "red";
        document.getElementById("valid-month").innerHTML="Must be a valid month";
    }
    else 
    {
        document.getElementById("month").style.borderColor = "rgb(236, 235, 235)";
        document.getElementById("month-label").style.color = "gray";
        document.getElementById("valid-month").innerHTML="";
    }
    if(birthYear>2023||birthYear<1790)
    {
        document.getElementById("year").style.borderColor = "red";
        document.getElementById("year-label").style.color = "red";
        document.getElementById("valid-year").innerHTML="Must be a valid year";
    }
    else 
    {
        document.getElementById("year").style.borderColor = "rgb(236, 235, 235)";
        document.getElementById("year-label").style.color = "gray";
        document.getElementById("valid-year").innerHTML="";
    }
    if( (birthYear<=2023 &&birthYear>=1790) && ( birthMonth<=12 && birthMonth>=1)&&(birthDay<=31 && birthDay>=1 ))
    {
        if(birthDay > currentDay)
        {
            currentDay = currentDay + month[currentMonth - 1];
            currentMonth = currentMonth - 1;
        }
        
        if(birthMonth > currentMonth)
        {
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
        }
        document.getElementById('years').innerHTML=currentYear-birthYear;
        document.getElementById('months').innerHTML=currentMonth-birthMonth;
        document.getElementById('days').innerHTML=currentDay-birthDay;

        document.getElementById("day").style.borderColor = "rgb(236, 235, 235)";
        document.getElementById("day-label").style.color = "gray";
        document.getElementById("month").style.borderColor = "rgb(236, 235, 235)";
        document.getElementById("month-label").style.color = "gray";
        document.getElementById("year").style.borderColor = "rgb(236, 235, 235)";
        document.getElementById("year-label").style.color = "gray";

        document.getElementById("valid-year").innerHTML="";
        document.getElementById("valid-month").innerHTML="";
        document.getElementById("valid-day").innerHTML="";

    }

}