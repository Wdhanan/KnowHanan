
//toggle icon navbar soit affiche ou desafficher le menu
let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick= () =>{
 menuIcon.classList.toggle('bx-x');// boxicons X element
 navbar.classList.toggle('active');
};


// scroll sections active link

let sections = document.querySelectorAll('section');// Tu recupere tout les sections
let navLinks = document.querySelectorAll('header nav a');// Tu recupere tout les navigation a

window.onscroll = () =>{
    sections.forEach(sec =>{// pour chaque section
        let top = window.scrollY;//la section qui est en haut
        let offset = sec.offSetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');// on recupere le id de la section

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{// on recupere chaque navigation link et on affiche son header
                links.classList.remove('active');
                document.querySelector('#header nav a[href*=' +id +' ]').classList.add('active');

            });


        };
    });

// sticky navbar
    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    //remove toggle icon and navbar link
    menuIcon.classList.remove('bx-x');// boxicons X element
    navbar.classList.remove('active');


};

/*scroll reveal*/
ScrollReveal({ 
    
    //reset: true, permet de reset L'animation a chaque fois
    distance:'80px',
    duration:2000,
    delay:200

});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});// revelation de la nouvelle page de facon coulissante
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

//multiple text handeling a importer et a ajouter Typed.js : <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
const typed= new Typed('.multiple-text',{
    strings:['Fullstack Software Developer! 💻', 'Data Science Addict !🌃','Huge Football Fan! ⚽'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});

