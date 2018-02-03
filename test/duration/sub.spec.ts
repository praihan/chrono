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

describe('Duration.sub', () => {
  describe('with lhs of nanoseconds', () => {
    it('can sub nanoseconds', () => {
      const dur: Nanoseconds = Duration.sub(nanoseconds(7e3), nanoseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(4e3);
    });
    it('can sub microseconds', () => {
      const dur: Nanoseconds = Duration.sub(nanoseconds(7e3), microseconds(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(4e3);
    });
    it('can sub milliseconds', () => {
      const dur: Nanoseconds = Duration.sub(nanoseconds(7e3 + 57), milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 + 57 - 3e6);
    });
    it('can sub seconds', () => {
      const dur: Nanoseconds = Duration.sub(nanoseconds(7e3 - 1), seconds(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 - 1 - 3e9);
    });
    it('can sub minutes', () => {
      const dur: Nanoseconds = Duration.sub(nanoseconds(7e3 + 9), minutes(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 + 9 - 3e9 * 60);
    });
    it('can sub hours', () => {
      const dur: Nanoseconds = Duration.sub(nanoseconds(7e3), hours(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 - 3e9 * 60 * 60);
    });
  });

  describe('with lhs of microseconds', () => {
    it('can sub nanoseconds', () => {
      const dur: Nanoseconds = Duration.sub(microseconds(7), nanoseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(4e3);
    });
    it('can sub microseconds', () => {
      const dur: Microseconds = Duration.sub(microseconds(7e3), microseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(4e3);
    });
    it('can sub milliseconds', () => {
      const dur: Microseconds = Duration.sub(microseconds(7e3 + 10), milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(7e3 + 10 - 3e3);
    });
    it('can sub seconds', () => {
      const dur: Microseconds = Duration.sub(microseconds(7e3 - 2), seconds(-3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(7e3 - 2 + 3e6);
    });
    it('can sub minutes', () => {
      const dur: Microseconds = Duration.sub(microseconds(47e3 + 4714), minutes(3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(47e3 + 4714 - 3e6 * 60);
    });
    it('can sub hours', () => {
      const dur: Microseconds = Duration.sub(microseconds(0), hours(3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(-3e6 * 60 * 60);
    });
  });

  describe('with lhs of milliseconds', () => {
    it('can sub nanoseconds', () => {
      const dur: Nanoseconds = Duration.sub(milliseconds(7), nanoseconds(3e6));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(4e6);
    });
    it('can sub microseconds', () => {
      const dur: Microseconds = Duration.sub(milliseconds(7), microseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(4e3);
    });
    it('can sub milliseconds', () => {
      const dur: Milliseconds = Duration.sub(milliseconds(7e3 + 10), milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(7e3 + 10 - 3);
    });
    it('can sub seconds', () => {
      const dur: Milliseconds = Duration.sub(milliseconds(7e3 - 2), seconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(7e3 - 2 - 3e3);
    });
    it('can sub minutes', () => {
      const dur: Milliseconds = Duration.sub(milliseconds(0), minutes(4));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(-4e3 * 60);
    });
    it('can sub hours', () => {
      const dur: Milliseconds = Duration.sub(milliseconds(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(47e3 + 4714 - 3e3 * 60 * 60);
    });
  });

  describe('with lhs of seconds', () => {
    it('can sub nanoseconds', () => {
      const dur: Nanoseconds = Duration.sub(seconds(7), nanoseconds(4));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e9 - 4);
    });
    it('can sub microseconds', () => {
      const dur: Microseconds = Duration.sub(seconds(7), microseconds(3e6));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(4e6);
    });
    it('can sub milliseconds', () => {
      const dur: Milliseconds = Duration.sub(seconds(-17), milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(-17e3 - 3);
    });
    it('can sub seconds', () => {
      const dur: Seconds = Duration.sub(seconds(3), seconds(7e3 - 2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(3 - (7e3 - 2));
    });
    it('can sub minutes', () => {
      const dur: Seconds = Duration.sub(seconds(0), minutes(4));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(-4 * 60);
    });
    it('can sub hours', () => {
      const dur: Seconds = Duration.sub(seconds(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(47e3 + 4714 - 3 * 60 * 60);
    });
  });

  describe('with lhs of minutes', () => {
    it('can sub nanoseconds', () => {
      const dur: Nanoseconds = Duration.sub(minutes(1), nanoseconds(3e9));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 1e9 - 3e9);
    });
    it('can sub microseconds', () => {
      const dur: Microseconds = Duration.sub(minutes(7), microseconds(60 * 2e6));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(3e8);
    });
    it('can sub milliseconds', () => {
      const dur: Milliseconds = Duration.sub(minutes(4), milliseconds(-3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * 4e3 + 3);
    });
    it('can sub seconds', () => {
      const dur: Seconds = Duration.sub(minutes(3), seconds(7e3 - 2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(3 * 60 - (7e3 - 2));
    });
    it('can sub minutes', () => {
      const dur: Minutes = Duration.sub(minutes(0), minutes(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(-4);
    });
    it('can sub hours', () => {
      const dur: Minutes = Duration.sub(minutes(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(47e3 + 4714 - 3 * 60);
    });
  });

  describe('with lhs of hours', () => {
    it('can sub nanoseconds', () => {
      const dur: Nanoseconds = Duration.sub(hours(1), nanoseconds(3e9));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 60 * 1e9 - 3e9);
    });
    it('can sub microseconds', () => {
      const dur: Microseconds = Duration.sub(hours(-7), microseconds(4));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(60 * 60 * -7e6 - 4);
    });
    it('can sub milliseconds', () => {
      const dur: Milliseconds = Duration.sub(hours(4), milliseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * 60 * 4e3 - 3e3);
    });
    it('can sub seconds', () => {
      const dur: Seconds = Duration.sub(hours(3), seconds(7e3 - 2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(3 * 60 * 60 - (7e3 - 2));
    });
    it('can sub minutes', () => {
      const dur: Minutes = Duration.sub(hours(1), minutes(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(60 - 4);
    });
    it('can sub hours', () => {
      const dur: Hours = Duration.sub(hours(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(47e3 + 4714 - 3);
    });
  });
});
