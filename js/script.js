let options = {
    root: null, // default viewport
    rootMargin: '0px', // margin around root element used for threshold calculation
    threshold: 0.5 // 1 = 100% of element is onscreen default 0 means 1st pixel
  }
const elWrapperMain = document.querySelector(".wrapper-main");

let observer = new IntersectionObserver( ([e]) => {
    if (e.isIntersecting) {
        elWrapperMain.classList.toggle("is-scaled");
        e.target.classList.toggle("in-view");
    } else {
        elWrapperMain.classList.toggle("is-scaled");
        e.target.classList.toggle("in-view");
    }
    console.info(`intersectionRatio: ${e.intersectionRatio}`)
}, options);

observer.observe(document.querySelector("footer"));
  




// const elFooter = document.querySelector("footer")
// const observer = new IntersectionObserver( 
//   ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
//   { threshold: [1] }
// );

// observer.observe(elFooter);

