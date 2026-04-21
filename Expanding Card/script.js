const panels = document.querySelectorAll('.pannel');

panels.forEach(pannel => {
   pannel.addEventListener('click',()=>{
    removeActiveClass();
    pannel.classList.add('active')
   })
}
)

function removeActiveClass(){
  panels.forEach(pannel => {
    pannel.classList.remove('active')
  })
}