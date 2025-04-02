'use strict';

const TO_RAD = Math.PI / 180;
const wireCount = 30;
const wirePropCount = 8;
const wirePropsLength = wireCount * wirePropCount;
const turnCount = 8;
const turnAmount = (360 / turnCount) * TO_RAD;
const turnChanceRange = 180;
const baseSpeed = 0.5;
const rangeSpeed = 1;
const baseTTL = 100;
const rangeTTL = 300;
const baseWidth = 1;
const rangeWidth = 2;
const baseHue = 180;
const rangeHue = 60;
const backgroundColor = '#000000';
const maxVisibleWires = 10;
let visibleWireCount = 0;
let totalWiresCreated = 0;

let container: HTMLElement;
let canvas: { a: HTMLCanvasElement; b: HTMLCanvasElement };
let ctx: { a: CanvasRenderingContext2D; b: CanvasRenderingContext2D };
let center: number[];
let tick: number;
let wireProps: Float32Array;
let wireQueue: number[] = [];

let animationStartTime: number;
let animationDuration = 15000; // 10 seconds in milliseconds
let animationFrameId: number;

function initWires() {
  wireProps = new Float32Array(wirePropsLength);
  visibleWireCount = 0;

  let i;

  for (i = 0; i < wirePropsLength; i += wirePropCount) {
    initWire(i);
  }
}

function initWire(i: number) {
  let x, y, direction, speed, life, ttl, width, hue;

  x = rand(canvas.a.width);
  y = rand(canvas.a.height);
  direction = Math.floor(rand(4)) * HALF_PI;
  speed = baseSpeed + rand(rangeSpeed);
  life = 0;
  ttl = baseTTL + rand(rangeTTL);
  width = baseWidth + rand(rangeWidth);
  hue = baseHue + rand(rangeHue);

  wireProps.set([x, y, direction, speed, life, ttl, width, hue], i);
  
  if (wireProps[i+5] === 0) {
    visibleWireCount++;
    wireQueue.push(i);
  }
  
  totalWiresCreated++;
  
  if (visibleWireCount > maxVisibleWires && wireQueue.length > 0) {
    const oldestWireIndex = wireQueue.shift();
    if (oldestWireIndex !== undefined) {
      wireProps[oldestWireIndex + 5] = wireProps[oldestWireIndex + 6];
      visibleWireCount--;
    }
  }
}

function updateWires() {
  tick++;

  let i;

  for (i = 0; i < wirePropsLength; i += wirePropCount) {
    updateWire(i);
  }
}

function updateWire(i: number) {
  let i2=1+i, i3=2+i, i4=3+i, i5=4+i, i6=5+i, i7=6+i, i8=7+i;
  let x, y, direction, speed, life, ttl, width, hue, turnChance, turnBias;

  x = wireProps[i];
  y = wireProps[i2];
  direction = wireProps[i3];
  speed = wireProps[i4];
  life = wireProps[i5];
  ttl = wireProps[i6];
  width = wireProps[i7];
  hue = wireProps[i8];

  const ttlReduction = Math.min(0.5, totalWiresCreated / 1000);
  const adjustedTTL = ttl - ttlReduction * life;

  drawWire(x, y, direction, life, adjustedTTL, width, hue);

  life++;
  x += cos(direction) * speed;
  y += sin(direction) * speed;
  
  const gridSize = 20;
  const onGrid = (round(x) % gridSize === 0) || (round(y) % gridSize === 0);
  
  turnChance = !(tick % round(rand(turnChanceRange))) && onGrid;
  turnBias = round(rand(1)) ? -1 : 1;
  
  if (turnChance) {
    direction = Math.round(direction / HALF_PI) * HALF_PI;
    direction += HALF_PI * turnBias;
  }

  if (life > adjustedTTL) {
    const queueIndex = wireQueue.indexOf(i);
    if (queueIndex !== -1) {
      wireQueue.splice(queueIndex, 1);
    }
    visibleWireCount--;
    initWire(i);
  } else {
    wireProps[i] = x;
    wireProps[i2] = y;
    wireProps[i3] = direction;
    wireProps[i5] = life;
  }

  checkBounds(x, y);
}

function drawWire(x: number, y: number, direction: number, life: number, ttl: number, width: number, hue: number) {
  ctx.a.save();
  const opacityFactor = Math.max(0.05, 1 - (totalWiresCreated / 1000));
  ctx.a.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.075 * opacityFactor})`;
  ctx.a.lineWidth = width;
  
  const lineLength = 20;
  const endX = x + cos(direction) * lineLength;
  const endY = y + sin(direction) * lineLength;
  
  ctx.a.beginPath();
  ctx.a.moveTo(x, y);
  ctx.a.lineTo(endX, endY);
  ctx.a.stroke();
  
  ctx.a.fillStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.15 * opacityFactor})`;
  ctx.a.beginPath();
  ctx.a.arc(endX, endY, width * 0.8, 0, TAU);
  ctx.a.fill();
  
  ctx.a.restore();
}

function checkBounds(x: number, y: number) {
  if (x > canvas.a.width) x = 0;
  if (x < 0) x = canvas.a.width;
  if (y > canvas.a.height) y = 0;
  if (y < 0) y = canvas.a.height;
}

function createCanvas() {
  container = document.querySelector('.content--canvas')!;
  canvas = {
    a: document.createElement('canvas'),
    b: document.createElement('canvas')
  };
  canvas.b.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;
  container.appendChild(canvas.b);
  ctx = {
    a: canvas.a.getContext('2d')!,
    b: canvas.b.getContext('2d')!
  };
  center = [];
  tick = 0;
}

function resize() {
  const { innerWidth, innerHeight } = window;
  
  canvas.a.width = innerWidth;
  canvas.a.height = innerHeight;

  ctx.a.drawImage(canvas.b, 0, 0);

  canvas.b.width = innerWidth;
  canvas.b.height = innerHeight;
  
  ctx.b.drawImage(canvas.a, 0, 0);

  center[0] = 0.5 * canvas.a.width;
  center[1] = 0.5 * canvas.a.height;
}

function render() {
  ctx.b.save();
  ctx.b.fillStyle = backgroundColor;
  ctx.b.fillRect(0,0,canvas.b.width,canvas.b.height);
  ctx.b.restore();

  ctx.b.save();
  ctx.b.filter = 'blur(12px)';
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();

  ctx.b.save();
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
}

function draw() {
  const currentTime = performance.now();
  const elapsedTime = currentTime - animationStartTime;
  
  if (elapsedTime < animationDuration) {
    updateWires();
    render();
    animationFrameId = window.requestAnimationFrame(draw);
  } else {
    // Animation complete, render one final frame
    updateWires();
    render();
    console.log('Animation completed after 10 seconds');
  }
}

// Helper functions
const HALF_PI = Math.PI / 2;
const TAU = Math.PI * 2;

function rand(max: number) {
  return Math.random() * max;
}

function fadeInOut(t: number, m: number) {
  let hm = 0.5 * m;
  return Math.abs((t + hm) % m - hm) / (hm);
}

function cos(v: number) {
  return Math.cos(v);
}

function sin(v: number) {
  return Math.sin(v);
}

function round(n: number) {
  return Math.round(n);
}

export function setup() {
  createCanvas();
  resize();
  totalWiresCreated = 0;
  wireQueue = [];
  initWires();
  animationStartTime = performance.now();
  draw();
}

export function stopAnimation() {
  if (animationFrameId) {
    window.cancelAnimationFrame(animationFrameId);
  }
}

window.addEventListener('load', setup);
window.addEventListener('resize', resize);