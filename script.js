const number_input = document.getElementById("year_input");
const btn = document.getElementById("btn");
const timeline = document.getElementById("timeline");
const btn_left = document.getElementById("btn-left");
const btn_right = document.getElementById("btn-right");

let cur_slide = 0;

function turn_right() {
  if (cur_slide === 49) {
    timeline.style.transform = `translateX(${50 * -181 - 50 * 80}px)`;
    timeline.style.transition = "all 2s ease-out";
    cur_slide = -1;
  }
  timeline.style.transform = `translateX(${
    (cur_slide + 1) * -181 - (cur_slide + 1) * 80
  }px)`;
  timeline.style.transition = "all 1s ease-out";
  cur_slide++;
  console.log(cur_slide);
}

function turn_left() {
  if (cur_slide === 0) {
    timeline.style.transform = `translateX(${50 * 181 + 50 * 80}px)`;
    timeline.style.transition = "all 2s ease-out";
    cur_slide = 50;
  }
  cur_slide--;
  timeline.style.transform = `translateX(${
    (cur_slide + 1) * -181 - (cur_slide + 1) * 80 + 261
  }px)`;
  timeline.style.transition = "all 1s ease-out";
  console.log(cur_slide);
}

function find_year() {
  if (number_input.value < 1955 || number_input.value > 2021) {
    alert("Please enter a number in the range");
  }
  try {
    document.querySelector(`.el-${number_input.valueAsNumber}`).id;
  } catch (err) {
    alert("Try a different year");
  }

  timeline.style.transition = "all 1s ease-out";
  const el = document.querySelector(`.el-${number_input.valueAsNumber}`).id;
  if (el < 1955 && el > 2021) {
  }
  const distance = el * -261;
  console.log(distance);
  timeline.style.transform = `translateX(${distance}px)`;
  cur_slide = el;
  console.log(cur_slide);
}

btn_right.addEventListener("click", turn_right);
btn_left.addEventListener("click", turn_left);
btn.addEventListener("click", find_year);
