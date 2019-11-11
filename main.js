let currentPackage = 0

const changePackage = () => {
  document.querySelector('.package.active').classList.remove('active')
  document.querySelectorAll('.package')[currentPackage].classList.add('active')
}


window.addEventListener('mousewheel', (e) =>{
  let isScrollingDown = e.deltaY > 0;
    if (isScrollingDown && currentPackage < 4) {
        currentPackage += 1
        changePackage();
    }
    else if (!isScrollingDown && currentPackage > 0){

      currentPackage -= 1
      changePackage();
    }
    // if (currentPackage === 4) {
    //   document.querySelector('body').classList.add('scroll')
    // }
    // else {
    //   document.querySelector('body').classList.remove('scroll')
    // }
})
