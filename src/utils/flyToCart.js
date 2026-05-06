export const flyToCart = (img) => {
  const cart = document.getElementById("cart-icon");
  const cartRect = cart.getBoundingClientRect();
  const imgRect = img.getBoundingClientRect();

  const flyingImg = img.cloneNode(true);
  flyingImg.style.position = "fixed";
  flyingImg.style.left = imgRect.left + "px";
  flyingImg.style.top = imgRect.top + "px";
  flyingImg.style.width = imgRect.width + "px";
  flyingImg.style.height = imgRect.height + "px";
  flyingImg.style.zIndex = 1000;
  flyingImg.style.borderRadius = "12px";
  flyingImg.style.transition = "all 0.8s ease-in-out";

  document.body.appendChild(flyingImg);

  setTimeout(() => {
    flyingImg.style.left = cartRect.left + "px";
    flyingImg.style.top = cartRect.top + "px";
    flyingImg.style.width = "30px";
    flyingImg.style.height = "30px";
    flyingImg.style.opacity = 0.3;
  }, 10);

  setTimeout(() => {
    flyingImg.remove();
  }, 800);
};
