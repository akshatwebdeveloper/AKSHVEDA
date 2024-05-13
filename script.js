

// function smooth() {
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);

//   // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//   });












//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();

// }

// smooth()

function smooth() {
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  // Update ScrollTrigger on Locomotive Scroll update
  locoScroll.on("scroll", ScrollTrigger.update);

  // Setup ScrollTrigger proxy to work with Locomotive Scroll
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      // Handle scroll position synchronization
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      // Provide the bounding rectangle of the scrolling container
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // Refresh ScrollTrigger on window resize or orientation change
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // Initial refresh to ensure proper setup
  ScrollTrigger.refresh();
}



function page4animation() {
  var elemc = document.querySelector("#elemcontainer");
  var fixed = document.querySelector("#fixedimage");
  elemc.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
  })
  elemc.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
  })



  var elems = document.querySelectorAll("#elem")

  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image")
      fixed.style.backgroundImage = `url(${image})`
    })
  });









}



// gsap.from("#right>h1", {
//   y: 100,
//   opacity: 0,
//   delay: 4,
//   duration: 0.8,
//   stagger: 0.3,
// });



function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
    loader.style.visibility = "hidden"
      loader.style.top = "100%"
  }, 4000)
}


function cursor() {
  var cursor = document.querySelector("#mousemover");

  var page1con = document.querySelector("#main");


  page1con.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    })
  })

  page1con.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1
    })
  })

  page1con.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0
    })
  })
}








function swiper(){

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}




function scrollt(){
  let tl = gsap.timeline()

tl.to("#hoverh3", {

  width: `42vw`,
  scrollTrigger: {
    trigger: "#hoverh3",
    start: `-10% 50%`,
    end: "+=300",
    markers: true,
    scrub: 5,
    scroller: `#main`,

  }
})
tl.to("#page2h1", {

  width: `60%`,
  scrollTrigger: {
    trigger: "#page2h1",
    start: `25% 50%`,
    end: "+=300",
    markers: true,
    scrub: 10,
    scroller: `#main`,

  }
})
}

scrollt()
smooth();
loaderAnimation();
cursor();
swiper();
page4animation();