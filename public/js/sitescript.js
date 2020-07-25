const timeday = document.getElementById('timeday1');
const timehour = document.getElementById('timehours1');
const timeminutes= document.getElementById('timeminutes1');
const timeseconts = document.getElementById('timeseconds1')
var ngayKetThuc = new Date(2020,12,15,16,24,60); //Ngay ket thuc khuyen mai
var timeNow = new Date();
var durationInMillis = ngayKetThuc.getTime() - timeNow.getTime();
var second = (durationInMillis / 1000) % 60;
var minute = (durationInMillis / (1000 * 60)) % 60;
var hour = (durationInMillis / (1000 * 60 * 60)) % 24;
timeday.innerHTML = Math.ceil(durationInMillis * 1.1574074 *Math.pow(10,-8));
timehour.innerHTML = Math.ceil(hour);
timeminutes.innerHTML = Math.ceil(minute);
timeminutes.innerHTML = Math.ceil(minute);
timeseconts.innerHTML = Math.ceil(second);
let time = setTimeout(timer,1000);
function timer(){
var timeNow = new Date();
var durationInMillis = ngayKetThuc.getTime() - timeNow.getTime();
var second = (durationInMillis / 1000) % 60;
var minute = (durationInMillis / (1000 * 60)) % 60;
var hour = (durationInMillis / (1000 * 60 * 60)) % 24;
timeday.innerHTML = Math.ceil(durationInMillis * 1.1574074 *Math.pow(10,-8));
timehour.innerHTML = Math.ceil(hour);
timeminutes.innerHTML = Math.ceil(minute);
timeminutes.innerHTML = Math.ceil(minute);
timeseconts.innerHTML = Math.ceil(second);
setTimeout(timer,1000)
}
