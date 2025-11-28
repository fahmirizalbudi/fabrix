import "./style.css";

document.querySelectorAll<HTMLDivElement>(".fabrics__card").forEach((element) => {
  const img = element.dataset.img;
  element.style.backgroundImage = `
  linear-gradient(
    180deg,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.5) 80%
  ),
  url(${img})
  `;
});
