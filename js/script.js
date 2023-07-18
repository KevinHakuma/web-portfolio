$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.getElementById("scroll-top").classList.add('active');
        } else {
            document.getElementById("scroll-top").classList.remove('active');
        }

        // Scroll spy
        $('section').each(function() {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
    
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });    
    });

    // Smooth scrolling
$(document).ready(function () {
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500, 'linear', function() {
            // Tambahkan kelas aktif pada elemen navbar yang sesuai
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`[href="${target}"]`).addClass('active');
        });
    });
  });
  
});

// EmailJS code

$(document).ready(function () {
    // Inisialisasi EmailJS
    emailjs.init("lyF6JzIVQYO4Ob460");

    // Tangkap peristiwa submit pada formulir kontak
    $("#contact-form").submit(function (event) {
        // Kirim data formulir menggunakan EmailJS
        emailjs
            .send("service_5bvdfxc", "template_4pj2p7o", {
                name: $("#contact-form input[name=name]").val(),
                email: $("#contact-form input[name=email]").val(),
                phone: $("#contact-form input[name=phone]").val(),
                message: $("#contact-form textarea[name=message]").val()
            })
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    document.getElementById("contact-form").reset();
                    alert("Form Submitted Successfully");
                },
                function (error) {
                    console.log("FAILED...", error);
                    alert("Form Submission Failed! Try Again");
                }
            );

        event.preventDefault();
    });
});

// Tawk.to Live Chat code

// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();

// ScrollReveal.js code

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

sr.reveal('.home .content h2', { delay: 200 });
sr.reveal('.home .content p', { delay: 200 });
sr.reveal('.home .content .btn', { delay: 200 });

// Add other ScrollReveal.js animations as needed

// sr.reveal('.about .heading', { delay: 200 });
sr.reveal('.about .image', { delay: 200 });
sr.reveal('.about .content h3', { delay: 200 });
sr.reveal('.about .content .tag', { delay: 200 });
sr.reveal('.about .content p', { delay: 200 });
sr.reveal('.about .content .box-container', { delay: 200 });
sr.reveal('.about .content .resumebtn', { delay: 200 });

// sr.reveal('.work .heading', { delay: 200 });

// sr.reveal('.contact .heading', { delay: 200 });
sr.reveal('.contact .container', { delay: 200 });
sr.reveal('.contact .form-group', { delay: 200 });

// Add other ScrollReveal.js animations as needed

// Smooth scrolling effect with ScrollReveal.js
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500, 'linear', function () {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[href="' + target + '"]').addClass('active');
    });
});

$(document).ready(function() {
    // Tangkap peristiwa klik pada gambar
    $('.box.tilt img').click(function() {
      // Dapatkan elemen penjelasan terkait
      var caption = $(this).closest('.box').find('.caption');
      
      // Toggle tampilan penjelasan
      caption.toggleClass('active');
    });
  });
  
