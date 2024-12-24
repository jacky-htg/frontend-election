var toggle_btn;
var big_wrapper;
var hamburger_menu;
// var login;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  // login = document.getElementById("loginForm")
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}
events();
document.getElementById('loginBtn').onclick = function() {
  document.getElementById('loginForm').style.display = 'block';
};

document.getElementById('closeBtn').onclick = function() {
  document.getElementById('loginForm').style.display = 'none';
};

document.getElementById("loginForm").addEventListener("submit",function(event){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    window.open("../dashboard.html");
  } else {
    alert("Username atau password salah!");
  }
});

document.getElementById("addCandidateBtn").addEventListener("click", function() {
  var candidateName = document.getElementById("candidateName").value;
  var candidateParty = document.getElementById("candidateParty").value;

  var li = document.createElement("li");
  li.textContent = candidateName + " - " + candidateParty;

  document.getElementById("candidateList").appendChild(li);

  document.getElementById("candidateName").value = "";
  document.getElementById("candidateParty").value = "";
});