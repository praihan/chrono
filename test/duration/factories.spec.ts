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

describe('Duration.[factory]', () => {
  describe('Nanoseconds', () => {
    it('correctly creates from count', () => {
      const dur: Nanoseconds = nanoseconds(2);
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from nanoseconds', () => {
      const dur: Nanoseconds = nanoseconds(nanoseconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from microseconds', () => {
      const dur: Nanoseconds = nanoseconds(microseconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(2e3);
    });
    it('correctly creates from milliseconds', () => {
      const dur: Nanoseconds = nanoseconds(milliseconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(2e6);
    });
    it('correctly creates from seconds', () => {
      const dur: Nanoseconds = nanoseconds(seconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(2e9);
    });
    it('correctly creates from minutes', () => {
      const dur: Nanoseconds = nanoseconds(minutes(2));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(2e9 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Nanoseconds = nanoseconds(hours(2));
      expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
      expect(dur.count).to.equal(2e9 * 60 * 60);
    });
    it('throws unless count is integral', () => {
      expect(() => nanoseconds(1.5)).to.throw(TypeError);
    });
  });

  describe('Microseconds', () => {
    it('correctly creates from count', () => {
      const dur: Microseconds = microseconds(2);
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from microseconds', () => {
      const dur: Microseconds = microseconds(microseconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from milliseconds', () => {
      const dur: Microseconds = microseconds(milliseconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(2e3);
    });
    it('correctly creates from seconds', () => {
      const dur: Microseconds = microseconds(seconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(2e6);
    });
    it('correctly creates from minutes', () => {
      const dur: Microseconds = microseconds(minutes(2));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(2e6 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Microseconds = microseconds(hours(2));
      expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
      expect(dur.count).to.equal(2e6 * 60 * 60);
    });
    it('throws unless count is integral', () => {
      expect(() => microseconds(1.5)).to.throw(TypeError);
    });
  });

  describe('Milliseconds', () => {
    it('correctly creates from count', () => {
      const dur: Milliseconds = milliseconds(2);
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from milliseconds', () => {
      const dur: Milliseconds = milliseconds(milliseconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from seconds', () => {
      const dur: Milliseconds = milliseconds(seconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(2e3);
    });
    it('correctly creates from minutes', () => {
      const dur: Milliseconds = milliseconds(minutes(2));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(2e3 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Milliseconds = milliseconds(hours(2));
      expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
      expect(dur.count).to.equal(2e3 * 60 * 60);
    });
    it('throws unless count is integral', () => {
      expect(() => milliseconds(1.5)).to.throw(TypeError);
    });
  });

  describe('Seconds', () => {
    it('correctly creates from count', () => {
      const dur: Seconds = seconds(2);
      expect(dur.unit).to.equal(DurationUnitSize.Second);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from seconds', () => {
      const dur: Seconds = seconds(seconds(2));
      expect(dur.unit).to.equal(DurationUnitSize.Second);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from minutes', () => {
      const dur: Seconds = seconds(minutes(2));
      expect(dur.unit).to.equal(DurationUnitSize.Second);
      expect(dur.count).to.equal(2 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Seconds = seconds(hours(2));
      expect(dur.unit).to.equal(DurationUnitSize.Second);
      expect(dur.count).to.equal(2 * 60 * 60);
    });
    it('throws unless count is integral', () => {
      expect(() => seconds(1.5)).to.throw(TypeError);
    });
  });

  describe('Minutes', () => {
    it('correctly creates from count', () => {
      const dur: Minutes = minutes(2);
      expect(dur.unit).to.equal(DurationUnitSize.Minute);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from minutes', () => {
      const dur: Minutes = minutes(minutes(2));
      expect(dur.unit).to.equal(DurationUnitSize.Minute);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from hours', () => {
      const dur: Minutes = minutes(hours(2));
      expect(dur.unit).to.equal(DurationUnitSize.Minute);
      expect(dur.count).to.equal(2 * 60);
    });
    it('throws unless count is integral', () => {
      expect(() => minutes(1.5)).to.throw(TypeError);
    });
  });

  describe('Hours', () => {
    it('correctly creates from count', () => {
      const dur: Hours = hours(2);
      expect(dur.unit).to.equal(DurationUnitSize.Hour);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from hours', () => {
      const dur: Hours = hours(hours(2));
      expect(dur.unit).to.equal(DurationUnitSize.Hour);
      expect(dur.count).to.equal(2);
    });
    it('throws unless count is integral', () => {
      expect(() => hours(1.5)).to.throw(TypeError);
    });
  });
});
