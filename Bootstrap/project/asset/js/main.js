// main-banner

    
   
  var swiper3 = new Swiper(".mySwiper3", {
    direction: "vertical",
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [ 0, "20%",-1],
          },
          next: {
            translate: [ 0,"-100%", 0],
          },
    },
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });