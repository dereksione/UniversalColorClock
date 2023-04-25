
import { normalHue, saturatedHue, getHueCode } from "../ucc-script/retrieve";

import { normalColor, saturatedColor, colorCode, timeString } from "./stores";

export function returnVals() {
    const time = new Date();

    let timeString = formatTime(time.getHours(), time.getMinutes());
    let colorCode = getHueCode(time.getHours().toString(), time.getMinutes().toString());

    return [timeString, colorCode, normalHue(time), saturatedHue(time)]
}

export function updateTimeEveryMin() {
    const interval = setInterval(() => {
        let vals = returnVals();

        timeString.set(vals[0]);
        colorCode.set(vals[1]);

        let [r, g, b] = vals[2];
        normalColor.set({
            r, g, b
        });

        [r, g, b] = vals[3];
        saturatedColor.set({
            r, g, b
        });
    }, 10);

    return () => {
        clearInterval(interval);
    };
}

/**
 * @param {number} hours
 * @param {number} mins
 */
export function formatTime(hours, mins) {
    let ampm = hours >= 12 ? "PM" : "AM";
    let shours = hours % 12;
    shours = shours ? shours : 12;
    let smins = mins < 10 ? "0" + mins : mins;
    return `${shours}:${smins} ${ampm}`;
}