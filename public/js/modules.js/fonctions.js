/* ------------------------ Laboratoire de fonctions ------------------------ */

/* ------------------- function Monster_generator @{+_+}@ ------------------- */


export let monsterGenerator = (tab) => {
    let liste = document.querySelector(".liste");
    let div = document.createElement("div");
    
    tab.forEach(el => {
        
        div.appendChild(el)

    });
    liste.appendChild(div);
}

/* -------------------------- Function multiClonage ------------------------- */
export let mutiClonage = (el) => {

    let clone = el
    let suite = el.cloneNode(true)
    console.log(clone);
    clone.appendChild(suite)


   

}

