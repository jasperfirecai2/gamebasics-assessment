export function getRandomInt(max: number) {
 return Math.floor(Math.random() * max);
}

export function d2() {
  return getRandomInt(2) + 1;
}

export function d100() {
  return getRandomInt(100) + 1;
}