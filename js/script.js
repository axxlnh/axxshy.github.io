//네비게이션
const navBtn = document.querySelector('.navBtn');
const header = document.querySelector('header');


navBtn.addEventListener('click',function(){
  header.classList.toggle('active')
})

window.addEventListener('resize',function(){
  header.classList.remove('active')

})
//네비게이션 끝


const NAV_LIST = document.querySelectorAll('.nav li');
let section = document.querySelectorAll('section');

NAV_LIST.forEach(function (btn, index) {

  btn.addEventListener('click', function () {


    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: '#s' + index
      }
    })

    
  })

})

//메인슬라이드
    setInterval(function(){
      $("ul.slider").animate({"margin-left":"-100%"},
      function(){
          $("ul.slider > li:first-child").appendTo("ul.slider");
          $("ul.slider").css({"margin-left":"0"});
      });
  },2800);
//메인슬라이드 끝

//마우스커서
jQuery(document).ready(function($) {$(".scroll").click(function(event){            event.preventDefault();$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);});});
//마우스커서 끝