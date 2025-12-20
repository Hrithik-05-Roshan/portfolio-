gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".hero-subtitle", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".hero-text", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.7
});

gsap.from(".hero-buttons", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.9
});

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  },
  y: 80,
  opacity: 0,
  duration: 1.2
});
