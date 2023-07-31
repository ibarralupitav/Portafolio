const myModal = document.getElementById('modal-cpntactame')
const myElement = document.getElementById('contactame')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


let app = document.getElementById("typewriter");

let typewriter = new typewriter(app, 
{
    loop: true,
    delay:75,
});

typewriter

.pauseFor(1000)
.typeString('Guadalupe Ibarra')
.pauseFor(300)
.deleteChars(10)
.start();