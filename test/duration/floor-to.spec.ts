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

describe('Duration.floorTo', () => {
  describe('with nanoseconds', () => {
    it('can floor from nanoseconds', () => {
      const dur: Nanoseconds = Duration.floorTo(UnitSize.Nanosecond, nanoseconds(7e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3);
    });
    it('can floor from microseconds', () => {
      const dur: Nanoseconds = Duration.floorTo(UnitSize.Nanosecond, microseconds(7e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e6);
    });
    it('can floor from milliseconds', () => {
      const dur: Nanoseconds = Duration.floorTo(UnitSize.Nanosecond, milliseconds(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e6);
    });
    it('can floor from seconds', () => {
      const dur: Nanoseconds = Duration.floorTo(UnitSize.Nanosecond, seconds(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e9);
    });
    it('can floor from minutes', () => {
      const dur: Nanoseconds = Duration.floorTo(UnitSize.Nanosecond, minutes(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 7e9);
    });
    it('can floor from hours', () => {
      const dur: Nanoseconds = Duration.floorTo(UnitSize.Nanosecond, hours(7));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 60 * 7e9);
    });
  });

  describe('with microseconds', () => {
    it('can floor from nanoseconds', () => {
      const dur: Microseconds = Duration.floorTo(UnitSize.Microsecond, nanoseconds(3e3 + 1));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(3);
    });
    it('can floor from microseconds', () => {
      const dur: Microseconds = Duration.floorTo(UnitSize.Microsecond, microseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can floor from milliseconds', () => {
      const dur: Microseconds = Duration.floorTo(UnitSize.Microsecond, milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can floor from seconds', () => {
      const dur: Microseconds = Duration.floorTo(UnitSize.Microsecond, seconds(-3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(-3e6);
    });
    it('can floor from minutes', () => {
      const dur: Microseconds = Duration.floorTo(UnitSize.Microsecond, minutes(4));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(60 * 4e6);
    });
    it('can floor from hours', () => {
      const dur: Microseconds = Duration.floorTo(UnitSize.Microsecond, hours(4));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(60 * 60 * 4e6);
    });
  });

  describe('with milliseconds', () => {
    it('can floor from nanoseconds', () => {
      const dur: Milliseconds = Duration.floorTo(UnitSize.Millisecond, nanoseconds(1e6 + 1));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(1);
    });
    it('can floor from microseconds', () => {
      const dur: Milliseconds = Duration.floorTo(UnitSize.Millisecond, microseconds(-3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(-1);
    });
    it('can floor from milliseconds', () => {
      const dur: Milliseconds = Duration.floorTo(UnitSize.Millisecond, milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(3);
    });
    it('can floor from seconds', () => {
      const dur: Milliseconds = Duration.floorTo(UnitSize.Millisecond, seconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(3e3);
    });
    it('can floor from minutes', () => {
      const dur: Milliseconds = Duration.floorTo(UnitSize.Millisecond, minutes(-3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * -3e3);
    });
    it('can floor from hours', () => {
      const dur: Milliseconds = Duration.floorTo(UnitSize.Millisecond, hours(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * 60 * 3e3);
    });
  });

  describe('with seconds', () => {
    it('can floor from nanoseconds', () => {
      const dur: Seconds = Duration.floorTo(UnitSize.Second, nanoseconds(3.1e9));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(3);
    });
    it('can floor from microseconds', () => {
      const dur: Seconds = Duration.floorTo(UnitSize.Second, microseconds(3e6 - 5e3));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(2);
    });
    it('can floor from milliseconds', () => {
      const dur: Seconds = Duration.floorTo(UnitSize.Second, milliseconds(-14e3 + 1));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(-14);
    });
    it('can floor from seconds', () => {
      const dur: Seconds = Duration.floorTo(UnitSize.Second, seconds(7));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(7);
    });
    it('can floor from minutes', () => {
      const dur: Seconds = Duration.floorTo(UnitSize.Second, minutes(3));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(60 * 3);
    });
    it('can floor from hours', () => {
      const dur: Seconds = Duration.floorTo(UnitSize.Second, hours(8));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(60 * 60 * 8);
    });
  });

  describe('with minutes', () => {
    it('can floor from nanoseconds', () => {
      const dur: Minutes = Duration.floorTo(UnitSize.Minute, nanoseconds(2 * 60e9));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(2);
    });
    it('can floor from microseconds', () => {
      const dur: Minutes = Duration.floorTo(UnitSize.Minute, microseconds(30e6 + 1));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(0);
    });
    it('can floor from milliseconds', () => {
      const dur: Minutes = Duration.floorTo(UnitSize.Minute, milliseconds(30e3));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(0);
    });
    it('can floor from seconds', () => {
      const dur: Minutes = Duration.floorTo(UnitSize.Minute, seconds(-30));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(-1);
    });
    it('can floor from minutes', () => {
      const dur: Minutes = Duration.floorTo(UnitSize.Minute, minutes(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(4);
    });
    it('can floor from hours', () => {
      const dur: Minutes = Duration.floorTo(UnitSize.Minute, hours(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(60 * 4);
    });
  });

  describe('with hours', () => {
    it('can floor from nanoseconds', () => {
      const dur: Hours = Duration.floorTo(UnitSize.Hour, nanoseconds(120 * 60e9));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(2);
    });
    it('can floor from microseconds', () => {
      const dur: Hours = Duration.floorTo(UnitSize.Hour, microseconds(120 * 60e6 - 1));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(1);
    });
    it('can floor from milliseconds', () => {
      const dur: Hours = Duration.floorTo(UnitSize.Hour, milliseconds(60 * 60e3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(1);
    });
    it('can floor from seconds', () => {
      const dur: Hours = Duration.floorTo(UnitSize.Hour, seconds(-1));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(-1);
    });
    it('can floor from minutes', () => {
      const dur: Hours = Duration.floorTo(UnitSize.Hour, minutes(-150));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(-3);
    });
    it('can floor from hours', () => {
      const dur: Hours = Duration.floorTo(UnitSize.Hour, hours(3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(3);
    });
  });
});