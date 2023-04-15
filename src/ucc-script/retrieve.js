import { m } from './colors.js';

// @ts-ignore
export function normalHue(t) {
    let hours = t.getHours().toString().padStart(2, '0');
    let mins = t.getMinutes().toString().padStart(2, '0');
    let timeKey = hours + ":" + mins;
  
    let r = Math.trunc(m.get(timeKey)[1])
    let g = Math.trunc(m.get(timeKey)[2])
    let b = Math.trunc(m.get(timeKey)[3])

    return [r, g, b];
}

// @ts-ignore
export function saturatedHue(t) {
    let hours = t.getHours().toString().padStart(2, '0');
    let mins = t.getMinutes().toString().padStart(2, '0');
    let timeKey = hours + ":" + mins;
  
    let r = Math.trunc(m.get(timeKey)[4])
    let g = Math.trunc(m.get(timeKey)[5])
    let b = Math.trunc(m.get(timeKey)[6])

    return [r, g, b];
}