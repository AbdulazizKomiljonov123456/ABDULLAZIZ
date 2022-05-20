let menu  = document.querySelector('#menu-btn')
let navbar  = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}



window.onscroll = () =>{
    
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.add('active');
    }
    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () =>{
    
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.add('active');
    }
}

document.querySelector('.home').onmousemove = (e) =>{
    
    document.querySelectorAll('.home-parallax').forEach(elm =>{

        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });
};

document.querySelector('.home').onmouseleave = () =>{
    
    document.querySelectorAll('.home-parallax').forEach(elm =>{

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });
};

let swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });




  let swipper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });



  let review = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


  const h3 = document.querySelector('h3'),
  content = document.querySelector('.content');


  window.addEventListener('scroll', function stoph3 (){
    console.log(pageYOffset);
    if (pageYOffset >= (content.offsetTop - content.clientHeight * 3)) {
      h3.forEach((h3)=>{
        let number = h3.getAttribute('data-num')
        function h3Plus(i = 0) {
          h3.innerHTML = i 
          i++ 
          if (i < number) {
            setTimeout(()=>{
              h3Plus(i)
            },30)
          }
        }
        h3Plus()
      })
      this.removeEventListener('scroll', stoph3)
    }

  })






  