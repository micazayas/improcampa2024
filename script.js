(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "05/11/",
      earlyBirds = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > earlyBirds) {
    earlyBirds = dayMonth + nextYear;
  }
  
  const countDown = new Date(earlyBirds).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
        distance = countDown - now;

        const days = Math.floor(distance / day).toString().padStart(2, '0');
        const hours = Math.floor((distance % day) / hour).toString().padStart(2, '0');
        const minutes = Math.floor((distance % hour) / minute).toString().padStart(2, '0');
        const seconds = Math.floor((distance % minute) / second).toString().padStart(2, '0');

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
      }, 0)
})();

function App() {
	console.log(
		`%cDeveloped & Designed by Mica Zayas ${String.fromCodePoint(0x0270c)}`,
		"color: #ffffff; background: black; padding: 5px 10px; border-radius: 3px; font-family: 'Verdana'"
	);
}
App();


