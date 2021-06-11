// console.log("entered script");
// mouse listeners
const changeImage = function (element) {
  // console.log("entered func");
  for (let i = 0; i < items.length; i++) {
    if (items[i] == element) index = i;
  }
  element.classList.toggle("container_active");
  currently_active.classList.toggle("container_active");
  currently_active = element;

  const bigImg = document.querySelector(".bigImage");
  const elt_img = element.querySelector("img");
  bigImg.src = elt_img.src;

  const title = elt_img.title;
  const cap = document.querySelector(".caption");
  cap.innerText = title;
  truncate(cap);
};

const cat = document.querySelector("#cat");
// console.log(cat);
const couple = document.querySelector("#couple");
const bali = document.querySelector("#bali");
const NextByk = document.querySelector("#NextByk");
const interns = document.querySelector("#interns");
var currently_active = cat;

cat.addEventListener("click", function () {
  changeImage(cat);
});
couple.addEventListener("click", function () {
  changeImage(couple);
});
bali.addEventListener("click", function () {
  changeImage(bali);
});
NextByk.addEventListener("click", function () {
  changeImage(NextByk);
});
interns.addEventListener("click", function () {
  changeImage(interns);
});

//keyboard listeners
const items = document.querySelectorAll("li");
// console.log(items);
var index = 0;

const changeImage_key = function (eve) {
  if (eve.key == "ArrowUp") {
    index--;
    if (index < 0) index++;
  } else if (eve.key == "ArrowDown") {
    index++;
    if (index == items.length) index--;
  }
};

window.addEventListener("keydown", function (Event) {
  changeImage_key(Event);
  console.log(items[index]);
  let element = items[index];
  changeImage(element);
});

//title modification
const truncate = function (item) {
  while (item.clientWidth < item.scrollWidth) {
    let text = item.innerText;
    // console.log(text, item.clientWidth, item.scrollWidth);
    let len = text.length;
    text = text.substr(0, len / 2 - 2) + "..." + text.substr(len / 2 + 2, len);
    item.innerText = text;
  }
};

const title_items = document.querySelectorAll(".title");
for (let i = 0; i < title_items.length; i++) {
  truncate(title_items[i]);
}
