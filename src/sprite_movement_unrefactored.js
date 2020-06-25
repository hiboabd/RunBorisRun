// Import full sprite image

let img = new Image();
img.src = "./assets/sprite.png";
img.onload = function() {
  window.requestAnimationFrame(gameLoop);
};

// Draw canvas

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// Walk cycle animation direction & sprite size

const SCALE = 2;
const WIDTH = 16;
const HEIGHT = 18;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

const CYCLE_LOOP = [0, 1, 0, 2];
const FRAME_LIMIT = 12;
let currentLoopIndex = 0;
let frameCount = 0;

const FACING_DOWN = 0;
const FACING_UP = 1;
const FACING_LEFT = 2;
const FACING_RIGHT = 3;
let currentDirection = FACING_DOWN;

// Getting user input

let keyPresses = {};

window.addEventListener('keydown', keyDownListener, true);
function keyDownListener(event) {
  keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
  keyPresses[event.key] = false;
}

// Character movement

const MOVEMENT_SPEED = 1;
let positionX = 0;
let positionY = 0;

// Run each frame

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let hasMovedX = false;
  let hasMovedY = false;
  // Movement direction set here using moveCharacter function

  if (keyPresses.w) {
    moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
  } else if (keyPresses.s) {
    moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
  }

  if (keyPresses.a) {
    moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
  } else if (keyPresses.d) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
  }

  // Run animation cycle if moving

  if (hasMovedX || hasMovedY) {
    frameCount++;
    if (frameCount >= FRAME_LIMIT) {
      frameCount = 0;
      currentLoopIndex++;
      if (currentLoopIndex >= CYCLE_LOOP.length) {
        currentLoopIndex = 0;
      }
    }
  }

  //Stand in neutral position is not moving

  if (!hasMovedX || !hasMovedY) {
    currentLoopIndex = 0;
  }

  // Character movement limited to boundry here

  function moveCharacter(deltaX, deltaY, direction) {
    if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
      positionX += deltaX
      hasMovedX = true;
    }
    if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
      positionY += deltaY
      hasMovedY = true;
    }
    currentDirection = direction;
  }

  drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
  window.requestAnimationFrame(gameLoop);
}
