import { mutiClonage, monsterGenerator } from "./modules.js/fonctions.js";
/* ----------------------------- Classes bbutton ---------------------------- */
let allCmnd = document.querySelector(".allCmnd").children;
let todo = document.querySelector(".todo").children;
let todoTab = document.querySelector(".todoTab");
let todoTab2 = document.getElementsByClassName("todoTab")[0];
let todo2 = document.getElementsByClassName("todo")[0];
let input = document.querySelector("input");
let liste = document.getElementsByClassName("liste")[0];
let liste2 = document.querySelector(".liste").children;

console.log(allCmnd);
/* ------------------------------ button all ----------------------------- */
let ended = allCmnd[0];
let toDo = allCmnd[1];
let all = allCmnd[2];
//  button input
let add = todo[1];
let delAll = todo[2];
console.log(delAll);
/* --------------------------- Commandes generales -------------------------- */

ended.addEventListener("click", () => {
  let allitems = document.querySelectorAll(".liste>div");
  allitems.forEach((e) => {
    e.style.display = "";
  });
  allitems.forEach((e) => {
    if (e.children[0].style.backgroundColor !== "green") {
      e.style.display = "none";
    }
  });
});
toDo.addEventListener("click", () => {
  let allitems = document.querySelectorAll(".liste>div");
  allitems.forEach((e) => {
    e.style.display = "";
  });
  allitems.forEach((e) => {
    if (e.children[0].style.backgroundColor === "green") {
      e.style.display = "none";
    }
  });
});
all.addEventListener("click", () => {
  let allitems = document.querySelectorAll(".liste>div");
    allitems.forEach((e) => {
        e.style.display = "";
      });
});
/* ----------------------------- commandes input ---------------------------- */

add.addEventListener("click", (e) => {
    /* ------------------------------- iv phantom ------------------------------- */
    
    
    let input2 = document.createElement("input");
    let btn1 = document.createElement("button");
    btn1.innerHTML = '<i class="far fa-check-circle"></i>';
    let btn2 = document.createElement("button");
    btn2.innerHTML = '<i class="far fa-edit"></i>';
    let btn3 = document.createElement("button");
    btn3.innerHTML = '<i class="fas fa-backspace"></i>';
    let mdl = [input2, btn1, btn2, btn3];
    
    // console.log(e);
    // if (input.value == "") {
    //   alert("Villez rentrere une tache");
    // }

  btn1.addEventListener("click", () => {
    if (input2.style.backgroundColor == "green") {
      input2.style.backgroundColor = "red";
      // input.style.backgroundColor = "black"
    } else {
      input2.style.backgroundColor = "green";
      // input.style.backgroundColor = "white"
    }
  });
  btn2.addEventListener("click", () => {
    if (input2.disabled == true) {
      input2.disabled = false;
    } else {
      input2.disabled = true;
    }
  });
  btn3.addEventListener("click", (e) => {
    let tache = e.target;
    let tache2 = tache.parentNode;
    let tache3 = tache2.parentNode;
    tache3.remove();
  });

  input2.value = input.value;
  input2.disabled = true;
  monsterGenerator(mdl);

  // mutiClonage(liste)
  input.value = "";
});
console.log(liste);
delAll.addEventListener("click", () => {
  liste.textContent = "";
});
