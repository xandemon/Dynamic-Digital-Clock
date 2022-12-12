let section = document.querySelector("section"),
    mode = document.querySelector(".mode"),
    date, hr, min, sec, ampm;

//what happends when clicked on switch mode button

mode.onclick = ()=> {
    section.classList.toggle("dark");
    document.querySelector("i").classList.toggle("fa-sun");
};

//updating the date in htm every 1second

setInterval(()=> {

    //fetching date
    date = new Date();
    console.log(date);
    hr = date.getHours();
    min =date.getMinutes();
    sec =date.getSeconds();

    //setting logic
    ampm = (hr < 12)? "AM" : "PM";
    hr = (hr > 12)? hr - 12: hr;
    hr = (hr < 10)? "0" + hr: hr;
    hr = (hr === 00)? 12 : hr;
    min = (min < 10)? "0" + min: min;
    sec = (sec < 10)? "0" + sec: sec;

    //returning live data
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.querySelector(".ampm").innerHTML = ampm;
}, 1000);