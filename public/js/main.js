
const date = document.getElementById('tim');
let day, month , year , dat, th, tm;
let sbut = document.getElementById("sbut");
let search = document.getElementById('search');
let loc;
let cit = document.getElementById('cit');
condi_size = document.getElementById('condi_size');
temp = document.getElementById('temp');
let url;
let full_data , fulldata, arrdata;


//--------------------for creating date
const setdate = (getday)=>{   
    getday();
    date.innerHTML = `${th} : ${tm} | ${day} | ${dat} ${month} | ${year}`;
    // console.log(d);
};




//-------------------------------------


//-----------------------------getting day month year time

const getday = ()=>{

    let d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // console.log(days[d.getDay()]);
    day = days[d.getDay()];

    const months = ["jan", "feb", "mar", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
    month = months[d.getMonth()];

    year = d.getFullYear();

    dat = d.getDate();

    th=d.getHours();
    tm=d.getMinutes();

}
setdate(getday);

//==============================getting info of city by search button


sbut.addEventListener('click' , async()=>{
    loc = search.value;
    search.value = "";
    url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=9af7f52236df378853a99d40788ec633`;
    
     full_data = await fetch(url);
     fulldata = await full_data.json();
      arrdata = [fulldata];
     condi_size.innerText = arrdata[0].weather[0].description;
     temp.innerText = arrdata[0].main.temp;
     cit.innerText = arrdata[0].name;
    

      


});

async function fun()
{
    loc = "lahore";
    url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=9af7f52236df378853a99d40788ec633`;
    
     full_data = await fetch(url);
     fulldata = await full_data.json();
      arrdata = [fulldata];
     condi_size.innerText = arrdata[0].weather[0].description;
     temp.innerText = arrdata[0].main.temp;
     cit.innerText = arrdata[0].name;
    
}
fun();





//==============================api   https://api.openweathermap.org/data/2.5/weather?q=lahore&units=metric&appid=9af7f52236df378853a99d40788ec633 