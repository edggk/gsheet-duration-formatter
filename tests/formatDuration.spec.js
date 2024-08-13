import { expect, it } from 'vitest'
import {FORMAT_DURATION} from "../src/functions/formatDuration";

it('returns correct formatted duration', () => {
    expect(
        FORMAT_DURATION(1530, 'minute')
    ).toBe('1d 1h 30m 0s')
});

it('returns correct formatted duration for negative duration', () => {
    expect(
        FORMAT_DURATION(-1530, 'minute')
    ).toBe('- 1d 1h 30m 0s')
});

