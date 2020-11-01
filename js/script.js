const headerCatalogList = document.querySelector(".nav-catalog");
const catalogListButton = document.querySelector(".header-catalog-button");
let promoSelfieButton = document.querySelector(".promo-selfie-button");
let promoBandButton = document.querySelector(".promo-band-button");
let promoQuadcopterButton = document.querySelector(".promo-qudrocopter-button");
let promoSelfieStick = document.querySelector(".promo-selfie-stick");
let promoBand = document.querySelector(".promo-band");
let promoQuadcopter = document.querySelector(".promo-quadcopter");
let deliveryButton = document.querySelector(".delivery-button");
let guaranteeButton = document.querySelector(".guarantee-button");
let creditButton = document.querySelector(".credit-button");
let delivery = document.querySelector(".delivery");
let guarantee = document.querySelector(".guarantee");
let credit = document.querySelector(".credit");



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

deliveryButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  delivery.classList.remove("services-item-hide");
  guarantee.classList.add("services-item-hide");
  credit.classList.add("services-item-hide");
  creditButton.classList.remove("services-button-active");
  guaranteeButton.classList.remove("services-button-active");
  deliveryButton.classList.add("services-button-active");
});

guaranteeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  delivery.classList.add("services-item-hide");
  guarantee.classList.remove("services-item-hide");
  credit.classList.add("services-item-hide");
  creditButton.classList.remove("services-button-active");
  guaranteeButton.classList.add("services-button-active");
  deliveryButton.classList.remove("services-button-active");
});

creditButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  delivery.classList.add("services-item-hide");
  guarantee.classList.add("services-item-hide");
  credit.classList.remove("services-item-hide");
  creditButton.classList.add("services-button-active");
  guaranteeButton.classList.remove("services-button-active");
  deliveryButton.classList.remove("services-button-active");
});