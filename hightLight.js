const triggers = document.querySelectorAll('.nav-link');
const hightLight = document.createElement('span');
function handlerHightLight(){
  triggers.forEach(trigger=>{
    trigger.classList.remove('hightLight');
  });
  this.classList.add('hightLight');
  
}
triggers.forEach(trigger=>trigger.addEventListener('click',handlerHightLight));
