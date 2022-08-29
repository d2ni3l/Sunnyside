const mobileNav = document.querySelector('.menu-mobile')
const btn = document.getElementById('btnNav')

let isShow = true
btn.addEventListener('click', () => {
  if (isShow) {
    mobileNav.style.display = 'block'
    isShow = false
  } else{
    mobileNav.style.display = 'none'
    isShow = true;
  };
  
 
})

