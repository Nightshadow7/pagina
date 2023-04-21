
  // window.addEventListener('scroll', function() {
  //   const navbar = document.querySelector('.navbar');
  //   navbar.classList.toggle('show', window.scrollY > 20);
  // });

  $('.botonF1').hover(function(){
    $('.btn').addClass('animacionVer');
  })
  $('.contenedor').mouseleave(function(){
    $('.btn').removeClass('animacionVer');
  }) 

