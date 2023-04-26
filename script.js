const mainOpt = document.querySelectorAll(".main_opt");
const times = document.querySelector(".opener");
const opt = document.querySelector(".opt");
const closer = document.querySelector(".times");
const overl = document.querySelector(".overl");

AOS.init({ duration: 1500 });

const navOpen = () => {
  opt.classList.add("hidden");
  overl.classList.add("hidden");
};

mainOpt.forEach((each) => {
  each.addEventListener("click", () => {
    navOpen();
    document
      .querySelector(`#${each.dataset.dest}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// CAROUSEL PART
const caroImages = document.querySelectorAll(".carou");

caroImages.forEach((caro) => {
  const caroIm = caro.querySelectorAll(".cars");

  let scrollNum = 0;

  caroIm.forEach((img, ind) => {
    img.style.transform = `translateX(${100 * ind}%)`;
  });

  setInterval(() => {
    if (scrollNum >= 3) {
      scrollNum = 0;
    } else {
      scrollNum++;
    }
    // caro.querySelectorAll(".overlay").getAnimation
    caroIm.forEach((img, ind) => {
      img.style.transform = `translateX(${100 * (ind - scrollNum)}%)`;
    });
  }, 3000);
});

times.addEventListener("click", () => {
  opt.classList.toggle("hidden");
  overl.classList.toggle("hidden");
});

times.addEventListener("blur", navOpen);

closer.addEventListener("click", navOpen);

overl.addEventListener("click", navOpen);
