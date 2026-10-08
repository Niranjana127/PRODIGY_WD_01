function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

/* Button click glow effect */
const btn = document.querySelector('.btn-primary');

btn.addEventListener('click', () => {
  btn.style.boxShadow = "0 0 50px rgba(34,211,238,0.9)";
  setTimeout(() => {
    btn.style.boxShadow = "0 0 20px rgba(167,139,250,0.5)";
  }, 300);
});
