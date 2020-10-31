const headerCatalogList = document.querySelector(".nav-catalog");
const catalogListButton = document.querySelector(".header-catalog-button");
let promoSelfieButton = document.querySelector(".promo-selfie-button");
let promoBandButton = document.querySelector(".promo-band-button");
let promoQuadcopterButton = document.querySelector(".promo-qudrocopter-button");
let promoSelfieStick = document.querySelector(".promo-selfie-stick");
let promoBand = document.querySelector(".promo-band");
let promoQuadcopter = document.querySelector(".promo-quadcopter");


catalogListButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    headerCatalogList.classList.toggle("nav-catalog-hide");
  });

promoSelfieButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoSelfieStick.classList.remove("promo-anactive");
  promoBand.classList.add("promo-anactive");
  promoQuadcopter.classList.add("promo-anactive");
  promoBandButton.classList.remove("promo-button-active");
  promoSelfieButton.classList.add("promo-button-active");
  promoQuadcopterButton.classList.remove("promo-button-active");
});

promoBandButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoBand.classList.remove("promo-anactive");
  promoSelfieStick.classList.add("promo-anactive");
  promoQuadcopter.classList.add("promo-anactive");
  promoBandButton.classList.add("promo-button-active");
  promoSelfieButton.classList.remove("promo-button-active");
  promoQuadcopterButton.classList.remove("promo-button-active");
});

promoQuadcopterButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  promoQuadcopter.classList.remove("promo-anactive");
  promoSelfieStick.classList.add("promo-anactive");
  promoBand.classList.add("promo-anactive");
  promoBandButton.classList.remove("promo-button-active");
  promoSelfieButton.classList.remove("promo-button-active");
  promoQuadcopterButton.classList.add("promo-button-active");
});

