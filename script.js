const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
    
window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 100);
});

const header = document.querySelector("header");
window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 100);
});


const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');


menu.onclick = () => {
  menu.classList.toggle('bx-menu');
  navlist.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-menu');
  navlist.classList.remove('open');
};

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 100);
});



    

