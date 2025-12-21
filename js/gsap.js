
var main = document.querySelector(".main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const tl2 = gsap.timeline();

tl.from(".nav h2", {
  y: -20,
  opacity: 0,
  duration: 0.4,
  delay: 0.4,
});

tl.from(".nav h4", {
  y: -20,
  opacity: 0,
  duration: 0.3,
  stagger: 0.15,
});

tl.from(".hero", {
  y: 50,
  opacity: 0,
  duration: 0.7,
  stagger:0.3
});

tl.from(".about p", {
  opacity: 0,
  duration: 0.6,
});

tl2.from(".page1 img", {
  x: -100,
  opacity: 0,
  rotate: 45,
  duration: 0.8,
  stagger: 0.25,
  delay: 1.8,
});

tl2.from(".box1, .box2, .bubble p", {
  x: 80,
  y: 60,
  opacity: 0,
  duration: 0.25,
  stagger: 0.1,
});

gsap.to(".page1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2",
    start: "top 90%",
    end: "top 60%",
    scrub: true,
  },
});

// Page2 pinned scrolling text
gsap.to(".page2 h1", {
  x: "-61%",
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "top -300%",
    scrub: 1.5,
    pin: true,
  },
});


window.addEventListener("load", () => {
  const svg = document.querySelector("#string svg");
  const path = svg.querySelector("path");

  if (!svg || !path) return;

  const LEFT = 40;
  const RIGHT = 1240;
  const MID = 640;
  const BASE_Y = 50;

  const MAX_DEFLECT = 40; // 👈 realistic tension (10–16 sweet spot)

  const REST_PATH = `M ${LEFT} ${BASE_Y} Q ${MID} ${BASE_Y} ${RIGHT} ${BASE_Y}`;
  gsap.set(path, { attr: { d: REST_PATH } });

  function bendString(e) {
    const rect = svg.getBoundingClientRect();

    // Map pointer Y to SVG space (0–100)
    let y = ((e.clientY - rect.top) / rect.height) * 200;

    // Clamp deflection
    let deflect = (y - BASE_Y) ;
    deflect = Math.max(-MAX_DEFLECT, Math.min(MAX_DEFLECT, deflect));

    gsap.to(path, {
      attr: {
        d: `M ${LEFT} ${BASE_Y} Q ${MID} ${
          BASE_Y + deflect
        } ${RIGHT} ${BASE_Y}`,
      },
      duration: 0.5,
      ease: "power3.out",
    });
  }

  svg.addEventListener("pointermove", bendString);

  svg.addEventListener("pointerleave", () => {
    gsap.to(path, {
      attr: { d: REST_PATH },
      duration: 2.5,
      ease: "elastic.out(3, 0.1)",
    });
  });
});

// main.addEventListener("mousemove", function (dets) {
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         duration:0.6,
//         ease:"back.out"
//     })  
// })

// image.addEventListener("mouseenter", function () {
//     cursor.innerHTML = "<p>View<br>More</p>"
//     gsap.to(cursor,{
//         scale:4,
//     })
// })

// image.addEventListener("mouseleave", function () {
//     cursor.innerHTML = ""
//     gsap.to(cursor,{
//         scale:1,
//     })
// })

// main.addEventListener("mouseenter", function () {
//     gsap.to(cursor,{
//         opacity:1,
//         duration:0.3
//     })  
// })
// main.addEventListener("mouseleave", function () {
//     gsap.to(cursor,{
//         opacity:0,
//         // duration:0.3
//     })  
// })


