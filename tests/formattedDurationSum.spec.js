import { expect, it } from 'vitest'
import {FORMATTED_DURATION_SUM} from "../src/functions/formattedDurationSum";

it('sums two formatted durations', () => {
    expect(
        FORMATTED_DURATION_SUM('0w 1d 1h 30m', '0w 4d 1h 30m')
    ).toBe('5d 3h 0m 0s')
});

it('sums when one duration is negative ', () => {
    expect(
        FORMATTED_DURATION_SUM('0w 4d 1h 30m', '-0w 1d 1h 30m')
    ).toBe('3d 0h 0m 0s')
});

it('sums when two durations are negative ', () => {
    expect(
        FORMATTED_DURATION_SUM('-0w 4d 1h 30m', '-0w 1d 1h 30m')
    ).toBe('- 5d 3h 0m 0s')
});

it('sum accepts unlimited number or args', () => {
    const args = ['0w 1d 4h 20m', '0w 1d 1h 5m', '0w 1d 1h 5m', '0w 1d 1h 5m', '0w 1d 1h 5m'];

    expect(FORMATTED_DURATION_SUM(...args)).toBe('5d 8h 40m 0s')
});

it('sum accepts column ranges, example A1:a10', () => {
    const args = [
        ['0w 5d 4h 20m', '0w 1d 1h 5m', '0w 1d 1h 5m', '0w 1d 1h 5m', '0w 1d 1h 5m'],
        ['0w 2d 0h 0m', '0w 0d 2h 0m']
    ];

    expect(FORMATTED_DURATION_SUM(...args)).toBe('11d 10h 40m 0s')
});
