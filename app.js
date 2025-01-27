const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


function canvasEffect(){
  const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const frames = {
  currentIndex: 0,
  maxIndex: 1077,
};

let Loadimage = 0;
let images = [];

function preLoader() {
  for (var i = 1; i <= frames.maxIndex; i++) {
    const imageUrl = `./frames/frame_${i.toString()}.webp`;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      Loadimage++;
      if (Loadimage === frames.maxIndex) {
        imagesLoaded(frames.currentIndex);
        startAnimation();
      }
    };
    images.push(img);
  }
}

function imagesLoaded(index) {
  if (index >= 0 && index <= frames.maxIndex) {
    const img = images[index];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;

    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newHeight = img.height * scale;

    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

    frames.currentIndex = index;
  }
}

function startAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#parent",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
      markers: false,
    },
  });

  function updateFrame(index) {
    return {
      currentIndex: index,
      onUpdate: () => {
        imagesLoaded(Math.floor(frames.currentIndex));
      },
    };
  }

  tl
  .to(frames, updateFrame(71), 'first')
  .to('.animate1',{opacity: 0, ease:'linear',}, 'first')
  
  .to(frames, updateFrame(142), 'second')
  .to('.animate2',{opacity: 1, ease:'linear',}, 'second')

  .to(frames, updateFrame(213), 'third')
  .to('.animate2',{opacity: 1, ease:'linear',}, 'third')
  
  .to(frames, updateFrame(284), 'fourth')
  .to('.animate2',{opacity: 0, ease:'linear',}, 'fourth')
  
  .to(frames, updateFrame(355), 'fifth')
  .to('.animate3',{opacity: 1, ease:'linear',}, 'fifth')
  
  .to(frames, updateFrame(426), 'sixth')
  .to('.animate3',{opacity: 1, ease:'linear',}, 'sixth')
  
  .to(frames, updateFrame(497), 'seventh')
  .to('.animate3',{opacity: 0, ease:'linear',}, 'seventh')
  
  .to(frames, updateFrame(568), 'eight')
  .to('.panel',{ x:'0', ease:'expo',}, 'eight')
  
  .to(frames, updateFrame(639), 'ninth')
  .to('.panel',{ x: 0, ease:'expo',}, 'ninth')
  
  .to(frames, updateFrame(710), 'tenth')
  .to('.panel',{opacity: 0, ease:'linear',}, 'tenth')
  
  .to(frames, updateFrame(781), 'eleventh')
  .to(canvas,{scale: .5, ease:'linear',}, 'eleventh')
  
  .to(frames, updateFrame(852), 'twelvth')
  .to('.panelism',{opacity: 1, ease:'expo',}, 'twelvth')
  
  .to(frames, updateFrame(923), 'twelvth')
  .to('.panelism span',{width: 200, ease:'linear',}, 'twelvth')
  
  .to(frames, updateFrame(994), 'thirteen')
  .to(canvas,{scale: 1, ease:'linear',}, 'thirteen')

  .to(frames, updateFrame(1077), 'fourteen')
  .to('.panelism',{scale:1, ease:'circ',}, 'fourteen')
}

window.addEventListener("resize", () => {
  imagesLoaded(Math.floor(frames.currentIndex));
});

preLoader();
}
canvasEffect();
