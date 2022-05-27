var input = document.getElementById("uni");

function foo() {
  // create <p> tag
  var createE = document.createElement("p");
  //  create button
  var $button = document.createElement("button");
  $button.innerHTML = "<i class='fa-solid fa-circle-check'></i>"
  var button = document.createElement("button");
  var sec = document.createElement("section");
  button.innerHTML = "<i class='fa-solid fa-trash'></i>";
  var box = document.getElementById("box");
  var para = document.getElementById("para");

  if (input.value == "") {
    box.style.display = "block"
    para.appendChild(box);
  }
  else {
    var head = document.getElementsByTagName("h2");
    head[1].style.display = "block"
    box.style.display = "none"
    createE.innerHTML = input.value;
    para.appendChild(sec);
    sec.appendChild(createE);
    sec.appendChild($button);
    sec.appendChild(button);
    $button.setAttribute("onclick", "done(this)")
    button.setAttribute("onclick", "remove(this)")
    input.value = ""
  }
}

var div = document.getElementById("para");

function remove(e) {
  var pre = e.previousSibling;
  e.parentNode.style.display = "none";
  pre.parentNode.style.position = "absolute";
  // this is use for sound
  var sounnd = document.getElementById("sound1");
  sounnd.play();
}



// this function is use for done ✔

function done(e) {
  var pre = e.previousSibling;
  e.parentNode.style.backgroundColor = "#3a3a47"
  pre.style.textDecoration = "line-through"
  e.style.color = "red";
  e.nextSibling.style.color = "#55DD33";
  // Change parent
  var main = document.getElementById("main");
  main.appendChild(pre.parentNode);
  // visible complete heaidng
  var head = document.getElementsByTagName("h2");
  head[0].style.display = "block"
  // this use for the sound
  var sounnd = document.getElementById("sound");
  sounnd.play();

}

//Enter Function

var input = document.getElementById("uni");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
    var sounnd = document.getElementById("sound");
    sounnd.play();
  }
});


// Dark Mode

function myFunction(e) {
  var element = document.body;
  element.classList.toggle("dark-mode");
  document.getElementById("star").style.display = "none";
  document.getElementById("bri").style.display = "inline";
  if (e == "click") {
    document.getElementById("star").style.display = "block";
    document.getElementById("bri").style.display = "none";
  }
}



// live Change 

function startTime() {
  const today = new Date();
  let s = today.getSeconds();
  s = checkTime(s);
  setTimeout(startTime, 1000);
  var h1 = document.getElementById("h0");
  // h1.innerHTML = s;
  // console.log(s)
  if (s > 0) {
    h1.className = 'animate__animated animate__fadeInDownBig'
    h1.innerHTML = "T O D O"
  }
  if (s > 10) {
    h1.className = 'animate__animated animate__fadeInDownBig'
    h1.innerHTML = "The Tasks"
  } if (s > 18) {
    h1.className = 'animate__animated animate__fadeInUp'
    h1.innerHTML = "Getting Start"
  }
  if (s > 26) {
    h1.className = 'animate__animated animate__flipInX'
    h1.innerHTML = "To Do List"
  } if (s > 34) {
    h1.className = 'animate__animated animate__fadeInUp'
    h1.innerHTML = "Planned"
  } if (s > 42) {
    h1.className = 'animate__animated animate__flipInX'
    h1.innerHTML = "Work List"
  } if (s > 50) {
    h1.className = 'animate__animated animate__fadeInUp'
    h1.innerHTML = "Thing To Do"
  }
  if (s > 57) {
    h1.className = 'animate__animated animate__fadeInLeftBig'
    h1.innerHTML = "Daily Planner"
  }


}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}
