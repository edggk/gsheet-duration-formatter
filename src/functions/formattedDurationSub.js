import {calculateFormattedDurations} from "../utils/calculateFormattedDurations";

/**
 * @customfunction
 */
export function FORMATTED_DURATION_SUB(...inputs){
    return calculateFormattedDurations(inputs, (a, b) => a - b);
}
