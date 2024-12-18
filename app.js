let slider = document.querySelector(".slider");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let firstChildImg = slider.querySelector(".img:first-child");
let lastChildImg = slider.querySelector(".img:last-child");
let containerr = document.querySelector(".containerr");
let motoTitle = document.getElementById("motoTitle");
let motoDescrip = document.getElementById("motoDescrip");
let content = document.querySelector(".content");

let s1krrImg = document.getElementById("s1krr");
let z900Img = document.getElementById("z900");
let gsImg = document.getElementById("gsImg");

let s1krrImgV2 = document.getElementById("s1krrV2");
let z900ImgV2 = document.getElementById("z900V2");
let gsImgV2 = document.getElementById("gsImgV2");

window.onload = () => {
  const topBar = document.querySelector(".topBar");
  topBar.style.animationPlayState = "running";
};

const s1kRR = {
  name: "BMW S1000RR",
  descrip:
    "S1000RR is a high-performance sportbike featuring a 999cc inline-4 engine that delivers 205 horsepower and 113 Nm of torque, capable of reaching 0-100 km/h in around 3 seconds with a top speed of 299 km/h. Equipped with BMW's ShiftCam technology, it optimizes power delivery across all RPM ranges, making it both powerful and efficient. Advanced features like traction control, ABS, and dynamic ride modes ensure stability and safety at high speeds, while its aggressive design and cutting-edge electronics make it a standout in the superbikewhile its aggressive design and cutting-edge electronics make it a standout in the superbike.",
};

const z900 = {
  name: "Kawazaki z900",
  descrip:
    "Z900 is a naked sportbike renowned for its balance of performance and everyday usability. It is powered by a 948cc inline-4 engine that produces 125 horsepower and 98.6 Nm of torque, offering strong acceleration and mid-range power. The Z900 features a lightweight trellis frame, giving it agile handling, while rider aids like traction control, ABS, and selectable ride modes enhance safety and control. Its aggressive design, with a minimalist fairing and signature Kawasaki 'Sugomi' styling, gives it a bold streetfighter appearance.design, with a minimalist fairing and signature Kawasaki 'Sugomi' styling, gives it a bold streetfighter appearance.",
};

const R1250 = {
  name: "BMW R1250 GS",
  descrip:
    "GS is a versatile adventure motorcycle known for its balance of on-road comfort and off-road capability. Powered by a 1,254cc twin-cylinder boxer engine with BMW's ShiftCam technology, it delivers 136 horsepower and 143 Nm of torque, providing smooth power at all speeds. With a robust design and advanced features like dynamic electronic suspension adjustment (ESA), traction control, and a variety of ride modes, the R1250 GS excels in both long-distance touring and rugged terrain. Its spacious ergonomics, adaptive headlight, and modern technology make it a popular choice for adventure riders seeking comfort, performance,",
};

const bikes = [s1kRR, z900, R1250];

let s1krrHeader = document.querySelector(".s1krr-header");
s1krrHeader.textContent = s1kRR.name;

let z900Header = document.querySelector(".z900-header");
z900Header.textContent = bikes[1].name;

let gsHeader = document.querySelector(".gs-header");
gsHeader.textContent = bikes[2].name;

let s1krrContent = document.querySelector(".s1krr-content");
s1krrContent.textContent = bikes[0].descrip;

let z900Content = document.querySelector(".z900-content");
z900Content.textContent = bikes[1].descrip;

let gsContent = document.querySelector(".gs-content");
gsContent.textContent = bikes[2].descrip;

const s1krrCon = document.getElementById("s1krrCon");
const z900Con = document.getElementById("z900Con");
const gsCon = document.getElementById("gsCon");

nextBtn.addEventListener("click", () => {
  slider.append(slider.querySelector(".img:first-child"));
  containerr.style.backgroundImage = `url(${
    slider.querySelector(".img:first-child").src
  })`;
  content.append(content.querySelector(".arrCon:first-child"));

  // s1krrCon.style.animationName = 'nextAnimatS1krr'
  // s1krrCon.style.animationDirection = 'normal'
  // s1krrCon.style.animationTimingFunction = 'ease'
  // s1krrCon.style.animationPlayState = 'running'

  // gsCon.style.animationName = 'nextAnimatGs'
  // gsCon.style.animationDirection = 'normal'
  // gsCon.style.animationTimingFunction = 'ease'
  // s1krrCon.style.animationPlayState = 'running'

  // z900Con.style.animationName = 'nextAnimatz900'
  // z900Con.style.animationDirection = 'normal'
  // z900Con.style.animationTimingFunction = 'ease'
  // s1krrCon.style.animationPlayState = 'running'

  // containerr.style.animationPlayState = 'running'
});

prevBtn.addEventListener("click", () => {
  slider.prepend(slider.querySelector(".img:last-child"));
  containerr.style.backgroundImage = `url(${
    slider.querySelector(".img:first-child").src
  })`;

  // s1krrCon.style.animationName = 'nextAnimatz900'
  // s1krrCon.style.animationDirection = 'reverse'
  // s1krrCon.style.animationTimingFunction = 'ease-in'

  // gsCon.style.animationName = 'nextAnimatS1krr'
  // gsCon.style.animationDirection = 'reverse'
  // gsCon.style.animationTimingFunction = 'ease-in'

  // z900Con.style.animationName = 'nextAnimatGs'
  // z900Con.style.animationDirection = 'reverse'
  // z900Con.style.animationTimingFunction = 'ease-in'
});

gsImg.onclick = () => {
  if (gsImg == slider.querySelector(".img:last-child")) {
    slider.prepend(slider.querySelector(".img:last-child"));
    containerr.style.backgroundImage = `url(${
      slider.querySelector(".img:first-child").src
    })`;
  } else if (gsImg == slider.querySelector(".img:nth-child(2)")) {
    slider.append(slider.querySelector(".img:first-child"));
    containerr.style.backgroundImage = `url(${
      slider.querySelector(".img:first-child").src
    })`;
  }
};
z900Img.onclick = (img) => {
  containerr.style.backgroundImage = `url(${
    document.getElementById("z900").src
  })`;

  // if(z900Img == slider.querySelector('.img:nth-child(2)')){
  //     slider.append(slider.querySelector('.img:first-child'))
  // }
  // else if(z900Img == slider.querySelector('.img:last-child')){
  //     slider.prepend(slider.querySelector('.img:last-child'))
  //     containerr.style.backgroundImage = `url(${slider.querySelector('.img:first-child').src})`
  // }
};
s1krrImg.onclick = () => {
  if (s1krrImg == slider.querySelector(".img:nth-child(2)")) {
    slider.append(slider.querySelector(".img:first-child"));
    containerr.style.backgroundImage = `url(${
      slider.querySelector(".img:first-child").src
    })`;
  } else if (s1krrImg == slider.querySelector(".img:last-child")) {
    slider.prepend(slider.querySelector(".img:last-child"));
    containerr.style.backgroundImage = `url(${
      slider.querySelector(".img:first-child").src
    })`;
  }
};

gsImgV2.onclick = () => {
  if (gsImg == slider.querySelector(".img:last-child")) {
    slider.prepend(slider.querySelector(".img:last-child"));
    containerr.style.backgroundImage = `url(${
      slider.querySelector(".img:first-child").src
    })`;
  } else if (gsImg == slider.querySelector(".img:nth-child(2)")) {
    slider.append(slider.querySelector(".img:first-child"));
    containerr.style.backgroundImage = `url(${
      slider.querySelector(".img:first-child").src
    })`;
  }
};
z900ImgV2.onclick = (img) => {
  containerr.style.backgroundImage = `url(${
    document.getElementById("z900").src
  })`;

  // if(z900Img == slider.querySelector('.img:nth-child(2)')){
  //     slider.append(slider.querySelector('.img:first-child'))
  // }
  // else if(z900Img == slider.querySelector('.img:last-child')){
  //     slider.prepend(slider.querySelector('.img:last-child'))
  //     containerr.style.backgroundImage = `url(${slider.querySelector('.img:first-child').src})`
  // }
};
s1krrImgV2.onclick = () => {
  if (s1krrImg == slider.querySelector(".img:nth-child(2)")) {
    slider.append(slider.querySelector(".img:first-child"));
    containerr.style.backgroundImage = `url(${
      slider.querySelector(".img:first-child").src
    })`;
  } else if (s1krrImg == slider.querySelector(".img:last-child")) {
    slider.prepend(slider.querySelector(".img:last-child"));
    containerr.style.backgroundImage = `url(${
      slider.querySelector(".img:first-child").src
    })`;
  }
};

containerr.style.backgroundImage = `url(${
  slider.querySelector(".img:first-child").src
})`;
s1krrCon.style.animationDirection = "reverse";
s1krrCon.style.animationPlayState = "paused";

window.onscroll = () => {
  if (scrollY == 200) {
  } else if (scrollY == 1100 || scrollY == 1600) {
  } else {
  }
};
//     const imgs = document.querySelectorAll('.img')
//     slider.style.animationPlayState = 'running'
//     imgs.style.height = '200px'

setInterval(() => {
  console.log(scrollY);
}, 100);

const menuBar = document.querySelector(".menu");
const menuIcon = querySelector(".menuIcon");
const isVisible = false;

menuIcon.addEventListener("click", () => {
  if (isVisible) {
    menuBar.style.position = "fixed";
    menuBar.style.left = 0;
  } else {
    menuBar.style.position = "fixed";
    menuBar.style.left = "-100%";
  }
});
