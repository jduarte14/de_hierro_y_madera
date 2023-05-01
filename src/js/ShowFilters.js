export const ShowFilters = () => {
    let mobileMenu = document.querySelector('.sidebar');
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


export default ShowFilters;