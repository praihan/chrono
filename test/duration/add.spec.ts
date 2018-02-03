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
  DurationUnitSize
} from '../../src/chrono';

const {
  nanoseconds,
  microseconds,
  milliseconds,
  seconds,
  minutes,
  hours
} = Duration;

describe('Duration.add', () => {
  describe('with lhs of nanoseconds', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = Duration.add(nanoseconds(7e3), nanoseconds(3e3));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add microseconds', () => {
      const dur: Nanoseconds = Duration.add(nanoseconds(7e3), microseconds(3));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add milliseconds', () => {
      const dur: Nanoseconds = Duration.add(nanoseconds(7e3 + 57), milliseconds(3));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 + 57 + 3e6);
    });
    it('can add seconds', () => {
      const dur: Nanoseconds = Duration.add(nanoseconds(7e3 - 1), seconds(3));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 - 1 + 3e9);
    });
    it('can add minutes', () => {
      const dur: Nanoseconds = Duration.add(nanoseconds(7e3 + 9), minutes(3));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 + 9 + 3e9 * 60);
    });
    it('can add hours', () => {
      const dur: Nanoseconds = Duration.add(nanoseconds(7e3), hours(3));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(7e3 + 3e9 * 60 * 60);
    });
  });

  describe('with lhs of microseconds', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = Duration.add(microseconds(7), nanoseconds(3e3));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = Duration.add(microseconds(7e3), microseconds(3e3));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add milliseconds', () => {
      const dur: Microseconds = Duration.add(microseconds(7e3 + 10), milliseconds(3));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(7e3 + 10 + 3e3);
    });
    it('can add seconds', () => {
      const dur: Microseconds = Duration.add(microseconds(7e3 - 2), seconds(-3));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(7e3 - 2 - 3e6);
    });
    it('can add minutes', () => {
      const dur: Microseconds = Duration.add(microseconds(47e3 + 4714), minutes(3));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(47e3 + 4714 + 3e6 * 60);
    });
    it('can add hours', () => {
      const dur: Microseconds = Duration.add(microseconds(0), hours(3));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(3e6 * 60 * 60);
    });
  });

  describe('with lhs of milliseconds', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = Duration.add(milliseconds(7), nanoseconds(3e6));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(10e6);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = Duration.add(milliseconds(7), microseconds(3e3));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(10e3);
    });
    it('can add milliseconds', () => {
      const dur: Milliseconds = Duration.add(milliseconds(7e3 + 10), milliseconds(3));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(7e3 + 10 + 3);
    });
    it('can add seconds', () => {
      const dur: Milliseconds = Duration.add(milliseconds(7e3 - 2), seconds(3));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(7e3 - 2 + 3e3);
    });
    it('can add minutes', () => {
      const dur: Milliseconds = Duration.add(milliseconds(0), minutes(4));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(4e3 * 60);
    });
    it('can add hours', () => {
      const dur: Milliseconds = Duration.add(milliseconds(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(47e3 + 4714 + 3e3 * 60 * 60);
    });
  });

  describe('with lhs of seconds', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = Duration.add(seconds(7), nanoseconds(3e9));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(10e9);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = Duration.add(seconds(7), microseconds(3e6));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(10e6);
    });
    it('can add milliseconds', () => {
      const dur: Milliseconds = Duration.add(seconds(-17), milliseconds(3));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(-17e3 + 3);
    });
    it('can add seconds', () => {
      const dur: Seconds = Duration.add(seconds(3), seconds(7e3 - 2));
      expect(dur.unit).to.equal(DurationUnitSize.Second);
      expect(dur.count).to.equal(3 + 7e3 - 2);
    });
    it('can add minutes', () => {
      const dur: Seconds = Duration.add(seconds(0), minutes(4));
      expect(dur.unit).to.equal(DurationUnitSize.Second);
      expect(dur.count).to.equal(4 * 60);
    });
    it('can add hours', () => {
      const dur: Seconds = Duration.add(seconds(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(DurationUnitSize.Second);
      expect(dur.count).to.equal(47e3 + 4714 + 3 * 60 * 60);
    });
  });

  describe('with lhs of minutes', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = Duration.add(minutes(1), nanoseconds(3e9));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 1e9 + 3e9);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = Duration.add(minutes(7), microseconds(60 * 3e6));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(6e8);
    });
    it('can add milliseconds', () => {
      const dur: Milliseconds = Duration.add(minutes(4), milliseconds(-3));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(60 * 4e3 - 3);
    });
    it('can add seconds', () => {
      const dur: Seconds = Duration.add(minutes(3), seconds(7e3 - 2));
      expect(dur.unit).to.equal(DurationUnitSize.Second);
      expect(dur.count).to.equal(3 * 60 + 7e3 - 2);
    });
    it('can add minutes', () => {
      const dur: Minutes = Duration.add(minutes(0), minutes(4));
      expect(dur.unit).to.equal(DurationUnitSize.Minute);
      expect(dur.count).to.equal(4);
    });
    it('can add hours', () => {
      const dur: Minutes = Duration.add(minutes(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(DurationUnitSize.Minute);
      expect(dur.count).to.equal(47e3 + 4714 + 3 * 60);
    });
  });

  describe('with lhs of hours', () => {
    it('can add nanoseconds', () => {
      const dur: Nanoseconds = Duration.add(hours(1), nanoseconds(3e9));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(60 * 60 * 1e9 + 3e9);
    });
    it('can add microseconds', () => {
      const dur: Microseconds = Duration.add(hours(-7), microseconds(4));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(60 * 60 * -7e6 + 4);
    });
    it('can add milliseconds', () => {
      const dur: Milliseconds = Duration.add(hours(4), milliseconds(3e3));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(60 * 60 * 4e3 + 3e3);
    });
    it('can add seconds', () => {
      const dur: Seconds = Duration.add(hours(3), seconds(7e3 - 2));
      expect(dur.unit).to.equal(DurationUnitSize.Second);
      expect(dur.count).to.equal(3 * 60 * 60 + 7e3 - 2);
    });
    it('can add minutes', () => {
      const dur: Minutes = Duration.add(hours(1), minutes(4));
      expect(dur.unit).to.equal(DurationUnitSize.Minute);
      expect(dur.count).to.equal(60 + 4);
    });
    it('can add hours', () => {
      const dur: Hours = Duration.add(hours(47e3 + 4714), hours(3));
      expect(dur.unit).to.equal(DurationUnitSize.Hour);
      expect(dur.count).to.equal(47e3 + 4714 + 3);
    });
  });
});
