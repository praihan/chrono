import { expect } from 'chai';
import 'mocha';

import {
  Duration,
  Nanoseconds,
  Microseconds,
  Milliseconds,
  Seconds,
  Minutes,
  Hours,
} from '../../src/chrono';

import { DurationObject } from '../../src/-private/duration';

const {
  UnitSize,

  nanoseconds,
  microseconds,
  milliseconds,
  seconds,
  minutes,
  hours,

  valueOf,
} = Duration;

describe('Duration.valueOf', () => {
  it('Nanoseconds', () => expect(valueOf(nanoseconds(60 * -2e9))).to.equal(-120));
  it('Microseconds', () => expect(valueOf(microseconds(60 * 4e9 + 1))).to.equal(240e3 + 0.000001));
  it('Milliseconds', () => expect(valueOf(milliseconds(4e9 + 1))).to.equal(4e6 + 0.001));
  it('Seconds', () => expect(valueOf(seconds(4e9 + 1))).to.equal(4e9 + 1));
  it('Minutes', () => expect(valueOf(minutes(4))).to.equal(240));
  it('Hours', () => expect(valueOf(hours(-4))).to.equal(60 * 60 * -4));

  it('has object valueOf', () => expect(+milliseconds(1001)).to.be.equal(1.001));
  it('can sort', () => {
    const compare = (a: any, b: any) => a - b;
    const nano = nanoseconds(1e9 + 1e6 + 1e3 + 1);
    const micro = microseconds(1e6 + 1e3 + 1);
    const milli = milliseconds(1e3 + 1);
    const sec = seconds(1);
    const min = minutes(241);
    const hour = hours(4);
    expect([nano, micro, milli, sec, min, hour].sort(compare)).to.eql([sec, milli, micro, nano, hour, min]);
  });
});
