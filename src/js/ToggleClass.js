export const ToggleClass = () => {
    let mobileMenu = document.getElementById('menuMobile');
    let btnMenuMobile = document.querySelector('.menu-mobile');
    mobileMenu.classList.toggle('active');
      // Closes mobile menu
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    mobileMenu.append(overlay);

    overlay.addEventListener('click',()=>{
        if(mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            overlay.remove();
        }
    })



};


export default ToggleClass;