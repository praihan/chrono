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

  add,
} = Duration;

describe('Duration.add', () => {
  describe('with lhs of nanoseconds', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = add(nanoseconds(7e3), nanoseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add microseconds', () => {
      const dur: Nanoseconds = add(nanoseconds(7e3), microseconds(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add milliseconds', () => {
      const dur: Nanoseconds = add(nanoseconds(7e3 + 57), milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 + 57 + 3e6);
    });
    it('can add seconds', () => {
      const dur: Nanoseconds = add(nanoseconds(7e3 - 1), seconds(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 - 1 + 3e9);
    });
    it('can add minutes', () => {
      const dur: Nanoseconds = add(nanoseconds(7e3 + 9), minutes(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 + 9 + 3e9 * 60);
    });
    it('can add hours', () => {
      const dur: Nanoseconds = add(nanoseconds(7e3), hours(3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 + 3e9 * 60 * 60);
    });
  });

  describe('with lhs of microseconds', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = add(microseconds(7), nanoseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = add(microseconds(7e3), microseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add milliseconds', () => {
      const dur: Microseconds = add(microseconds(7e3 + 10), milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(7e3 + 10 + 3e3);
    });
    it('can add seconds', () => {
      const dur: Microseconds = add(microseconds(7e3 - 2), seconds(-3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(7e3 - 2 - 3e6);
    });
    it('can add minutes', () => {
      const dur: Microseconds = add(microseconds(47e3 + 4714), minutes(3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(47e3 + 4714 + 3e6 * 60);
    });
    it('can add hours', () => {
      const dur: Microseconds = add(microseconds(0), hours(3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(3e6 * 60 * 60);
    });
  });

  describe('with lhs of milliseconds', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = add(milliseconds(7), nanoseconds(3e6));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(10e6);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = add(milliseconds(7), microseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add milliseconds', () => {
      const dur: Milliseconds = add(milliseconds(7e3 + 10), milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(7e3 + 10 + 3);
    });
    it('can add seconds', () => {
      const dur: Milliseconds = add(milliseconds(7e3 - 2), seconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(7e3 - 2 + 3e3);
    });
    it('can add minutes', () => {
      const dur: Milliseconds = add(milliseconds(0), minutes(4));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(4e3 * 60);
    });
    it('can add hours', () => {
      const dur: Milliseconds = add(milliseconds(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(47e3 + 4714 + 3e3 * 60 * 60);
    });
  });

  describe('with lhs of seconds', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = add(seconds(7), nanoseconds(3e9));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(10e9);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = add(seconds(7), microseconds(3e6));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(10e6);
    });
    it('can add milliseconds', () => {
      const dur: Milliseconds = add(seconds(-17), milliseconds(3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(-17e3 + 3);
    });
    it('can add seconds', () => {
      const dur: Seconds = add(seconds(3), seconds(7e3 - 2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(3 + 7e3 - 2);
    });
    it('can add minutes', () => {
      const dur: Seconds = add(seconds(0), minutes(4));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(4 * 60);
    });
    it('can add hours', () => {
      const dur: Seconds = add(seconds(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(47e3 + 4714 + 3 * 60 * 60);
    });
  });

  describe('with lhs of minutes', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = add(minutes(1), nanoseconds(3e9));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 1e9 + 3e9);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = add(minutes(7), microseconds(60 * 3e6));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(6e8);
    });
    it('can add milliseconds', () => {
      const dur: Milliseconds = add(minutes(4), milliseconds(-3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * 4e3 - 3);
    });
    it('can add seconds', () => {
      const dur: Seconds = add(minutes(3), seconds(7e3 - 2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(3 * 60 + 7e3 - 2);
    });
    it('can add minutes', () => {
      const dur: Minutes = add(minutes(0), minutes(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(4);
    });
    it('can add hours', () => {
      const dur: Minutes = add(minutes(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(47e3 + 4714 + 3 * 60);
    });
  });

  describe('with lhs of hours', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = add(hours(1), nanoseconds(3e9));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 60 * 1e9 + 3e9);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = add(hours(-7), microseconds(4));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(60 * 60 * -7e6 + 4);
    });
    it('can add milliseconds', () => {
      const dur: Milliseconds = add(hours(4), milliseconds(3e3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(60 * 60 * 4e3 + 3e3);
    });
    it('can add seconds', () => {
      const dur: Seconds = add(hours(3), seconds(7e3 - 2));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(3 * 60 * 60 + 7e3 - 2);
    });
    it('can add minutes', () => {
      const dur: Minutes = add(hours(1), minutes(4));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(60 + 4);
    });
    it('can add hours', () => {
      const dur: Hours = add(hours(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(47e3 + 4714 + 3);
    });
  });
});
