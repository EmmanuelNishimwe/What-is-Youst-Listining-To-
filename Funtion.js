function clock(){
    var Months = ["January","Febuary","March","April","May","June","July","August","Setember","October","November","December"]
    var Days = ["Sunday","Monday","Tuesday","Wensday","Thursday","Friday","Saturday"]

  let DTxt = document.getElementById("Date");
  let TTxt = document.getElementById("Time");
  let CT = new Date();

  let Hour 
  let Mins 

  if (CT.getMinutes() < 10) {
    Mins =  "0"+ CT.getMinutes().toString()
  }
  else {
    Mins = CT.getMinutes().toString()
  };

  if (CT.getHours() === 0) {
    Hour = 12
  }
  else {
    Hour = CT.getHours()
  };

  
  TTxt.innerText = Hour + ":" + Mins;
  DTxt.innerText = Days[CT.getDay()] + ", " + Months[CT.getMonth()] +" "+CT.getDate();
};

var inter = setInterval(clock,400)