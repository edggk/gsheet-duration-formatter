import { expect, it } from 'vitest'
import {FORMATTED_DURATION_SUB} from "../src/functions/formattedDurationSub";

it('subtracts two formatted durations', () => {
    expect(
        FORMATTED_DURATION_SUB('0w 1d 1h 30m', '0w 4d 1h 30m')
    ).toBe('- 3d 0h 0m 0s')
});

it('subtracts when one duration is negative ', () => {
    expect(
        FORMATTED_DURATION_SUB('0w 4d 1h 30m', '-0w 1d 1h 30m')
    ).toBe('5d 3h 0m 0s')
});

it('subtracts when two durations are negative ', () => {
    expect(
        FORMATTED_DURATION_SUB('-0w 4d 1h 30m', '-0w 1d 1h 30m')
    ).toBe('- 3d 0h 0m 0s')
});

it('subtracts accepts unlimited number or args', () => {
    const args = ['0w 5d 4h 20m', '0w 1d 1h 5m', '0w 1d 1h 5m', '0w 1d 1h 5m', '0w 1d 1h 5m'];

    expect(FORMATTED_DURATION_SUB(...args)).toBe('1d 0h 0m 0s')
});

it('subtracts accepts column ranges, example A1:a10', () => {
    const args = [
        ['0w 5d 4h 20m', '0w 1d 1h 5m', '0w 1d 1h 5m', '0w 1d 1h 5m', '0w 1d 1h 5m'],
        ['0w 1d 0h 0m', '0w 0d 2h 0m']
    ];

    expect(FORMATTED_DURATION_SUB(...args)).toBe('- 0d 2h 0m 0s')
});
