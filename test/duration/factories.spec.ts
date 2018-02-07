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
  clone,
} = Duration;

describe('Duration.[factory]', () => {
  describe('Nanoseconds', () => {
    it('correctly creates from count', () => {
      let dur: Nanoseconds;
      dur = nanoseconds(2);
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(2);
      dur = nanoseconds(Number.MAX_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(Number.MAX_SAFE_INTEGER);
      dur = nanoseconds(Number.MIN_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(Number.MIN_SAFE_INTEGER);
    });
    it('correctly creates from nanoseconds', () => {
      const dur: Nanoseconds = nanoseconds(nanoseconds(2));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from microseconds', () => {
      const dur: Nanoseconds = nanoseconds(microseconds(2));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(2e3);
    });
    it('correctly creates from milliseconds', () => {
      const dur: Nanoseconds = nanoseconds(milliseconds(2));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(2e6);
    });
    it('correctly creates from seconds', () => {
      const dur: Nanoseconds = nanoseconds(seconds(2));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(2e9);
    });
    it('correctly creates from minutes', () => {
      const dur: Nanoseconds = nanoseconds(minutes(2));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(2e9 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Nanoseconds = nanoseconds(hours(2));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(2e9 * 60 * 60);
    });
    it('correctly clones', () => {
      const dur: Nanoseconds = clone(nanoseconds(2));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(2);
    });
    it('throws unless count is integral', () => {
      expect(() => nanoseconds(1.5)).to.throw(TypeError);
    });
    it('throws if out of range', () => {
      expect(() => nanoseconds(Number.MAX_SAFE_INTEGER + 1)).to.throw(RangeError);
      expect(() => nanoseconds(Number.MIN_SAFE_INTEGER - 1)).to.throw(RangeError);
    });
  });

  describe('Microseconds', () => {
    it('correctly creates from count', () => {
      let dur: Microseconds;
      dur = microseconds(2);
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(2);
      dur = microseconds(Number.MAX_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(Number.MAX_SAFE_INTEGER);
      dur = microseconds(Number.MIN_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(Number.MIN_SAFE_INTEGER);
    });
    it('correctly creates from microseconds', () => {
      const dur: Microseconds = microseconds(microseconds(2));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from milliseconds', () => {
      const dur: Microseconds = microseconds(milliseconds(2));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(2e3);
    });
    it('correctly creates from seconds', () => {
      const dur: Microseconds = microseconds(seconds(2));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(2e6);
    });
    it('correctly creates from minutes', () => {
      const dur: Microseconds = microseconds(minutes(2));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(2e6 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Microseconds = microseconds(hours(2));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(2e6 * 60 * 60);
    });
    it('correctly clones', () => {
      const dur: Microseconds = clone(microseconds(-2));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(-2);
    });
    it('throws unless count is integral', () => {
      expect(() => microseconds(1.5)).to.throw(TypeError);
    });
    it('throws if out of range', () => {
      expect(() => microseconds(Number.MAX_SAFE_INTEGER + 1)).to.throw(RangeError);
      expect(() => microseconds(Number.MIN_SAFE_INTEGER - 1)).to.throw(RangeError);
    });
  });

  describe('Milliseconds', () => {
    it('correctly creates from count', () => {
      let dur: Milliseconds;
      dur = milliseconds(2);
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(2);
      dur = milliseconds(Number.MAX_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(Number.MAX_SAFE_INTEGER);
      dur = milliseconds(Number.MIN_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(Number.MIN_SAFE_INTEGER);
    });
    it('correctly creates from milliseconds', () => {
      const dur: Milliseconds = milliseconds(milliseconds(2));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from seconds', () => {
      const dur: Milliseconds = milliseconds(seconds(2));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(2e3);
    });
    it('correctly creates from minutes', () => {
      const dur: Milliseconds = milliseconds(minutes(2));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(2e3 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Milliseconds = milliseconds(hours(2));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(2e3 * 60 * 60);
    });
    it('correctly clones', () => {
      const dur: Milliseconds = clone(milliseconds(2));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(2);
    });
    it('throws unless count is integral', () => {
      expect(() => milliseconds(1.5)).to.throw(TypeError);
    });
    it('throws if out of range', () => {
      expect(() => milliseconds(Number.MAX_SAFE_INTEGER + 1)).to.throw(RangeError);
      expect(() => milliseconds(Number.MIN_SAFE_INTEGER - 1)).to.throw(RangeError);
    });
  });

  describe('Seconds', () => {
    it('correctly creates from count', () => {
      let dur: Seconds;
      dur = seconds(2);
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(2);
      dur = seconds(Number.MAX_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(Number.MAX_SAFE_INTEGER);
      dur = seconds(Number.MIN_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(Number.MIN_SAFE_INTEGER);
    });
    it('correctly creates from seconds', () => {
      const dur: Seconds = seconds(seconds(2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from minutes', () => {
      const dur: Seconds = seconds(minutes(2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(2 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Seconds = seconds(hours(2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(2 * 60 * 60);
    });
    it('correctly clones', () => {
      const dur: Seconds = clone(seconds(-2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(-2);
    });
    it('throws unless count is integral', () => {
      expect(() => seconds(1.5)).to.throw(TypeError);
    });
    it('throws if out of range', () => {
      expect(() => seconds(Number.MAX_SAFE_INTEGER + 1)).to.throw(RangeError);
      expect(() => seconds(Number.MIN_SAFE_INTEGER - 1)).to.throw(RangeError);
    });
  });

  describe('Minutes', () => {
    it('correctly creates from count', () => {
      let dur: Minutes;
      dur = minutes(2);
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(2);
      dur = minutes(Number.MAX_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(Number.MAX_SAFE_INTEGER);
      dur = minutes(Number.MIN_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(Number.MIN_SAFE_INTEGER);
    });
    it('correctly creates from minutes', () => {
      const dur: Minutes = minutes(minutes(2));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from hours', () => {
      const dur: Minutes = minutes(hours(2));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(2 * 60);
    });
    it('correctly clones', () => {
      const dur: Minutes = clone(minutes(2));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(2);
    });
    it('throws unless count is integral', () => {
      expect(() => minutes(1.5)).to.throw(TypeError);
    });
    it('throws if out of range', () => {
      expect(() => minutes(Number.MAX_SAFE_INTEGER + 1)).to.throw(RangeError);
      expect(() => minutes(Number.MIN_SAFE_INTEGER - 1)).to.throw(RangeError);
    });
  });

  describe('Hours', () => {
    it('correctly creates from count', () => {
      let dur: Hours;
      dur = hours(2);
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(2);
      dur = hours(Number.MAX_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(Number.MAX_SAFE_INTEGER);
      dur = hours(Number.MIN_SAFE_INTEGER);
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(Number.MIN_SAFE_INTEGER);
    });
    it('correctly creates from hours', () => {
      const dur: Hours = hours(hours(2));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(2);
    });
    it('correctly clones', () => {
      const dur: Hours = clone(hours(-2));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(-2);
    });
    it('throws unless count is integral', () => {
      expect(() => hours(1.5)).to.throw(TypeError);
    });
    it('throws if out of range', () => {
      expect(() => hours(Number.MAX_SAFE_INTEGER + 1)).to.throw(RangeError);
      expect(() => hours(Number.MIN_SAFE_INTEGER - 1)).to.throw(RangeError);
    });
  });
});
