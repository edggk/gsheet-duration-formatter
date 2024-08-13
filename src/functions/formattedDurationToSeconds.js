import {TYPE_SHORTHANDS, TYPES_TO_SECONDS} from "../const";

/**
 * Converts formatted duration to a number
 *
 * @param {string} duration
 * @return {number}
 * @customfunction
 */
export function FORMATTED_DURATION_TO_SECONDS(duration) {
    if(typeof duration !== 'string'){
        throw `invalid duration`;
    }

    let seconds = 0;
    let trimmed = duration.trim();
    const isNegative = trimmed.charAt(0) === '-';

    if(isNegative){
        trimmed = trimmed.substring(1);
    }

    const parts = trimmed.split(' ');

    let typeShorthand;
    let multiplier;
    let num;
    for(const part of parts){
        num = parseInt(part.substring(0, part.length - 1));

        typeShorthand = part.charAt(part.length - 1);
        multiplier = TYPES_TO_SECONDS[TYPE_SHORTHANDS[typeShorthand]];

        if(multiplier === undefined || isNaN(num)){
            console.log(part, num, typeShorthand, multiplier)
            throw `invalid duration string`;
        }

        seconds += multiplier * num;
    }

    return isNegative ? seconds * -1 : seconds;
}
