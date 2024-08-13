import {DURATION_TYPES, TYPES_TO_SECONDS} from "../const";

/**
 * Convert number to time duration
 *
 * @param {number} duration
 * @param {('minute'|'second'|'hour'|'day'|'week')} type of duration
 * @return {string}
 * @customfunction
 */
export function FORMAT_DURATION(duration, type) {
    if(type === undefined){
        throw `duration type is not specified`;
    }

    duration = parseInt(duration)
    if(isNaN(duration)){
        throw `invalid duration`;
    }

    const response = [];
    const config = new Set(['day', 'hour', 'minute', 'second']);

    if(TYPES_TO_SECONDS[type] === undefined){
        throw `unsupported time duration ${type}`;
    }

    let seconds = TYPES_TO_SECONDS[type] * duration;
    if(seconds < 0){
        response.push('-');
        seconds *= -1;
    }

    for(const durationType of DURATION_TYPES){
        if(TYPES_TO_SECONDS[durationType] === undefined){
            throw `unsupported time duration ${durationType} in config`;
        }

        if(config.has(durationType)){
            response.push(
                Math.floor(seconds / TYPES_TO_SECONDS[durationType]) + durationType.charAt(0)
            );

            seconds = seconds % TYPES_TO_SECONDS[durationType];
        }
    }

    return response.join(' ');
}
