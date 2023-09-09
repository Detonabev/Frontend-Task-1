let day = document.getElementById('day')
let time = document.getElementById('current-time')

let d = new Date();
let name = d.getDay()

switch (name){
    case 0:
        name = 'Sunday';
        break;
    case 1:
        name = 'Monday';
        break;
    case 2:
        name = 'Tuesday';
        break;
    case 3:
        name = 'Wednesday';
        break;
    case 4:
        name = 'Thursday';
        break;
    case 5:
        name = 'Friday';
        break;
    case 6:
        name = 'Saturday';
        break;
    
}


day.innerHTML = name;

setInterval(()=>{
    time.innerHTML = d.toLocaleTimeString();

},1000)
