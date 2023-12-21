const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet


for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    if (h == 0) {
        h = 12;
      } else {
        h = h;
      }
      
      if (h < 10) {
        h = "0" + h;
      } else {
        h = h;
      }
      
      if (m < 10) {
        m = "0" + m;
      } else {
        m = m;
      }
      
      if (s < 10) {
        s = "0" + s;
      } else {
        s = s;
      }
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

   
       
       
});

function setAlarm() {
    if (isAlarmSet) {
      alarmTime = "";
      isAlarmSet = false;
      content.classList.remove("disable");
      setAlarmBtn.innerText = "Set Alarm";
      
      return;
    }
  
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
      return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    alert("The alarm is set!");
  }

setAlarmBtn.addEventListener("click", setAlarm);