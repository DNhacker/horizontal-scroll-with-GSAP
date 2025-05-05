// if you have another js code so add this in you "Dom" block
gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".achievements-track");
const cards = gsap.utils.toArray(".achievement-card");

gsap.to(cards, {
  xPercent: -100 * (cards.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#achievements-section-wrapper",
    start: "top top",
    end: () => "+=" + track.scrollWidth,
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});
