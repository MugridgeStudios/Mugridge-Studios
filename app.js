function signup() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);
  alert("Account created!");
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === localStorage.getItem("user") &&
      pass === localStorage.getItem("pass")) {
    startApp();
  } else {
    alert("Wrong login");
  }
}

function startApp() {
  document.getElementById("loginScreen").style.display = "none";
  document.querySelector(".sidebar").style.display = "block";
  document.querySelector(".main").style.display = "block";
}

function showPage(page) {
  document.querySelectorAll(".card").forEach(el => el.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
}

function runCode() {
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");
  output.innerHTML = "";
  console.log = msg => output.innerHTML += msg + "<br>";

  try {
    eval(code);
  } catch (e) {
    output.innerHTML = e;
  }
}

let progress = localStorage.getItem("progress") || 0;
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("progress").innerText = "Progress: " + progress + "%";
});

function completeLesson() {
  progress = parseInt(progress) + 10;
  localStorage.setItem("progress", progress);
  document.getElementById("progress").innerText = "Progress: " + progress + "%";
}

function askAI() {
  const input = document.getElementById("aiInput").value.toLowerCase();
  const output = document.getElementById("aiOutput");

  if (input.includes("hello")) {
    output.innerText = "Hey!";
  } else if (input.includes("loop")) {
    output.innerText = "A loop repeats code multiple times.";
  } else {
    output.innerText = "I'm still learning!";
  }
}
