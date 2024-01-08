var hours = document.getElementsByClassName('hours')[0];
var mins = document.getElementsByClassName('mins')[0];
var secs = document.getElementsByClassName('secs')[0];

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hours.style.transform = `rotate(${hrotation}deg)`;
    mins.style.transform = `rotate(${mrotation}deg)`;
    secs.style.transform = `rotate(${srotation}deg)`;
}, 1000);
