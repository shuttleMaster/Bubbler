let time = 60;
let val = 0;
let score = 0;
const colors = ["00FFFF", "ADFF2F", "FF96C5", "FC6C85", "FFBF65"];
const updateScorePositive = () => {
  score += 10;
  document.querySelector("#score").textContent = score;
};
const updateScoreNegative = () => {
  score -= 10;
  time -= 5;
  document.querySelector("#score").textContent = score;
};

const makeBubbles = () => {
  let bubbles = "";

  for (let i = 0; i <= 79; i++) {
    let num = Math.floor(Math.random() * 10);
    let randomColor = colors[(Math.random() * colors.length) | 0];
    bubbles += `<div class="bubble" style="background-color:#${randomColor}">${num}</div>`;
    console.log(bubbles);
  }

  document.querySelector(".panal-bottom").innerHTML = bubbles;
};

const runtimer = () => {
  const timer = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timerr").textContent = time;
    } else {
      clearInterval(timer);
      document.querySelector(".panal-bottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
};

const getHit = () => {
  val = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = val;
};

const gameLogic = () => {
  makeBubbles();
  runtimer();
  getHit();
  document.querySelector(".panal-bottom").addEventListener("click", (e) => {
    console.log(Number(e.target.textContent));
    if (val === Number(e.target.textContent)) {
      updateScorePositive();
      makeBubbles();
      getHit();
    } else {
      updateScoreNegative();
      makeBubbles();
      getHit();
    }
  });
};

gameLogic();
