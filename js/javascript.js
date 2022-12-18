let videoBtn = document.querySelectorAll('.vid-btn');
let loginForm = document.querySelector('.login-form-container');
let formBtn = document.querySelector('#form');
let form = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    form.classList.remove('active');
}

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    form.classList.add('active');
});
formClose.addEventListener('click', () =>{
    form.classList.remove('active');
});

function sendMail() {
    var params = {
      email: document.getElementById("email").value,
         tel: document.getElementById("tel").value,
         city: document.getElementById("city").value,
         number: document.getElementById("number").value,
         number: document.getElementById("date1").value,
         number: document.getElementById("date2").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_6wgcfy1";
    const templateID = "template_rxi9tav";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          
          document.getElementById("email").value = "";
          document.getElementById("tel").value = "";
          document.getElementById("city").value = "";
          document.getElementById("number").value = "";
          document.getElementById("date1").value = "";
          document.getElementById("date2").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
   }
   function sentMail() {
    const serviceID = "service_6wgcfy1";
    const templateID = "template_rxi9tav";
    emailjs.send(serviceID, templateID, params)
    .then(res=>{  
        document.getElementById("email1").value = "";
        alert("Your message sent successfully!!")
  
    })
    .catch(err=>console.log(err));
}

  const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	 centeredSlides: true,
	mousewheel: true,
	parallax: true,
    loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1.5,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})

document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opened')
	})
})



  