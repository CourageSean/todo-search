const ul = document.querySelector("ul")
const search = document.getElementById("search")
ul.addEventListener("click",(e)=>{
    console.log(e.target.classList)

    
        console.log(Array.from(e.target.classList).includes("delete"))
    if(Array.from(e.target.classList).includes("delete")){
        e.target.parentElement.remove()

    }
      

    

})

const formAdd = document.getElementById("fr")

formAdd.addEventListener("submit",(e)=>{
   e.preventDefault();
   
  const lii = document.createElement("li")
  lii.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
  lii.innerHTML=` <span>${formAdd.add.value.trim()}</span>
  <i class="far fa-trash-alt delete"></i> `

 ul.appendChild(lii)
 formAdd.reset()
 
})

search.addEventListener("keyup",()=>{
    const inputValue = search.value.trim()
    const list = document.querySelectorAll("li")
    list.forEach((elt)=>{
if(!elt.innerText.includes(inputValue)){
    elt.style.visibility ="hidden"
}else{
    elt.style.visibility ="visible"  
}

    } )
})

const request = new XMLHttpRequest()
