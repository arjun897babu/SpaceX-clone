
//for toogle list active
let isActive=false;
function toggle(){
  if(isActive){
    document.querySelector('.toggle-bar').className='toggle-bar';
    document.querySelector('.naviagtion-large-screen').className='naviagtion-large-screen';
    document.querySelector('.navigation-mobile-list').className='navigation-mobile-list';
    isActive=false;
  }else{
    document.querySelector('.toggle-bar').className='toggle-bar active';
    document.querySelector('.naviagtion-large-screen').className='naviagtion-large-screen  active';
    document.querySelector('.navigation-mobile-list').className='navigation-mobile-list active';
    isActive=true;
  }
}

//for hiding the toggle list 
function hideNavigation() {
  if (isActive) {
    document.querySelector('.naviagtion-large-screen').classList.remove('active');
    document.querySelector('.navigation-mobile-list').classList.remove('active');
    document.querySelector('.toggle-bar').classList.remove('active');
  }
}

window.addEventListener('scroll', hideNavigation);

//for hiding the header
const header = document.getElementById("header");
const originalBackgroundColor = getComputedStyle(header).backgroundColor;
let isHeaderBackgroundChanged = false;
let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        header.style.top = `-${header.offsetHeight}px`; 
    } else {
        if (!isHeaderBackgroundChanged) {
            header.style.backgroundColor = "black"; 
            isHeaderBackgroundChanged = true;
        }

        if (currentScrollPosition === 0) {
            header.style.backgroundColor = originalBackgroundColor;
            isHeaderBackgroundChanged = false;
        }
        header.style.top = "0"; 
    }

    lastScrollPosition = currentScrollPosition;
});
