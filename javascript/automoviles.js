const principal = document.querySelector (".principal")
const secundarias = document.querySelectorAll (".secundarias") 

secundarias.forEach(secundarias => {
    secundarias.addEventListener ("click", function(){
        const active = document.querySelector (".active")
        if (active) {
            active.classList.remove ("active")
        }
        this.classList.add ("active")
        principal.src= secundarias.src
    })
});


const principal2 = document.querySelector (".principal2")
const secundarias2 = document.querySelectorAll (".secundarias2") 

secundarias2.forEach(secundarias2 => {
    secundarias2.addEventListener ("click", function(){
        const active = document.querySelector (".active")
        if (active) {
            active.classList.remove ("active")
        }
        this.classList.add ("active")
        principal2.src= secundarias2.src
    })
   
});




const principal3 = document.querySelector (".principal3")
const secundarias3 = document.querySelectorAll (".secundarias3") 

secundarias3.forEach(secundarias3 => {
    secundarias3.addEventListener ("click", function(){
        const active = document.querySelector (".active")
        if (active) {
            active.classList.remove ("active")
        }
        this.classList.add ("active")
        principal3.src= secundarias3.src
    })
});

const principal4 = document.querySelector (".principal4")
const secundarias4 = document.querySelectorAll (".secundarias4") 
secundarias4.forEach(secundarias4 => {
    secundarias4.addEventListener ("click", function(){
        const active = document.querySelector (".active")
        if (active) {
            active.classList.remove ("active")
        }
        this.classList.add ("active")
        principal4.src= secundarias4.src
    })
});


const principal5 = document.querySelector (".principal5")
const secundarias5 = document.querySelectorAll (".secundarias5") 

secundarias5.forEach(secundarias5 => {
    secundarias5.addEventListener ("click", function(){
        const active = document.querySelector (".active")
        if (active) {
            active.classList.remove ("active")
        }
        this.classList.add ("active")
        principal5.src= secundarias5.src
    })
});