# Duration formatter for Google Sheets

## Overview

Provides set of custom functions to work with
a human-readable time durations, like `2d 1h 30m 15s` or negative duration `- 2d 1h 30m 15s`.

## Functions

`FORMAT_DURATION(duration: number, durationType: string): string`
- `duration` - duration to format
- `durationType` - The unit of the input duration. Possible options 
Must be one of `'minute'`, `'second'`, `'hour'`, `'day'`, or `'week'`.

#### Example
`=FORMAT_DURATION(125, "minute") Returns: "0d 2h 5m 0s"`

`FORMATTED_DURATION_TO_SECONDS(formattedDuration) Returns: number`
- `duration` - The formatted duration string

#### Example
`=FORMATTED_DURATION_TO_SECONDS("0d 2h 5m 0s") Returns: 7500`

`FORMATTED_DURATION_SUM(duration1:string, duration2: string, ...more) Returns: string`
- `duration1` - The formatted duration string
- `duration2` - The formatted duration string
- as many as you need

#### Example
`=FORMATTED_DURATION_SUM("0d 2h 5m 0s", "1d 2h 25m 0s") Returns: "1d 4h 30m 0s"`

`FORMATTED_DURATION_SUB(duration1:string, duration2: string, ...more) Returns: string`
- `duration1` - The formatted duration string
- `duration2` - The formatted duration string
- as many as you need

#### Example
`=FORMATTED_DURATION_SUB("1d 2h 5m 0s", "0d 2h 5m 0s") Returns: "1d 0h 0m 0s"`

### Build

To build run `npm run build`. Results are stored in `./dist` folder 
