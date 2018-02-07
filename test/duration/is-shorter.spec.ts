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

  isShorter,
} = Duration;

describe('Duration.[comparison]', () => {
  describe('isShorter', () => {
    it('Nanoseconds == Nanoseconds', () => expect(isShorter(nanoseconds(101), nanoseconds(101))).to.be.false);
    it('Nanoseconds > Nanoseconds', () => expect(isShorter(nanoseconds(101), nanoseconds(100))).to.be.false);
    it('Nanoseconds < Nanoseconds', () => expect(isShorter(nanoseconds(101), nanoseconds(102))).to.be.true);
    it('Nanoseconds == Microseconds', () => expect(isShorter(nanoseconds(1000), microseconds(1))).to.be.false);
    it('Nanoseconds > Microseconds', () => expect(isShorter(nanoseconds(1001), microseconds(1))).to.be.false);
    it('Nanoseconds < Microseconds', () => expect(isShorter(nanoseconds(999), microseconds(1))).to.be.true);
    it('Nanoseconds == Milliseconds', () => expect(isShorter(nanoseconds(-1e6), milliseconds(-1))).to.be.false);
    it('Nanoseconds > Milliseconds', () => expect(isShorter(nanoseconds(-1e6 + 1), milliseconds(-1))).to.be.false);
    it('Nanoseconds < Milliseconds', () => expect(isShorter(nanoseconds(-1e6 - 1), milliseconds(-1))).to.be.true);
    it('Nanoseconds == Seconds', () => expect(isShorter(nanoseconds(100e9), seconds(100))).to.be.false);
    it('Nanoseconds > Seconds', () => expect(isShorter(nanoseconds(100e9 + 1), seconds(100))).to.be.false);
    it('Nanoseconds < Seconds', () => expect(isShorter(nanoseconds(100e9 - 1), seconds(100))).to.be.true);
    it('Nanoseconds == Minutes', () => expect(isShorter(nanoseconds(60 * -2e9), minutes(-2))).to.be.false);
    it('Nanoseconds > Minutes', () => expect(isShorter(nanoseconds(60 * -2e9 + 1), minutes(-2))).to.be.false);
    it('Nanoseconds < Minutes', () => expect(isShorter(nanoseconds(60 * -2e9 - 1), minutes(-2))).to.be.true);
    it('Nanoseconds == Hours', () => expect(isShorter(nanoseconds(60 * 60 * 4e9), hours(4))).to.be.false);
    it('Nanoseconds > Hours', () => expect(isShorter(nanoseconds(60 * 60 * 4e9 + 1), hours(4))).to.be.false);
    it('Nanoseconds < Hours', () => expect(isShorter(nanoseconds(60 * 60 * 4e9 - 1), hours(4))).to.be.true);

    it('Microseconds == Nanoseconds', () => expect(isShorter(microseconds(1), nanoseconds(1000))).to.be.false);
    it('Microseconds > Nanoseconds', () => expect(isShorter(microseconds(1), nanoseconds(999))).to.be.false);
    it('Microseconds < Nanoseconds', () => expect(isShorter(microseconds(1), nanoseconds(1001))).to.be.true);
    it('Microseconds == Microseconds', () => expect(isShorter(microseconds(1000), microseconds(1000))).to.be.false);
    it('Microseconds > Microseconds', () => expect(isShorter(microseconds(1000), microseconds(999))).to.be.false);
    it('Microseconds < Microseconds', () => expect(isShorter(microseconds(1000), microseconds(1001))).to.be.true);
    it('Microseconds == Milliseconds', () => expect(isShorter(microseconds(-1e3), milliseconds(-1))).to.be.false);
    it('Microseconds > Milliseconds', () => expect(isShorter(microseconds(-1e3 + 1), milliseconds(-1))).to.be.false);
    it('Microseconds < Milliseconds', () => expect(isShorter(microseconds(-1e3 - 1), milliseconds(-1))).to.be.true);
    it('Microseconds == Seconds', () => expect(isShorter(microseconds(100e6), seconds(100))).to.be.false);
    it('Microseconds > Seconds', () => expect(isShorter(microseconds(100e6 + 1), seconds(100))).to.be.false);
    it('Microseconds < Seconds', () => expect(isShorter(microseconds(100e6 - 1), seconds(100))).to.be.true);
    it('Microseconds == Minutes', () => expect(isShorter(microseconds(60 * -2e6), minutes(-2))).to.be.false);
    it('Microseconds > Minutes', () => expect(isShorter(microseconds(60 * -2e6 + 1), minutes(-2))).to.be.false);
    it('Microseconds < Minutes', () => expect(isShorter(microseconds(60 * -2e6 - 1), minutes(-2))).to.be.true);
    it('Microseconds == Hours', () => expect(isShorter(microseconds(60 * 60 * 4e6), hours(4))).to.be.false);
    it('Microseconds > Hours', () => expect(isShorter(microseconds(60 * 60 * 4e6 + 1), hours(4))).to.be.false);
    it('Microseconds < Hours', () => expect(isShorter(microseconds(60 * 60 * 4e6 - 1), hours(4))).to.be.true);

    it('Milliseconds == Nanoseconds', () => expect(isShorter(milliseconds(1), nanoseconds(1e6))).to.be.false);
    it('Milliseconds > Nanoseconds', () => expect(isShorter(milliseconds(1), nanoseconds(1e6 - 1))).to.be.false);
    it('Milliseconds < Nanoseconds', () => expect(isShorter(milliseconds(1), nanoseconds(1e6 + 1))).to.be.true);
    it('Milliseconds == Microseconds', () => expect(isShorter(milliseconds(1), microseconds(1000))).to.be.false);
    it('Milliseconds > Microseconds', () => expect(isShorter(milliseconds(1), microseconds(999))).to.be.false);
    it('Milliseconds < Microseconds', () => expect(isShorter(milliseconds(1), microseconds(1001))).to.be.true);
    it('Milliseconds == Milliseconds', () => expect(isShorter(milliseconds(-1000), milliseconds(-1000))).to.be.false);
    it('Milliseconds > Milliseconds', () => expect(isShorter(milliseconds(-999), milliseconds(-1000))).to.be.false);
    it('Milliseconds < Milliseconds', () => expect(isShorter(milliseconds(-1001), milliseconds(-1000))).to.be.true);
    it('Milliseconds == Seconds', () => expect(isShorter(milliseconds(100e3), seconds(100))).to.be.false);
    it('Milliseconds > Seconds', () => expect(isShorter(milliseconds(100e3 + 1), seconds(100))).to.be.false);
    it('Milliseconds < Seconds', () => expect(isShorter(milliseconds(100e3 - 1), seconds(100))).to.be.true);
    it('Milliseconds == Minutes', () => expect(isShorter(milliseconds(60 * -2e3), minutes(-2))).to.be.false);
    it('Milliseconds > Minutes', () => expect(isShorter(milliseconds(60 * -2e3 + 1), minutes(-2))).to.be.false);
    it('Milliseconds < Minutes', () => expect(isShorter(milliseconds(60 * -2e3 - 1), minutes(-2))).to.be.true);
    it('Milliseconds == Hours', () => expect(isShorter(milliseconds(60 * 60 * 4e3), hours(4))).to.be.false);
    it('Milliseconds > Hours', () => expect(isShorter(milliseconds(60 * 60 * 4e3 + 1), hours(4))).to.be.false);
    it('Milliseconds < Hours', () => expect(isShorter(milliseconds(60 * 60 * 4e3 - 1), hours(4))).to.be.true);

    it('Seconds == Nanoseconds', () => expect(isShorter(seconds(1), nanoseconds(1e9))).to.be.false);
    it('Seconds > Nanoseconds', () => expect(isShorter(seconds(1), nanoseconds(1e9 - 1))).to.be.false);
    it('Seconds < Nanoseconds', () => expect(isShorter(seconds(1), nanoseconds(1e9 + 1))).to.be.true);
    it('Seconds == Microseconds', () => expect(isShorter(seconds(1), microseconds(1e6))).to.be.false);
    it('Seconds > Microseconds', () => expect(isShorter(seconds(1), microseconds(1e6 - 1))).to.be.false);
    it('Seconds < Microseconds', () => expect(isShorter(seconds(1), microseconds(1e6 + 1))).to.be.true);
    it('Seconds == Milliseconds', () => expect(isShorter(seconds(-1), milliseconds(-1000))).to.be.false);
    it('Seconds > Milliseconds', () => expect(isShorter(seconds(-1), milliseconds(-1001))).to.be.false);
    it('Seconds < Milliseconds', () => expect(isShorter(seconds(-1), milliseconds(-999))).to.be.true);
    it('Seconds == Seconds', () => expect(isShorter(seconds(100e3), seconds(100e3))).to.be.false);
    it('Seconds > Seconds', () => expect(isShorter(seconds(100e3 + 1), seconds(100e3))).to.be.false);
    it('Seconds < Seconds', () => expect(isShorter(seconds(100e3 - 1), seconds(100e3))).to.be.true);
    it('Seconds == Minutes', () => expect(isShorter(seconds(60 * -2), minutes(-2))).to.be.false);
    it('Seconds > Minutes', () => expect(isShorter(seconds(60 * -2 + 1), minutes(-2))).to.be.false);
    it('Seconds < Minutes', () => expect(isShorter(seconds(60 * -2 - 1), minutes(-2))).to.be.true);
    it('Seconds == Hours', () => expect(isShorter(seconds(60 * 60 * 4), hours(4))).to.be.false);
    it('Seconds > Hours', () => expect(isShorter(seconds(60 * 60 * 4 + 1), hours(4))).to.be.false);
    it('Seconds < Hours', () => expect(isShorter(seconds(60 * 60 * 4 - 1), hours(4))).to.be.true);

    it('Minutes == Nanoseconds', () => expect(isShorter(minutes(8), nanoseconds(60 * 8e9))).to.be.false);
    it('Minutes > Nanoseconds', () => expect(isShorter(minutes(8), nanoseconds(60 * 8e9 - 1))).to.be.false);
    it('Minutes < Nanoseconds', () => expect(isShorter(minutes(8), nanoseconds(60 * 8e9 + 1))).to.be.true);
    it('Minutes == Microseconds', () => expect(isShorter(minutes(1), microseconds(60 * 1e6))).to.be.false);
    it('Minutes > Microseconds', () => expect(isShorter(minutes(1), microseconds(60 * 1e6 - 1))).to.be.false);
    it('Minutes < Microseconds', () => expect(isShorter(minutes(1), microseconds(60 * 1e6 + 1))).to.be.true);
    it('Minutes == Milliseconds', () => expect(isShorter(minutes(-1), milliseconds(60 * -1000))).to.be.false);
    it('Minutes > Milliseconds', () => expect(isShorter(minutes(-1), milliseconds(60 * -1001))).to.be.false);
    it('Minutes < Milliseconds', () => expect(isShorter(minutes(-1), milliseconds(60 * -999))).to.be.true);
    it('Minutes == Seconds', () => expect(isShorter(minutes(100e3), seconds(60 * 100e3))).to.be.false);
    it('Minutes > Seconds', () => expect(isShorter(minutes(100e3), seconds(60 * 100e3 - 1))).to.be.false);
    it('Minutes < Seconds', () => expect(isShorter(minutes(100e3), seconds(60 * 100e3 + 1))).to.be.true);
    it('Minutes == Minutes', () => expect(isShorter(minutes(-200), minutes(-200))).to.be.false);
    it('Minutes > Minutes', () => expect(isShorter(minutes(-200), minutes(-201))).to.be.false);
    it('Minutes < Minutes', () => expect(isShorter(minutes(-200), minutes(-199))).to.be.true);
    it('Minutes == Hours', () => expect(isShorter(minutes(60 * 4), hours(4))).to.be.false);
    it('Minutes > Hours', () => expect(isShorter(minutes(60 * 4 + 1), hours(4))).to.be.false);
    it('Minutes < Hours', () => expect(isShorter(minutes(60 * 4 - 1), hours(4))).to.be.true);

    it('Hours == Nanoseconds', () => expect(isShorter(hours(8), nanoseconds(60 * 60 * 8e9))).to.be.false);
    it('Hours > Nanoseconds', () => expect(isShorter(hours(8), nanoseconds(60 * 60 * 8e9 - 1))).to.be.false);
    it('Hours < Nanoseconds', () => expect(isShorter(hours(8), nanoseconds(60 * 60 * 8e9 + 1))).to.be.true);
    it('Hours == Microseconds', () => expect(isShorter(hours(1), microseconds(60 * 60 * 1e6))).to.be.false);
    it('Hours > Microseconds', () => expect(isShorter(hours(1), microseconds(60 * 60 * 1e6 - 1))).to.be.false);
    it('Hours < Microseconds', () => expect(isShorter(hours(1), microseconds(60 * 60 * 1e6 + 1))).to.be.true);
    it('Hours == Milliseconds', () => expect(isShorter(hours(-1), milliseconds(60 * 60 * -1000))).to.be.false);
    it('Hours > Milliseconds', () => expect(isShorter(hours(-1), milliseconds(60 * 60 * -1001))).to.be.false);
    it('Hours < Milliseconds', () => expect(isShorter(hours(-1), milliseconds(60 * 60 * -999))).to.be.true);
    it('Hours == Seconds', () => expect(isShorter(hours(100e3), seconds(60 * 60 * 100e3))).to.be.false);
    it('Hours > Seconds', () => expect(isShorter(hours(100e3), seconds(60 * 60 * 100e3 - 1))).to.be.false);
    it('Hours < Seconds', () => expect(isShorter(hours(100e3), seconds(60 * 60 * 100e3 + 1))).to.be.true);
    it('Hours == Minutes', () => expect(isShorter(hours(-200), minutes(-200 * 60))).to.be.false);
    it('Hours > Minutes', () => expect(isShorter(hours(-200), minutes(-200 * 60 - 1))).to.be.false);
    it('Hours < Minutes', () => expect(isShorter(hours(-200), minutes(-200 * 60 + 1))).to.be.true);
    it('Hours == Hours', () => expect(isShorter(hours(6000), hours(6000))).to.be.false);
    it('Hours > Hours', () => expect(isShorter(hours(6000), hours(5999))).to.be.false);
    it('Hours < Hours', () => expect(isShorter(hours(6000), hours(6001))).to.be.true);
  });
});
