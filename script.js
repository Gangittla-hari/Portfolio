const texts = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }

})();

window.addEventListener("scroll", () => {

    const winScroll =
    document.body.scrollTop ||
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrolled =
    (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width =
    scrolled + "%";
});

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sec=>{
    sec.classList.add("hidden");
    observer.observe(sec);
});

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/25;
let y=(window.innerHeight/2-e.pageY)/25;

document.querySelector(".hero-image").style.transform=
`translate(${x}px,${y}px)`;

});