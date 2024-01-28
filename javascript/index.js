function loadtime (){

let londonElement=document.querySelector ("#london");
let londonDateElement=londonElement.querySelector (".date");
let londonTimeElement=londonElement.querySelector (".time");
let londonTime=moment ().tz (`Europe/London`);

londonDateElement.innerHTML=londonTime.format ("dddd, MMMM Do YYYY");
londonTimeElement.innerHTML=londonTime.format("HH:mm:ss [<small>]a[<small>]");

let sydneyElement=document.querySelector ("#sydney");
let sydneyDateElement=sydneyElement.querySelector (".date");
let sydneyTimeElement=sydneyElement.querySelector (".time");
let sydneyDate=moment().tz(`Australia/Sydney`);

sydneyDateElement.innerHTML=sydneyDate.format ("dddd, MMMM Do YYYY");
sydneyTimeElement.innerHTML=sydneyDate.format ("HH:mm:ss [<small>]a[<small>]");
}
setInterval (loadtime, 1000);