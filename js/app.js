const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let rotateSpeed = el.dataset.rotation
        // let zValue= (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        // let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;


        el.style.transform = `rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    update(e.clientX);
});

// GSAP Used for animation //

let timeline = gsap.timeline();

parallax_el.forEach((el) => {
    timeline.from(el,
        {
            top: `${el.dataset.distance}px`,
            duration: 1,
        },
        "1"
    );

});

