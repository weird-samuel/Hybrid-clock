let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotatez(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotatez(${mm}deg)`;
    sc.style.transform = `rotatez(${ss}deg)`;

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM"

    if (h > 12) {
        h = h - 12
    };

    h = (h < 10) ? "0" + h : h;
    s = (s < 10) ? "0" + s : s;
    m = (m < 10) ? "0" + m : m;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
})