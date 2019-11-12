let currentPackage = 0

const changePackage = () => {
  document.querySelector('.package.active').classList.remove('active')
  document.querySelectorAll('.package')[currentPackage].classList.add('active')
}


window.addEventListener('mousewheel', (e) =>{
  let ScrollingDown = e.deltaY > 0;
    if (ScrollingDown && currentPackage < 4) {
        currentPackage += 1
        changePackage();
    }
    else if (!ScrollingDown && currentPackage > 0){

      currentPackage -= 1
      changePackage();
    }
    if (currentPackage === 4) {
      document.querySelector('footer').classList.add('active')
    }
    else {
      document.querySelector('footer').classList.remove('active')
    }
})
