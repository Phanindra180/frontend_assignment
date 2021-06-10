// console.log("entered script");
// mouse listeners
const changeImage = function (element) {
  return () => {
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

    const title = element.querySelector(".title");
    const cap = document.querySelector("figcaption");
    cap.innerText = title.innerText;
  };
};

const cat = document.querySelector("#cat");
// console.log(cat);
const couple = document.querySelector("#couple");
const bali = document.querySelector("#bali");
const NextByk = document.querySelector("#NextByk");
const interns = document.querySelector("#interns");
var currently_active = cat;

cat.addEventListener("click", changeImage(cat));
couple.addEventListener("click", changeImage(couple));
bali.addEventListener("click", changeImage(bali));
NextByk.addEventListener("click", changeImage(NextByk));
interns.addEventListener("click", changeImage(interns));

//keyboard listeners
const items = document.querySelectorAll("li");
// console.log(items);
var index = 0;

const changeImage_key = function (eve) {
  console.log(eve.key);
  if (eve.key == "ArrowUp") {
    console.log("done");
    index--;
    if (index < 0) index++;
  } else if (eve.key == "ArrowDown") {
    console.log("donedone");
    index++;
    if (index == items.length) index--;
  }
};

window.addEventListener("keydown", function (Event) {
  changeImage_key(Event);
  console.log(items[index]);
  let element = items[index];
  element.classList.toggle("container_active");
  currently_active.classList.toggle("container_active");
  currently_active = element;

  const bigImg = document.querySelector(".bigImage");
  const elt_img = element.querySelector("img");
  bigImg.src = elt_img.src;

  const title = element.querySelector(".title");
  const cap = document.querySelector("figcaption");
  cap.innerText = title.innerText;
});

//title modification
const title_items = document.querySelectorAll(".title");
for (let i = 0; i < title_items.length; i++) {
  let text = title_items[i].innerText;
  if (text.length > 35) {
    title_items[i].innerText =
      text.substr(0, 14) + "..." + text.substr(text.length - 13, text.length);
  }
}
