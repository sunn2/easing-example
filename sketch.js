let x = 0;
let y = 0;
let easing = 0.05; // easing : 움직임을 부드럽게, 1이 기본값 (1~0)

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(200, 244, 252); // background를 draw 안에 -> 궤적 안 남게
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