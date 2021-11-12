// Classes bbutton
let allCmnd = document.querySelector(".allCmnd").children
let todo = document.querySelector(".todo").children
let todoTab = document.querySelector(".todoTab")
console.log(todo);
let input = document.querySelector("input")

console.log(input);
// button all
let ended = allCmnd[0]
let toDo = allCmnd[1]
let all = allCmnd[2]
//  button input
let clear = todo[1]
let modif = todo[2]
let delet = todo[3]
let add = todo[4]
let clonage = [input,clear,modif,delet,add]
console.log(clonage);
// console.log(clear);
// [[[[[[[[[[[[[[[[[[[Commandes generales]]]]]]]]]]]]]]]]]]]

ended.addEventListener("click", () => {

})
toDo.addEventListener("click", () => {

})
all.addEventListener("click", () => {

})
// [[[[[[[[[[[[[[[[[[[[[commandes input]]]]]]]]]]]]]]]]]]]]]


clear.addEventListener("click", () => {
    if (clear.style.color == "green") {
        clear.style.color = "red"
        clear.style.backgroundColor = "black"

    } else {
        clear.style.color = "green"
        clear.style.backgroundColor = "white"
    }
})
modif.addEventListener("click", () => {
    if (input.disabled == true) {
        input.disabled = false
    } else {
        input.disabled = true
    }
})
delet.addEventListener("click", () => {
    input.value = ""
})
 
let mutiClonage = (el) =>{
    let clone = el
    let suite = el.cloneNode(true)
    suite.children[0].value = ""
    clone.appendChild(suite)
}
add.addEventListener("click", () => {
mutiClonage(todo)
console.log(conage);
// let genliste = document.createElement("div")
// genliste.classList.add('liste');
// genliste.textContent = "liste"
// console.log(genliste);
// todoTab.appendChild(genliste)

})

console.log();




























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