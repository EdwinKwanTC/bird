// s=ut+1/2at
// s = distance
// u = initial velocity (力度)
// t = time (時間)
// a = acceleration

export function calFlyHeight(force: number, time: number, a = -10): number {
  return force * time + 0.5 * a * time * time;
}
