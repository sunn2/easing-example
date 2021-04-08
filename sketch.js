// let x = 0;
// let y = 0;
// let speed = 10;
// let state = 0;

// function setup() {
//   createCanvas(800, 800);
// }
// function draw() {
//   background(255);
//   stroke(0);
//   fill(175);
//   rect(x, y, 19, 19);
  
//   if (state == 0) {
//     x = x + speed;
//     if (x > width - 20) { // 네모가 벽에 부딪힐때
//        x = width - 20; // 네모가 벽을 넘어가지 않게 하기 위함
//       state = 1;
//     }
//   } else if (state == 1) {
//     y = y + speed;
//     if (y > height - 20) {
//       y = height - 20;
//       state = 2;
//     }
//   } else if (state == 2) {
//     x = x - speed;
//     if (x < 0) {
//       x = 0;
//       state = 3;
//     }
//   } else if (state == 3) {
//     y = y - speed;
//      if (y < 0) {
//        y = 0;
//        state = 0;
//      }
//   }
// } // 벽 따라 도는 네모

let x = 0;
let y = 0;
let easing = 0.05; // easing : 움직임을 부드럽게, 1이 기본값 (1~0)

function setup() {
    createCanvas(windowWidth, windowHeight);
    //background(3, 244, 252);
}

function draw() {
    background(3, 244, 252); // background를 draw 안에 -> 궤적 안 남게
    let targetX = mouseX;
    x += (targetX - x) * easing; // x = x + (targetX - x) * easing

    let targetY = mouseY;
    y += (targetY - y) * easing;

    ellipse(x, y, 50, 50);
} 

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
// 따라다니는 원, 창 크기에 맞게 캔버스 설정