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

const {
  UnitSize,

  nanoseconds,
  microseconds,
  milliseconds,
  seconds,
  minutes,
  hours,

  isEqual,
} = Duration;

describe('Duration.[comparison]', () => {
  describe('isEqual', () => {
    it('Nanoseconds == Nanoseconds', () => expect(isEqual(nanoseconds(101), nanoseconds(101))).to.be.true);
    it('Nanoseconds != Nanoseconds', () => expect(isEqual(nanoseconds(101), nanoseconds(102))).to.be.false);
    it('Nanoseconds == Microseconds', () => expect(isEqual(nanoseconds(1000), microseconds(1))).to.be.true);
    it('Nanoseconds != Microseconds', () => expect(isEqual(nanoseconds(999), microseconds(1))).to.be.false);
    it('Nanoseconds == Millseconds', () => expect(isEqual(nanoseconds(-4e6), milliseconds(-4))).to.be.true);
    it('Nanoseconds != Milliseconds', () => expect(isEqual(nanoseconds(4e6 + 1), milliseconds(4))).to.be.false);
    it('Nanoseconds == Seconds', () => expect(isEqual(nanoseconds(7e9), seconds(7))).to.be.true);
    it('Nanoseconds != Seconds', () => expect(isEqual(nanoseconds(-7e9 + 1), seconds(-7))).to.be.false);
    it('Nanoseconds == Minutes', () => expect(isEqual(nanoseconds(60 * 4e9), minutes(4))).to.be.true);
    it('Nanoseconds != Minutes', () => expect(isEqual(nanoseconds(-1), minutes(0))).to.be.false);
    it('Nanoseconds == Hours', () => expect(isEqual(nanoseconds(60 * 60 * -1e9), hours(-1))).to.be.true);
    it('Nanoseconds != Hours', () => expect(isEqual(nanoseconds(60 * 60 * 4e9 - 1), hours(4))).to.be.false);

    it('Microseconds == Nanoseconds', () => expect(isEqual(microseconds(2), nanoseconds(2e3))).to.be.true);
    it('Microseconds != Nanoseconds', () => expect(isEqual(microseconds(2), nanoseconds(2e3 + 1))).to.be.false);
    it('Microseconds == Microseconds', () => expect(isEqual(microseconds(-1), microseconds(-1))).to.be.true);
    it('Microseconds != Microseconds', () => expect(isEqual(microseconds(999), microseconds(1000))).to.be.false);
    it('Microseconds == Millseconds', () => expect(isEqual(microseconds(-4e3), milliseconds(-4))).to.be.true);
    it('Microseconds != Milliseconds', () => expect(isEqual(microseconds(4e3 + 1), milliseconds(4))).to.be.false);
    it('Microseconds == Seconds', () => expect(isEqual(microseconds(7e6), seconds(7))).to.be.true);
    it('Microseconds != Seconds', () => expect(isEqual(microseconds(-7e6 + 1), seconds(-7))).to.be.false);
    it('Microseconds == Minutes', () => expect(isEqual(microseconds(60 * 4e6), minutes(4))).to.be.true);
    it('Microseconds != Minutes', () => expect(isEqual(microseconds(-1), minutes(0))).to.be.false);
    it('Microseconds == Hours', () => expect(isEqual(microseconds(60 * 60 * -1e6), hours(-1))).to.be.true);
    it('Microseconds != Hours', () => expect(isEqual(microseconds(60 * 60 * 4e6 - 1), hours(4))).to.be.false);

    it('Milliseconds == Nanoseconds', () => expect(isEqual(milliseconds(2), nanoseconds(2e6))).to.be.true);
    it('Milliseconds != Nanoseconds', () => expect(isEqual(milliseconds(2), nanoseconds(2e6 + 1))).to.be.false);
    it('Milliseconds == Microseconds', () => expect(isEqual(milliseconds(-1), microseconds(-1e3))).to.be.true);
    it('Milliseconds != Microseconds', () => expect(isEqual(milliseconds(1), microseconds(1001))).to.be.false);
    it('Milliseconds == Millseconds', () => expect(isEqual(milliseconds(-4), milliseconds(-4))).to.be.true);
    it('Milliseconds != Milliseconds', () => expect(isEqual(milliseconds(Number.MAX_SAFE_INTEGER), milliseconds(Number.MAX_SAFE_INTEGER - 1))).to.be.false);
    it('Milliseconds == Seconds', () => expect(isEqual(milliseconds(7e3), seconds(7))).to.be.true);
    it('Milliseconds != Seconds', () => expect(isEqual(milliseconds(-7e3 + 1), seconds(-7))).to.be.false);
    it('Milliseconds == Minutes', () => expect(isEqual(milliseconds(60 * 4e3), minutes(4))).to.be.true);
    it('Milliseconds != Minutes', () => expect(isEqual(milliseconds(-1), minutes(0))).to.be.false);
    it('Milliseconds == Hours', () => expect(isEqual(milliseconds(60 * 60 * -1e3), hours(-1))).to.be.true);
    it('Milliseconds != Hours', () => expect(isEqual(milliseconds(60 * 60 * 4e3 - 1), hours(4))).to.be.false);

    it('Seconds == Nanoseconds', () => expect(isEqual(seconds(2), nanoseconds(2e9))).to.be.true);
    it('Seconds != Nanoseconds', () => expect(isEqual(seconds(2), nanoseconds(2e9 + 1))).to.be.false);
    it('Seconds == Microseconds', () => expect(isEqual(seconds(-47), microseconds(-47e6))).to.be.true);
    it('Seconds != Microseconds', () => expect(isEqual(seconds(47), microseconds(47e6 + 1))).to.be.false);
    it('Seconds == Millseconds', () => expect(isEqual(seconds(-4), milliseconds(-4e3))).to.be.true);
    it('Seconds != Milliseconds', () => expect(isEqual(seconds(4), milliseconds(4e3 + 1))).to.be.false);
    it('Seconds == Seconds', () => expect(isEqual(seconds(7), seconds(7))).to.be.true);
    it('Seconds != Seconds', () => expect(isEqual(seconds(-8), seconds(-7))).to.be.false);
    it('Seconds == Minutes', () => expect(isEqual(seconds(60 * 4), minutes(4))).to.be.true);
    it('Seconds != Minutes', () => expect(isEqual(seconds(-1), minutes(0))).to.be.false);
    it('Seconds == Hours', () => expect(isEqual(seconds(60 * 60 * -1), hours(-1))).to.be.true);
    it('Seconds != Hours', () => expect(isEqual(seconds(60 * 60 * 4 - 1), hours(4))).to.be.false);

    it('Minutes == Nanoseconds', () => expect(isEqual(minutes(2), nanoseconds(2e9 * 60))).to.be.true);
    it('Minutes != Nanoseconds', () => expect(isEqual(minutes(2), nanoseconds(2e9 * 60 + 1))).to.be.false);
    it('Minutes == Microseconds', () => expect(isEqual(minutes(-47), microseconds(-47e6 * 60))).to.be.true);
    it('Minutes != Microseconds', () => expect(isEqual(minutes(47), microseconds(47e6 * 60 + 1))).to.be.false);
    it('Minutes == Millseconds', () => expect(isEqual(minutes(-4), milliseconds(-4e3 * 60))).to.be.true);
    it('Minutes != Milliseconds', () => expect(isEqual(minutes(4), milliseconds(4e3 * 60 + 1))).to.be.false);
    it('Minutes == Seconds', () => expect(isEqual(minutes(8), seconds(8 * 60))).to.be.true);
    it('Minutes != Seconds', () => expect(isEqual(minutes(8), seconds(8 * 60 + 1))).to.be.false);
    it('Minutes == Minutes', () => expect(isEqual(minutes(60), minutes(60))).to.be.true);
    it('Minutes != Minutes', () => expect(isEqual(minutes(-1), minutes(0))).to.be.false);
    it('Minutes == Hours', () => expect(isEqual(minutes(60 * 47 * -1), hours(-47))).to.be.true);
    it('Minutes != Hours', () => expect(isEqual(minutes(60 * 47 * -1 - 1), hours(-47))).to.be.false);

    it('Hours == Nanoseconds', () => expect(isEqual(hours(2501), nanoseconds(2501e9 * 60 * 60))).to.be.true);
    it('Hours != Nanoseconds', () => expect(isEqual(hours(2501), nanoseconds(2501e9 * 60 * 60 + 1))).to.be.false);
    it('Hours == Microseconds', () => expect(isEqual(hours(-47), microseconds(-47e6 * 60 * 60))).to.be.true);
    it('Hours != Microseconds', () => expect(isEqual(hours(47), microseconds(47e6 * 60 * 60 + 1))).to.be.false);
    it('Hours == Millseconds', () => expect(isEqual(hours(-4), milliseconds(-4e3 * 60 * 60))).to.be.true);
    it('Hours != Milliseconds', () => expect(isEqual(hours(4), milliseconds(4e3 * 60 * 60 + 1))).to.be.false);
    it('Hours == Seconds', () => expect(isEqual(hours(8), seconds(8 * 60 * 60))).to.be.true);
    it('Hours != Seconds', () => expect(isEqual(hours(8), seconds(8 * 60 * 60 + 1))).to.be.false);
    it('Hours == Minutes', () => expect(isEqual(hours(-1), minutes(-60))).to.be.true);
    it('Hours != Minutes', () => expect(isEqual(hours(-1), minutes(-59))).to.be.false);
    it('Hours == Hours', () => expect(isEqual(hours(1000), hours(1000))).to.be.true);
    it('Hours != Hours', () => expect(isEqual(hours(140000000000), hours(140000000001))).to.be.false);
  });
});
