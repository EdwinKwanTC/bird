// s=ut+1/2at
// s = distance
// u = initial velocity (εεΊ¦)
// t = time (ζι)
// a = acceleration

export function calFlyHeight(force: number, time: number, a = -10): number {
  return force * time + 0.5 * a * time * time;
}
