import {ensureArray} from "./ensureArray";
import {FORMATTED_DURATION_TO_SECONDS} from "../functions/formattedDurationToSeconds";
import {FORMAT_DURATION} from "../functions/formatDuration";

export function calculateFormattedDurations(inputs, operation){
    const durations = []

    for(const input of inputs){
        durations.push(...ensureArray(input));
    }

    let tally = durations.length === 0
        ? 0
        : FORMATTED_DURATION_TO_SECONDS(durations[0]);

    for(let i = 1; i < durations.length; i++){
        tally = operation(tally, FORMATTED_DURATION_TO_SECONDS(durations[i]));
    }

    // TODO grab from entries
    const config = ['day', 'hour', 'minute', 'second'];

    return FORMAT_DURATION(tally, 'second', config);
}
