export function randomRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

export function randomRangeInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}