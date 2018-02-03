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
  hours
} = Duration;

describe('Duration.roundTo', () => {
  describe('with nanoseconds', () => {
    it('can round from nanoseconds', () => {
      const dur: Nanoseconds = Duration.roundTo(UnitSize.Nanosecond, nanoseconds(7e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3);
    });
    it('can round from microseconds', () => {
      const dur: Nanoseconds = Duration.roundTo(UnitSize.Nanosecond, microseconds(7e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e6);
    });
    it('can round from milliseconds', () => {
      const dur: Nanoseconds = Duration.roundTo(UnitSize.Nanosecond, milliseconds(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e6);
    });
    it('can round from seconds', () => {
      const dur: Nanoseconds = Duration.roundTo(UnitSize.Nanosecond, seconds(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e9);
    });
    it('can round from minutes', () => {
      const dur: Nanoseconds = Duration.roundTo(UnitSize.Nanosecond, minutes(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 7e9);
    });
    it('can round from hours', () => {
      const dur: Nanoseconds = Duration.roundTo(UnitSize.Nanosecond, hours(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 60 * 7e9);
    });
  });

  describe('with microseconds', () => {
    it('can round from nanoseconds', () => {
      const dur: Microseconds = Duration.roundTo(UnitSize.Microsecond, nanoseconds(3e3 + 5e2));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(4);
    });
    it('can round from microseconds', () => {
      const dur: Microseconds = Duration.roundTo(UnitSize.Microsecond, microseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can round from milliseconds', () => {
      const dur: Microseconds = Duration.roundTo(UnitSize.Microsecond, milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can round from seconds', () => {
      const dur: Microseconds = Duration.roundTo(UnitSize.Microsecond, seconds(-3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(-3e6);
    });
    it('can round from minutes', () => {
      const dur: Microseconds = Duration.roundTo(UnitSize.Microsecond, minutes(4));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(60 * 4e6);
    });
    it('can round from hours', () => {
      const dur: Microseconds = Duration.roundTo(UnitSize.Microsecond, hours(4));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(60 * 60 * 4e6);
    });
  });

  describe('with milliseconds', () => {
    it('can round from nanoseconds', () => {
      const dur: Milliseconds = Duration.roundTo(UnitSize.Millisecond, nanoseconds(1e6 + 5e5 - 1));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(1);
    });
    it('can round from microseconds', () => {
      const dur: Milliseconds = Duration.roundTo(UnitSize.Millisecond, microseconds(-3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(0);
    });
    it('can round from milliseconds', () => {
      const dur: Milliseconds = Duration.roundTo(UnitSize.Millisecond, milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(3);
    });
    it('can round from seconds', () => {
      const dur: Milliseconds = Duration.roundTo(UnitSize.Millisecond, seconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can round from minutes', () => {
      const dur: Milliseconds = Duration.roundTo(UnitSize.Millisecond, minutes(-3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * -3e3);
    });
    it('can round from hours', () => {
      const dur: Milliseconds = Duration.roundTo(UnitSize.Millisecond, hours(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * 60 * 3e3);
    });
  });

  describe('with seconds', () => {
    it('can round from nanoseconds', () => {
      const dur: Seconds = Duration.roundTo(UnitSize.Second, nanoseconds(3.5e9));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(4);
    });
    it('can round from microseconds', () => {
      const dur: Seconds = Duration.roundTo(UnitSize.Second, microseconds(9999999999500000));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(10000000000);
    });
    it('can round from milliseconds', () => {
      const dur: Seconds = Duration.roundTo(UnitSize.Second, milliseconds(9999999999999999499));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(9999999999999999);
    });
    it('can round from seconds', () => {
      const dur: Seconds = Duration.roundTo(UnitSize.Second, seconds(7));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(7);
    });
    it('can round from minutes', () => {
      const dur: Seconds = Duration.roundTo(UnitSize.Second, minutes(3));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(60 * 3);
    });
    it('can round from hours', () => {
      const dur: Seconds = Duration.roundTo(UnitSize.Second, hours(8));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(60 * 60 * 8);
    });
  });

  describe('with minutes', () => {
    it('can round from nanoseconds', () => {
      const dur: Minutes = Duration.roundTo(UnitSize.Minute, nanoseconds(2 * 60e9));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(2);
    });
    it('can round from microseconds', () => {
      const dur: Minutes = Duration.roundTo(UnitSize.Minute, microseconds(30e6 + 1));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(1);
    });
    it('can round from milliseconds', () => {
      const dur: Minutes = Duration.roundTo(UnitSize.Minute, milliseconds(30e3 - 1));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(0);
    });
    it('can round from seconds', () => {
      const dur: Minutes = Duration.roundTo(UnitSize.Minute, seconds(-30));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(0);
    });
    it('can round from minutes', () => {
      const dur: Minutes = Duration.roundTo(UnitSize.Minute, minutes(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(4);
    });
    it('can round from hours', () => {
      const dur: Minutes = Duration.roundTo(UnitSize.Minute, hours(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(60 * 4);
    });
  });

  describe('with hours', () => {
    it('can round from nanoseconds', () => {
      const dur: Hours = Duration.roundTo(UnitSize.Hour, nanoseconds(120 * 60e9));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(2);
    });
    it('can round from microseconds', () => {
      const dur: Hours = Duration.roundTo(UnitSize.Hour, microseconds(120 * 60e6 - 1));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(2);
    });
    it('can round from milliseconds', () => {
      const dur: Hours = Duration.roundTo(UnitSize.Hour, milliseconds(60 * 60e3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(1);
    });
    it('can round from seconds', () => {
      const dur: Hours = Duration.roundTo(UnitSize.Hour, seconds(-1799));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(0);
    });
    it('can round from minutes', () => {
      const dur: Hours = Duration.roundTo(UnitSize.Hour, minutes(-151));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(-3);
    });
    it('can round from hours', () => {
      const dur: Hours = Duration.roundTo(UnitSize.Hour, hours(3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(3);
    });
  });
});
