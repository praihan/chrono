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
  Unit,
} from '../../src/chrono';

const {
  nanoseconds,
  microseconds,
  milliseconds,
  seconds,
  minutes,
  hours,

  roundTo,
} = Duration;

describe('Duration.roundTo', () => {
  describe('with nanoseconds', () => {
    it('can round from nanoseconds', () => {
      const dur: Nanoseconds = roundTo(Unit.Nanosecond, nanoseconds(7e3));
      expect(dur.unit).to.equal(Unit.Nanosecond);
      expect(dur.count).to.equal(7e3);
    });
    it('can round from microseconds', () => {
      const dur: Nanoseconds = roundTo(Unit.Nanosecond, microseconds(7e3));
      expect(dur.unit).to.equal(Unit.Nanosecond);
      expect(dur.count).to.equal(7e6);
    });
    it('can round from milliseconds', () => {
      const dur: Nanoseconds = roundTo(Unit.Nanosecond, milliseconds(7));
      expect(dur.unit).to.equal(Unit.Nanosecond);
      expect(dur.count).to.equal(7e6);
    });
    it('can round from seconds', () => {
      const dur: Nanoseconds = roundTo(Unit.Nanosecond, seconds(7));
      expect(dur.unit).to.equal(Unit.Nanosecond);
      expect(dur.count).to.equal(7e9);
    });
    it('can round from minutes', () => {
      const dur: Nanoseconds = roundTo(Unit.Nanosecond, minutes(7));
      expect(dur.unit).to.equal(Unit.Nanosecond);
      expect(dur.count).to.equal(60 * 7e9);
    });
    it('can round from hours', () => {
      const dur: Nanoseconds = roundTo(Unit.Nanosecond, hours(7));
      expect(dur.unit).to.equal(Unit.Nanosecond);
      expect(dur.count).to.equal(60 * 60 * 7e9);
    });
  });

  describe('with microseconds', () => {
    it('can round from nanoseconds', () => {
      const dur: Microseconds = roundTo(Unit.Microsecond, nanoseconds(3e3 + 5e2));
      expect(dur.unit).to.equal(Unit.Microsecond);
      expect(dur.count).to.equal(4);
    });
    it('can round from microseconds', () => {
      const dur: Microseconds = roundTo(Unit.Microsecond, microseconds(3e3));
      expect(dur.unit).to.equal(Unit.Microsecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can round from milliseconds', () => {
      const dur: Microseconds = roundTo(Unit.Microsecond, milliseconds(3));
      expect(dur.unit).to.equal(Unit.Microsecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can round from seconds', () => {
      const dur: Microseconds = roundTo(Unit.Microsecond, seconds(-3));
      expect(dur.unit).to.equal(Unit.Microsecond);
      expect(dur.count).to.equal(-3e6);
    });
    it('can round from minutes', () => {
      const dur: Microseconds = roundTo(Unit.Microsecond, minutes(4));
      expect(dur.unit).to.equal(Unit.Microsecond);
      expect(dur.count).to.equal(60 * 4e6);
    });
    it('can round from hours', () => {
      const dur: Microseconds = roundTo(Unit.Microsecond, hours(4));
      expect(dur.unit).to.equal(Unit.Microsecond);
      expect(dur.count).to.equal(60 * 60 * 4e6);
    });
  });

  describe('with milliseconds', () => {
    it('can round from nanoseconds', () => {
      const dur: Milliseconds = roundTo(Unit.Millisecond, nanoseconds(1e6 + 5e5 - 1));
      expect(dur.unit).to.equal(Unit.Millisecond);
      expect(dur.count).to.equal(1);
    });
    it('can round from microseconds', () => {
      const dur: Milliseconds = roundTo(Unit.Millisecond, microseconds(-3));
      expect(dur.unit).to.equal(Unit.Millisecond);
      expect(dur.count).to.equal(0);
    });
    it('can round from milliseconds', () => {
      const dur: Milliseconds = roundTo(Unit.Millisecond, milliseconds(3));
      expect(dur.unit).to.equal(Unit.Millisecond);
      expect(dur.count).to.equal(3);
    });
    it('can round from seconds', () => {
      const dur: Milliseconds = roundTo(Unit.Millisecond, seconds(3));
      expect(dur.unit).to.equal(Unit.Millisecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can round from minutes', () => {
      const dur: Milliseconds = roundTo(Unit.Millisecond, minutes(-3));
      expect(dur.unit).to.equal(Unit.Millisecond);
      expect(dur.count).to.equal(60 * -3e3);
    });
    it('can round from hours', () => {
      const dur: Milliseconds = roundTo(Unit.Millisecond, hours(3));
      expect(dur.unit).to.equal(Unit.Millisecond);
      expect(dur.count).to.equal(60 * 60 * 3e3);
    });
  });

  describe('with seconds', () => {
    it('can round from nanoseconds', () => {
      const dur: Seconds = roundTo(Unit.Second, nanoseconds(3.5e9));
      expect(dur.unit).to.equal(Unit.Second);
      expect(dur.count).to.equal(4);
    });
    it('can round from microseconds', () => {
      const dur: Seconds = roundTo(Unit.Second, microseconds(9999999999500));
      expect(dur.unit).to.equal(Unit.Second);
      expect(dur.count).to.equal(10000000);
    });
    it('can round from milliseconds', () => {
      const dur: Seconds = roundTo(Unit.Second, milliseconds(9999999999499));
      expect(dur.unit).to.equal(Unit.Second);
      expect(dur.count).to.equal(9999999999);
    });
    it('can round from seconds', () => {
      const dur: Seconds = roundTo(Unit.Second, seconds(7));
      expect(dur.unit).to.equal(Unit.Second);
      expect(dur.count).to.equal(7);
    });
    it('can round from minutes', () => {
      const dur: Seconds = roundTo(Unit.Second, minutes(3));
      expect(dur.unit).to.equal(Unit.Second);
      expect(dur.count).to.equal(60 * 3);
    });
    it('can round from hours', () => {
      const dur: Seconds = roundTo(Unit.Second, hours(8));
      expect(dur.unit).to.equal(Unit.Second);
      expect(dur.count).to.equal(60 * 60 * 8);
    });
  });

  describe('with minutes', () => {
    it('can round from nanoseconds', () => {
      const dur: Minutes = roundTo(Unit.Minute, nanoseconds(2 * 60e9));
      expect(dur.unit).to.equal(Unit.Minute);
      expect(dur.count).to.equal(2);
    });
    it('can round from microseconds', () => {
      const dur: Minutes = roundTo(Unit.Minute, microseconds(30e6 + 1));
      expect(dur.unit).to.equal(Unit.Minute);
      expect(dur.count).to.equal(1);
    });
    it('can round from milliseconds', () => {
      const dur: Minutes = roundTo(Unit.Minute, milliseconds(30e3 - 1));
      expect(dur.unit).to.equal(Unit.Minute);
      expect(dur.count).to.equal(0);
    });
    it('can round from seconds', () => {
      const dur: Minutes = roundTo(Unit.Minute, seconds(-30));
      expect(dur.unit).to.equal(Unit.Minute);
      expect(dur.count).to.equal(0);
    });
    it('can round from minutes', () => {
      const dur: Minutes = roundTo(Unit.Minute, minutes(4));
      expect(dur.unit).to.equal(Unit.Minute);
      expect(dur.count).to.equal(4);
    });
    it('can round from hours', () => {
      const dur: Minutes = roundTo(Unit.Minute, hours(4));
      expect(dur.unit).to.equal(Unit.Minute);
      expect(dur.count).to.equal(60 * 4);
    });
  });

  describe('with hours', () => {
    it('can round from nanoseconds', () => {
      const dur: Hours = roundTo(Unit.Hour, nanoseconds(120 * 60e9));
      expect(dur.unit).to.equal(Unit.Hour);
      expect(dur.count).to.equal(2);
    });
    it('can round from microseconds', () => {
      const dur: Hours = roundTo(Unit.Hour, microseconds(120 * 60e6 - 1));
      expect(dur.unit).to.equal(Unit.Hour);
      expect(dur.count).to.equal(2);
    });
    it('can round from milliseconds', () => {
      const dur: Hours = roundTo(Unit.Hour, milliseconds(60 * 60e3));
      expect(dur.unit).to.equal(Unit.Hour);
      expect(dur.count).to.equal(1);
    });
    it('can round from seconds', () => {
      const dur: Hours = roundTo(Unit.Hour, seconds(-1799));
      expect(dur.unit).to.equal(Unit.Hour);
      expect(dur.count).to.equal(0);
    });
    it('can round from minutes', () => {
      const dur: Hours = roundTo(Unit.Hour, minutes(-151));
      expect(dur.unit).to.equal(Unit.Hour);
      expect(dur.count).to.equal(-3);
    });
    it('can round from hours', () => {
      const dur: Hours = roundTo(Unit.Hour, hours(3));
      expect(dur.unit).to.equal(Unit.Hour);
      expect(dur.count).to.equal(3);
    });
  });
});
