// Classes bbutton
let allCmnd = document.querySelector(".allCmnd").children
let todo = document.querySelector(".todo").children
let todoTab = document.querySelector(".todoTab")
let todoTab2 = document.getElementsByClassName("todoTab")[0]
let todo2 = document.getElementsByClassName("todo")[0]
let input = document.querySelector("input")
let liste = document.getElementById("liste")
let liste2 = document.querySelector("#liste").children

let input2 = document.createElement("input")
input2.value =  input
let btn1 = document.createElement("button")
btn1.innerHTML = '<i class="far fa-check-circle"></i>'
let btn2 = document.createElement("button")
btn2.innerHTML = '<i class="far fa-edit"></i>'
let btn3 = document.createElement("button")
btn3.innerHTML = '<i class="fas fa-backspace"></i>'

let mdl = [input, btn1, btn2, btn3]

// button all
let ended = allCmnd[0]
let toDo = allCmnd[1]
let all = allCmnd[2]
//  button input
let add = todo[1]
// let clear = btn1
// let modif = btn2
// let delet = btn3

// let clonage = [input,clear,modif,delet,add]
// console.log(clear);
// [[[[[[[[[[[[[[[[[[[Commandes generales]]]]]]]]]]]]]]]]]]]

ended.addEventListener("click", () => {

})
toDo.addEventListener("click", () => {

})
all.addEventListener("click", () => {

})
// [[[[[[[[[[[[[[[[[[[[[commandes input]]]]]]]]]]]]]]]]]]]]]


btn1.addEventListener("click", () => {
    if (input.style.backgroundColor == "green") {
        input.style.backgroundColor = "red"
        // input.style.backgroundColor = "black"
    } else {
        input.style.backgroundColor = "green"
        // input.style.backgroundColor = "white"
    }
})
btn2.addEventListener("click", () => {
    if (input.disabled == true) {
        input.disabled = false
    } else {
        input.disabled = true
    }
})
btn3.addEventListener("click", () => {
    input.value = ""
})

console.log(todo2);
add.addEventListener("click",(e) => {
    mutiClonage(todo2)
    monsterGenerator(liste)
    
    
})







// // Keyup => pour le fonctionnement Enter
// if (e.key === 'Enter'|| e.Keycode === 13) {
    
// }

console.log();















// {{{{{{{{{{{{{{{{{{{{{{{{Laboratoire de fonctions}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// function Monster_generator @{+_+}@

let monsterGenerator = (parent) =>{
    mdl.forEach(el => {
    
        parent.appendChild(el)
    });
  
}

//  [[[[[[[[[[[[[[[""""""""""""""""function clonage""""""""""""""""]]]]]]]]]]]]]]]

let mutiClonage = (el) =>{   
   
    let clone = el
    let suite = el.cloneNode(true)
    clone.appendChild(suite) 

    // suite.children[0].value = ""

}




























// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Experiances ratée]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// let btntoDo = e.currentTarget
// let Todo = btntoDo.parentNode
// console.log(Todo);
// let clone = Todo.cloneNode(true)

// console.log(clone);

// let i = 0 
// for (i = 1; i < 20; i++) {
//     let clone = todo.cloneNode(true)
//     clone.class = "todo"+i
//     // document.getElementsByTagName("div").appendChild(clone)   
// }
// clonage.forEach(el => {
//     el.cloneNode(true)   
//     // el.name = el + "_" + i 
//     // let espere = document.getElementsByClassName(".todo").appendChild(el)      
//     i++
// });
// i++

// var i = 1;
// let duplic = (element) =>
// {
//    i++;
//    clone = element.cloneNode(true);
//    clone.name = element + '' + i;
// }

// duplic(clonage)