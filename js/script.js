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
const modalWriteUs = document.querySelector(".modal-write-us");
const writeButton = document.querySelector(".write-button");
const writeUsClose = document.querySelector(".write-us-close");
let message = document.querySelector(".message");
let inputName = document.querySelector(".input-name");
let inputEmail = document.querySelector(".input-email");
const mapButton = document.querySelector(".map-button");
const mapModal = document.querySelector(".map-modal");
const mapClose = document.querySelector(".map-close");


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

writeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("write-us-hide");
  inputName.focus();
});

writeUsClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("write-us-hide");
});

modalWriteUs.addEventListener("submit",function (evt) {
  if(!inputName.value) {
  evt.preventDefault();
  inputName.classList.add("input-error-style");}
});

modalWriteUs.addEventListener("submit",function (evt) {
  if(!message.value) {
  evt.preventDefault();
  message.classList.add("input-error-style");}
});

modalWriteUs.addEventListener("submit",function (evt) {
  if(!inputEmail.value) {
  evt.preventDefault();
  inputEmail.classList.add("input-error-style");}
});

mapButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.remove("map-modal-hide");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.add("map-modal-hide");
});