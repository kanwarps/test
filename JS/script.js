$(document).ready(function(){

	//Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//Pin the strip1
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#strip2',
		triggerHook:1,
		// duration: '30%'
	})
	.setPin('#strip1')
	// .addIndicators()
	.addTo(controller)

	//Pin the strip2
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#strip3',
		triggerHook:1,
		// duration: '30%'
	})
	.setPin('#strip2')
	// .addIndicators()
	.addTo(controller)
	
	//Pin the strip3
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#strip4',
		triggerHook:1,
		// duration: '30%'
	})
	.setPin('#strip3')
	// .addIndicators()
	.addTo(controller)

	//Pin the strip4
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#myfoot',
		triggerHook:1,
		// duration: '30%'
	})
	.setPin('#strip4')
	// .addIndicators()
	.addTo(controller)
	
	
	
	$('.nmenu input').change(function () {
		document.getElementById('nmenu-bg').classList.toggle('change-bg');
		document.getElementById('nnav').classList.toggle('nnav-change');
	});

	$('.nnav a').on('click', function() {
		$('.nmenu input').click();
	});

	function addGray() { 
		$('.navbar-brand').addClass('color-gray');
		$('.nmenu-bg').addClass('bg-gray');
		$('.nmenu path').addClass('stroke-white');
		$('.nnav li a').addClass('color-white');
	};

	function removeGray() {
		$('.navbar-brand').removeClass('color-gray');
		$('.nmenu-bg').removeClass('bg-gray');
		$('.nmenu path').removeClass('stroke-white');
		$('.nnav li a').removeClass('color-white');
	};

    $(window).on('scroll', function() {
        logoPosition = $('.navbar-brand').offset().top;
        strip2Position = $('.strip2').offset().top;
        strip3Position = $('.strip3').offset().top;
        strip4Position = $('.strip4').offset().top;
        if(logoPosition > strip4Position) {
			addGray();
        } else if(logoPosition > strip3Position) {
			removeGray();
        } else if (logoPosition > strip2Position) {
			addGray();
        } else {
			removeGray();
        }
	});

	
	// Contact Lottie Animation
	var animation = bodymovin.loadAnimation({
	container: document.getElementById('bm'), // Required
	path: '/kps-master/assets/contact.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	});

	// Contact Lottie Animation
	var animation2 = bodymovin.loadAnimation({
	container: document.getElementById('scanova-lottie'), // Required
	path: './kps-master/Portfolio/Scanova/scanova.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	});

	
	$('.gallery ul li a').on('click', function() {
		cat = $(this).attr('id');
		console.log($(this).attr('id'));
		$('.gallery .gallery-filter a.active').removeClass('active');
		$('.gallery .hide').each(function() {
			$(this).removeClass('hide');
		});

		$('.gallery .gallery-filter a#'+cat).addClass('active');
		if(cat != 'all') {
			console.log($('.gallery .gallery-item#'+cat));
			$('.gallery .gallery-item:not(#'+cat+')').each(function() {
				$(this).addClass('hide');
			});
		}
	});

	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();
	
		  // Store hash
		  var hash = this.hash;
		//   console.log(hash);
		  console.log($(document).scrollTop() - $(hash).offset().top);
			
		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, Math.abs($(document).scrollTop() - $(hash).offset().top) / 2,function(){
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
});


