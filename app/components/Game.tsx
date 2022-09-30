import { useEffect } from "react";

export default function Game() {
  const SPEED = 0.005;
  const SPEED_SCALE_INCREASE = 0.0005;
  const JUMP_SPEED = 0.035;
  const GRAVITY = 0.00007;
  const DINO_FRAME_COUNT = 2;
  const FRAME_TIME = 300;
  const CACTUS_INTERVAL_MIN = 2000;
  const CACTUS_INTERVAL_MAX = 10000;
  let lastTime: any = null;
  let speedScale = 1;
  let isJumping = false;
  let yVelocity = 0;
  let dinoFrame = 0;
  let currentFrameTime = 0;
  let nextCactusTime = 0;
  let score = 0;

  function getCustomProperty(elem: any, prop: any) {
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0;
  }

  function setCustomProperty(elem: any, prop: any, value: any) {
    elem.style.setProperty(prop, value);
  }

  function incrementCustomProperty(elem: any, prop: any, inc: number) {
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc);
  }

  function setupGround(groundElem: any) {
    setCustomProperty(groundElem[0], "--left", 0);
    setCustomProperty(groundElem[1], "--left", 100);
  }

  function setupDino(dinoElem: any) {
    isJumping = false;
    dinoFrame = 0;
    currentFrameTime = 0;
    setCustomProperty(dinoElem, "--bottom", 0);
    actionList.map((action: string) => {
      return (
        document.removeEventListener(action, onJump),
        document.addEventListener(action, onJump)
      );
    });
  }

  function setupCactus(cannonElem: any) {
    nextCactusTime = CACTUS_INTERVAL_MIN;
    document.querySelectorAll(".cactus").forEach((cactus) => {
      cactus.remove();
    });
  }

  function handleStart() {
    const groundElem = document.querySelectorAll(".ground");
    const dinoElem = document.querySelector(".dino");
    const cactusElem = document.querySelector(".cactus");
    lastTime = null;
    speedScale = 1;
    score = 0;
    setupGround(groundElem);
    setupDino(dinoElem);
    setupCactus(cactusElem);
    window.requestAnimationFrame(update);
  }

  function handleRun(delta: number, speedScale: number) {
    const dinoElem = document.querySelector(".dino") as any;
    if (isJumping) {
      dinoElem.src = `img/dino-stationary.png`;
      return;
    }

    if (currentFrameTime >= FRAME_TIME) {
      dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
      dinoElem.src = `img/dino-run-${dinoFrame}.png`;
      currentFrameTime -= FRAME_TIME;
    }
    currentFrameTime += delta * speedScale;
  }

  function handleJump(delta: number) {
    if (!isJumping) return;
    const dinoElem = document.querySelector(".dino") as any;
    incrementCustomProperty(dinoElem, "--bottom", yVelocity * delta);

    if (getCustomProperty(dinoElem, "--bottom") <= 0) {
      setCustomProperty(dinoElem, "--bottom", 0);
      isJumping = false;
    }

    yVelocity -= GRAVITY * delta * 1.2;
  }

  function onJump(e: any) {
    if (isJumping) return;
    yVelocity = JUMP_SPEED;
    isJumping = true;
  }

  function updateGround(delta: number, speedScale: number) {
    const groundElem = document.querySelectorAll(".ground");
    groundElem.forEach((ground) => {
      incrementCustomProperty(
        ground,
        "--left",
        delta * SPEED * -1 * speedScale
      );
      if (getCustomProperty(ground, "--left") <= -100) {
        incrementCustomProperty(ground, "--left", 200);
      }
    });
  }

  function updateDino(delta: number, speedScale: number) {
    handleRun(delta, speedScale);
    handleJump(delta);
  }

  function updateCactus(delta: number, speedScale: number) {
    document.querySelectorAll(".cactus").forEach((cactus) => {
      incrementCustomProperty(
        cactus,
        "--left",
        delta * speedScale * SPEED * -1
      );
      if (getCustomProperty(cactus, "--left") <= -100) {
        cactus.remove();
      }
    });
    if (nextCactusTime <= 0) {
      createCactus();
      nextCactusTime =
        randomNumberBetween(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX) /
        speedScale;
    }
    nextCactusTime -= delta;
  }

  function getDinoRect() {
    const dinoElem = document.querySelector(".dino") as any;
    return dinoElem.getBoundingClientRect();
  }

  function getCactusRects() {
    return [...document.querySelectorAll(".cactus")].map((cactus) => {
      return cactus.getBoundingClientRect();
    });
  }

  function checkLose() {
    const dinoRect = getDinoRect();
    return getCactusRects().some((rect) => isCollision(rect, dinoRect));
  }

  function isCollision(rect1: DOMRect, rect2: DOMRect) {
    return (
      rect1.left < rect2.right &&
      rect1.top < rect2.bottom &&
      rect1.right > rect2.left &&
      rect1.bottom > rect2.top
    );
  }

  function createCactus() {
    const cactus = document.createElement("img") as any;
    cactus.dataset.cactus = true;
    cactus.src = "img/cactus.png";
    cactus.classList.add("cactus");
    setCustomProperty(cactus, "--left", 100);
    const worldElem = document.querySelector(".world") as any;
    worldElem.append(cactus);
  }

  function randomNumberBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function updateSpeedScale(delta: number) {
    speedScale += delta * SPEED_SCALE_INCREASE;
  }
  function updateScore(delta: number) {
    const scoreElem = document.querySelector(".score") as any;
    score += score + delta * 0.01;
    scoreElem.textContent = Math.round(score);
  }

  function update(time: number) {
    if (lastTime === null) {
      lastTime = time;
      window.requestAnimationFrame(update);
      return;
    }
    const delta = time - lastTime;

    updateGround(delta, speedScale);
    updateDino(delta, speedScale);
    updateCactus(delta, speedScale);
    updateSpeedScale(delta);
    // updateScore(delta);

    if (checkLose()) return handleLose();

    lastTime = time;
    window.requestAnimationFrame(update);
  }

  function handleLose() {
    setDinoLose();
    setTimeout(() => {
      eventListener();
    }, 100);
  }

  function setDinoLose() {
    const dinoElem = document.querySelector(".dino") as any;
    dinoElem.src = "img/dino-lose.png";
  }

  const actionList = ["keydown", "click"];

  function eventListener() {
    actionList.map((action: string) => {
      return document.addEventListener(action, handleStart, { once: true });
    });
  }

  useEffect(() => {
    eventListener();
  });

  return (
    <div className="world">
      {/* <div className="score absolute bottom-0 right-0 mb-16 mr-4 text-xl">
        {0}
      </div> */}
      <img
        src="img/ground.png"
        alt=""
        className="ground absolute bottom-0 h-12 w-[100%]"
      />
      <img
        src="img/ground.png"
        alt=""
        className="ground absolute bottom-0 h-12 w-[100%]"
      />
      <img
        src="img/dino-stationary.png"
        alt=""
        className="dino absolute left-2 h-12"
      />
    </div>
  );
}
