// Classes bbutton
let allCmnd = document.querySelector(".allCmnd").children
let todoTab = document.querySelector(".todoTab").children
let input = document.querySelector("input")
console.log(input);
// button all
let ended = allCmnd[0]
let toDo = allCmnd[1]
let all = allCmnd[2]
//  button input
let clear = todoTab[1]
let modif = todoTab[2]
let delet = todoTab[3]
let add = todoTab[4]
console.log(clear);
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
      
  }else{
      input.disabled = true
  }
})
delet.addEventListener("click", () => {
    input.value = "" 

})

add.addEventListener("click", () => {

    
})