import { expect, it } from 'vitest'
import {FORMATTED_DURATION_TO_SECONDS} from "../src/functions/formattedDurationToSeconds";

it('returns correct seconds from formatted duration', () => {
    expect(FORMATTED_DURATION_TO_SECONDS('0w 1d 1h 30m'))
        .toBe(91800);
});

it('returns correct seconds from negative formatted duration', () => {
    expect(FORMATTED_DURATION_TO_SECONDS('-0w 1d 1h 30m'))
        .toBe(-91800);
});
