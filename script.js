//Animace pro texty pravo
        window.addEventListener('load',checkElements); 
        window.addEventListener('scroll',checkElements);
            function checkElements(){

        const selector = ['.animace','.animace1','.animace2','.animace3'];

            selector.forEach(sel =>  {
                const elements = document.querySelectorAll(sel);
        
            elements.forEach(function(el) {
            const position = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(position < screenPosition && position >0 ) {
        
            el.classList.add('active');
            }else{
                el.classList.remove('active');
            }
            
            });
            });
        };


        //Animace pro obrázkové texty
    window.onload = () => {
        const slides = document.querySelectorAll(".slide");
        const leftBtn=document.querySelector(".arrow.left");
        const rightBtn=document.querySelector(".arrow.right")
        let currentIndex = 0;

        function showSlide(newIndex, direction){
            if(newIndex === currentIndex) return;
            
            const currentSlide = slides[currentIndex];
            const newSlide = slides[newIndex];

            currentSlide.classList.remove("active");
            currentSlide.classList.add(direction==="right" ? "to-left" : "to-right");

            newSlide.classList.remove("to-left", "to-right");
            newSlide.classList.add("active");
            
            currentIndex=newIndex;
        }
        
        leftBtn.addEventListener("click", () => {
            const newIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(newIndex, "left");
                });

        rightBtn.addEventListener("click", () => {
            const newIndex = (currentIndex +1) % slides.length;
            showSlide(newIndex, "right");
        });
    }


    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
