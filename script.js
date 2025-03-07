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
      dayMonth = "07/24/",
      campDay = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > campDay) {
    campDay = dayMonth + nextYear;
  }
  
  const countDown = new Date(campDay).getTime(),
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

function toggleMenu() {
  var menu = document.getElementById("menu-mobile");
  menu.classList.toggle("open");
}

function closeMenu() {
  var menu = document.getElementById("menu-mobile");
  menu.classList.remove("open");
}


document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 1;
  const items = document.querySelectorAll(".item");
  const totalItems = items.length;
  let startX = 0;
  let isDragging = false;

function showItem(index) {
    if (index > totalItems) index = 1;
    if (index < 1) index = totalItems;

    items.forEach((item, i) => {
        let rotation = item.getAttribute("data-rotate") || "0";
        item.style.transition = "transform 0.5s ease-in-out";
        item.style.transform = `translateX(${(i + 1 - index) * 600}px) rotate(${rotation}deg)`;
        item.style.animation = "none";
        setTimeout(() => {
            item.style.animation = "wobble 3s infinite ease-in-out";
        }, 500);
    });

    currentIndex = index;
}
  document.querySelectorAll(".control").forEach((button) => {
    button.addEventListener("click", () => {
      const pos = parseInt(button.getAttribute("data-pos"));
      showItem(pos);
    });
  });

  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", () => {
      let nextIndex = currentIndex + 1;
      showItem(nextIndex);
    });

    item.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    item.addEventListener("touchend", (e) => {
      let endX = e.changedTouches[0].clientX;
      if (startX > endX + 50) {
        let nextIndex = currentIndex + 1;
        showItem(nextIndex);
      } else if (startX < endX - 50) {
        let prevIndex = currentIndex - 1;
        showItem(prevIndex);
      }
    });
  });

  document.querySelector("#items-carrusel").addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
  });

  document.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    let endX = e.clientX;
    if (startX > endX + 50) {
      let nextIndex = currentIndex + 1;
      showItem(nextIndex);
    } else if (startX < endX - 50) {
      let prevIndex = currentIndex - 1;
      showItem(prevIndex);
    }
  });

  showItem(currentIndex);
});

document.getElementById("safeEmail").addEventListener("click", function (event) {
  event.preventDefault();

  let encodedUser = ["e", "x", "p", "e", "r", "i", "e", "n", "c", "i", "a", "i", "m", "p", "r", "o"];
  let encodedDomain = ["g", "m", "a", "i", "l", ".", "c", "o", "m"];
  let user = encodedUser.join("");
  let domain = encodedDomain.join("");
  let email = user + "@" + domain;
  let mailtoLink = "mailto:" + email;
  window.location.href = mailtoLink;

  setTimeout(() => {
    if (!document.hasFocus()) return;
    let choice = confirm("¿Hola improcampista, quieres abrir Gmail?\n\nSi usas Outlook (Hotmail), presiona 'Cancelar'.");
    if (choice) {
      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + email, "_blank");
    } else {
      window.open("https://outlook.live.com/owa/?path=/mail/action/compose&to=" + email, "_blank");
    }
  }, 1000);
});
