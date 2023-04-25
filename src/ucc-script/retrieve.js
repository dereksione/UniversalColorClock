import { m } from './colors.js';

/**
 * @param {Date} t 
 */
export function normalHue(t) {
    let hours = t.getHours().toString();
    let mins = t.getMinutes().toString();

    return getNormalHueFromHoursMins(hours, mins);
}

/**
 * @param {Date} t 
 */
export function saturatedHue(t) {
    let hours = t.getHours().toString();
    let mins = t.getMinutes().toString();
   
    return getSaturatedHueFromHoursMins(hours, mins);
}

/**
 * @param {number} mins
 */
export function getNormalHueFromMins(mins) {
    var hours = Math.floor(mins / 60);          
    var minutes = mins % 60;

    return getNormalHueFromHoursMins(hours.toString(), minutes.toString());
}

/**
 * @param {number} mins
 */
export function getSaturatedHueFromMins(mins) {
    var hours = Math.floor(mins / 60);          
    var minutes = mins % 60;

    return getSaturatedHueFromHoursMins(hours.toString(), minutes.toString());
}

/**
 * @param {String} hours
 * @param {String} mins
 */
export function getNormalHueFromHoursMins(hours, mins) {
    hours = hours.padStart(2, '0');
    mins = mins.padStart(2, '0');
    let timeKey = hours + ":" + mins;
  
    let r = Math.trunc(m.get(timeKey)[1])
    let g = Math.trunc(m.get(timeKey)[2])
    let b = Math.trunc(m.get(timeKey)[3])

    return [r, g, b];
}

/**
 * @param {String} hours
 * @param {String} mins
 */
export function getHueCode(hours, mins) {
    hours = hours.padStart(2, '0');
    mins = mins.padStart(2, '0');
    let timeKey = hours + ":" + mins;
   
    let code = m.get(timeKey)[0];

    return code;
}

/**
 * @param {String} hours
 * @param {String} mins
 */
export function getSaturatedHueFromHoursMins(hours, mins) {
    hours = hours.padStart(2, '0');
    mins = mins.padStart(2, '0');
    let timeKey = hours + ":" + mins;
  
    let r = Math.trunc(m.get(timeKey)[4])
    let g = Math.trunc(m.get(timeKey)[5])
    let b = Math.trunc(m.get(timeKey)[6])

    return [r, g, b];
}