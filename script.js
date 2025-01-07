const stars = document.querySelectorAll('.star');
stars.forEach((star, index)=>{
    star.addEventListener('click',()=>{
        //Remove active class from all stars
        stars.forEach(s => s.classList.remove('active'));

        // Add active class to the clicked star and all previous ones
        for(let i = 0; i <= index; i++){
            stars[i].classList.add('active');
        }
    });
});