import { loop } from './loop';

export function randomCount(left: number, right: number): number {
  let min = left;
  let max = right
  if (min > max) {
    min = right;
    max = left;
  }
  const interval = max - min
  return min + Math.round(Math.random() * interval)
}

export function randomLoop(left: number, right: number, callback: Function) {
  const count = randomCount(left, right)
  loop(count, () => {
    callback()
  })
}

export function randomPick<T>(list: T[]): T {
  const index = Math.floor(Math.random() * list.length);
  return list[index]
}
