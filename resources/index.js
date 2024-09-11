var rectangle = document.querySelector("#center");

rectangle.addEventListener("mousemove", (details) => {
  let rectangleLeft = rectangle.getBoundingClientRect().left;
  let rectangleWidth = rectangle.getBoundingClientRect().width;
  let center = rectangleWidth / 2;
  let mouseCurrentLocation = details.clientX - rectangleLeft;
  if (mouseCurrentLocation > center) {
    let intensity = gsap.utils.mapRange(
      0,
      rectangleWidth,
      0,
      255,
      mouseCurrentLocation
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(0,0,${intensity})`,
      ease: Power4,
    });
  } else {
    let intensity = gsap.utils.mapRange(
      0,
      center,
      255,
      0,
      mouseCurrentLocation
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(${intensity},0,0)`,
      ease: Power4,
    });
  }
});
