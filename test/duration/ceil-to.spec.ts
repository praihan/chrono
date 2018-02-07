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

  ceilTo,
} = Duration;

describe('Duration.ceilTo', () => {
  describe('with nanoseconds', () => {
    it('can ceil from nanoseconds', () => {
      const dur: Nanoseconds = ceilTo(UnitSize.Nanosecond, nanoseconds(7e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3);
    });
    it('can ceil from microseconds', () => {
      const dur: Nanoseconds = ceilTo(UnitSize.Nanosecond, microseconds(7e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e6);
    });
    it('can ceil from milliseconds', () => {
      const dur: Nanoseconds = ceilTo(UnitSize.Nanosecond, milliseconds(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e6);
    });
    it('can ceil from seconds', () => {
      const dur: Nanoseconds = ceilTo(UnitSize.Nanosecond, seconds(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e9);
    });
    it('can ceil from minutes', () => {
      const dur: Nanoseconds = ceilTo(UnitSize.Nanosecond, minutes(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 7e9);
    });
    it('can ceil from hours', () => {
      const dur: Nanoseconds = ceilTo(UnitSize.Nanosecond, hours(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 60 * 7e9);
    });
  });

  describe('with microseconds', () => {
    it('can ceil from nanoseconds', () => {
      const dur: Microseconds = ceilTo(UnitSize.Microsecond, nanoseconds(3e3 + 1));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(4);
    });
    it('can ceil from microseconds', () => {
      const dur: Microseconds = ceilTo(UnitSize.Microsecond, microseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can ceil from milliseconds', () => {
      const dur: Microseconds = ceilTo(UnitSize.Microsecond, milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can ceil from seconds', () => {
      const dur: Microseconds = ceilTo(UnitSize.Microsecond, seconds(-3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(-3e6);
    });
    it('can ceil from minutes', () => {
      const dur: Microseconds = ceilTo(UnitSize.Microsecond, minutes(4));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(60 * 4e6);
    });
    it('can ceil from hours', () => {
      const dur: Microseconds = ceilTo(UnitSize.Microsecond, hours(4));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(60 * 60 * 4e6);
    });
  });

  describe('with milliseconds', () => {
    it('can ceil from nanoseconds', () => {
      const dur: Milliseconds = ceilTo(UnitSize.Millisecond, nanoseconds(1e6 + 1));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(2);
    });
    it('can ceil from microseconds', () => {
      const dur: Milliseconds = ceilTo(UnitSize.Millisecond, microseconds(-3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(0);
    });
    it('can ceil from milliseconds', () => {
      const dur: Milliseconds = ceilTo(UnitSize.Millisecond, milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(3);
    });
    it('can ceil from seconds', () => {
      const dur: Milliseconds = ceilTo(UnitSize.Millisecond, seconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can ceil from minutes', () => {
      const dur: Milliseconds = ceilTo(UnitSize.Millisecond, minutes(-3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * -3e3);
    });
    it('can ceil from hours', () => {
      const dur: Milliseconds = ceilTo(UnitSize.Millisecond, hours(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * 60 * 3e3);
    });
  });

  describe('with seconds', () => {
    it('can ceil from nanoseconds', () => {
      const dur: Seconds = ceilTo(UnitSize.Second, nanoseconds(3.1e9));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(4);
    });
    it('can ceil from microseconds', () => {
      const dur: Seconds = ceilTo(UnitSize.Second, microseconds(3e6 - 5e3));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(3);
    });
    it('can ceil from milliseconds', () => {
      const dur: Seconds = ceilTo(UnitSize.Second, milliseconds(-14e3 + 1));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(-13);
    });
    it('can ceil from seconds', () => {
      const dur: Seconds = ceilTo(UnitSize.Second, seconds(7));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(7);
    });
    it('can ceil from minutes', () => {
      const dur: Seconds = ceilTo(UnitSize.Second, minutes(3));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(60 * 3);
    });
    it('can ceil from hours', () => {
      const dur: Seconds = ceilTo(UnitSize.Second, hours(8));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(60 * 60 * 8);
    });
  });

  describe('with minutes', () => {
    it('can ceil from nanoseconds', () => {
      const dur: Minutes = ceilTo(UnitSize.Minute, nanoseconds(2 * 60e9));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(2);
    });
    it('can ceil from microseconds', () => {
      const dur: Minutes = ceilTo(UnitSize.Minute, microseconds(30e6 + 1));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(1);
    });
    it('can ceil from milliseconds', () => {
      const dur: Minutes = ceilTo(UnitSize.Minute, milliseconds(30e3));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(1);
    });
    it('can ceil from seconds', () => {
      const dur: Minutes = ceilTo(UnitSize.Minute, seconds(-30));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(0);
    });
    it('can ceil from minutes', () => {
      const dur: Minutes = ceilTo(UnitSize.Minute, minutes(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(4);
    });
    it('can ceil from hours', () => {
      const dur: Minutes = ceilTo(UnitSize.Minute, hours(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(60 * 4);
    });
  });

  describe('with hours', () => {
    it('can ceil from nanoseconds', () => {
      const dur: Hours = ceilTo(UnitSize.Hour, nanoseconds(120 * 60e9));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(2);
    });
    it('can ceil from microseconds', () => {
      const dur: Hours = ceilTo(UnitSize.Hour, microseconds(120 * 60e6 - 1));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(2);
    });
    it('can ceil from milliseconds', () => {
      const dur: Hours = ceilTo(UnitSize.Hour, milliseconds(60 * 60e3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(1);
    });
    it('can ceil from seconds', () => {
      const dur: Hours = ceilTo(UnitSize.Hour, seconds(-1));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(0);
    });
    it('can ceil from minutes', () => {
      const dur: Hours = ceilTo(UnitSize.Hour, minutes(-150));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(-2);
    });
    it('can ceil from hours', () => {
      const dur: Hours = ceilTo(UnitSize.Hour, hours(3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(3);
    });
  });
});
