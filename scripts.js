window.onload = function() {
	let header = document.querySelector('.header');
	const cont1 = document.querySelector('.contact1');
	const cont2 = document.querySelector('.contact2');
	const foremp = document.querySelector('.foremp');
	const forindiv = document.querySelector('.forindiv');
	const logo = document.querySelector('.logo')
	const cls = document.querySelector('.btn-close')
	const conbg = document.querySelector('.contactus-bg')
	window.addEventListener('scroll', function() {
		if(pageYOffset >= 300){
			logo.classList.add("logo-show");
		}
		else
		{
			logo.classList.remove("logo-show");
		}
		if(pageYOffset >= 100){
			header.classList.add("header__sticky");
		}
		else{
			header.classList.remove("header__sticky");	
		}
		if(pageYOffset >= cont1.offsetTop+foremp.offsetTop-foremp.offsetHeight*0.5){
				cont1.classList.add("contact-show");
		}
		
		if(pageYOffset >= cont2.offsetTop+forindiv.offsetTop-forindiv.offsetHeight*0.5){
				cont2.classList.add("contact-show");
		}
		
	});

	document.querySelectorAll('.butcont').forEach(item=>{
		item.addEventListener('click',
	function(e){
			e.preventDefault();
			document.querySelector('.contactus').style.display = 'flex';
	});
	})
	cls.addEventListener("click",()=>
	document.querySelector('.contactus').style.display = 'none');
	conbg.addEventListener("click",()=>
	document.querySelector('.contactus').style.display = 'none');


	$('.slides').slick({
	  
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  dots:true
	});

	$('.collage-img').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  
	});
	
	
};