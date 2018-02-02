import { expect } from 'chai';
import 'mocha';

import { createSandbox, getSandbox, destroySandbox } from './support/helpers';

import {
  Duration,
  Nanoseconds,
  Microseconds,
  Milliseconds,
  Seconds,
  Minutes,
  Hours
} from '../src/chrono';

const {
  nanoseconds,
  microseconds,
  milliseconds,
  seconds,
  minutes,
  hours
} = Duration;

import {
  DurationSize
} from '../src/-private/duration';

beforeEach((done) => {
  createSandbox();
  done();
});

afterEach((done) => {
  destroySandbox();
  done();
});

describe('Duration factories', () => {
  describe('Nanoseconds', () => {
    it('correctly creates from count', () => {
      const dur: Nanoseconds = nanoseconds(2);
      expect(dur.unit).to.equal(DurationSize.Nanosecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from nanoseconds', () => {
      const dur: Nanoseconds = nanoseconds(nanoseconds(2));
      expect(dur.unit).to.equal(DurationSize.Nanosecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from microseconds', () => {
      const dur: Nanoseconds = nanoseconds(microseconds(2));
      expect(dur.unit).to.equal(DurationSize.Nanosecond);
      expect(dur.count).to.equal(2e3);
    });
    it('correctly creates from milliseconds', () => {
      const dur: Nanoseconds = nanoseconds(milliseconds(2));
      expect(dur.unit).to.equal(DurationSize.Nanosecond);
      expect(dur.count).to.equal(2e6);
    });
    it('correctly creates from seconds', () => {
      const dur: Nanoseconds = nanoseconds(seconds(2));
      expect(dur.unit).to.equal(DurationSize.Nanosecond);
      expect(dur.count).to.equal(2e9);
    });
    it('correctly creates from minutes', () => {
      const dur: Nanoseconds = nanoseconds(minutes(2));
      expect(dur.unit).to.equal(DurationSize.Nanosecond);
      expect(dur.count).to.equal(2e9 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Nanoseconds = nanoseconds(hours(2));
      expect(dur.unit).to.equal(DurationSize.Nanosecond);
      expect(dur.count).to.equal(2e9 * 60 * 60);
    });
  });

  describe('Microseconds', () => {
    it('correctly creates from count', () => {
      const dur: Microseconds = microseconds(2);
      expect(dur.unit).to.equal(DurationSize.Microsecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from microseconds', () => {
      const dur: Microseconds = microseconds(microseconds(2));
      expect(dur.unit).to.equal(DurationSize.Microsecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from milliseconds', () => {
      const dur: Microseconds = microseconds(milliseconds(2));
      expect(dur.unit).to.equal(DurationSize.Microsecond);
      expect(dur.count).to.equal(2e3);
    });
    it('correctly creates from seconds', () => {
      const dur: Microseconds = microseconds(seconds(2));
      expect(dur.unit).to.equal(DurationSize.Microsecond);
      expect(dur.count).to.equal(2e6);
    });
    it('correctly creates from minutes', () => {
      const dur: Microseconds = microseconds(minutes(2));
      expect(dur.unit).to.equal(DurationSize.Microsecond);
      expect(dur.count).to.equal(2e6 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Microseconds = microseconds(hours(2));
      expect(dur.unit).to.equal(DurationSize.Microsecond);
      expect(dur.count).to.equal(2e6 * 60 * 60);
    });
  });

  describe('Milliseconds', () => {
    it('correctly creates from count', () => {
      const dur: Milliseconds = milliseconds(2);
      expect(dur.unit).to.equal(DurationSize.Millisecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from milliseconds', () => {
      const dur: Milliseconds = milliseconds(milliseconds(2));
      expect(dur.unit).to.equal(DurationSize.Millisecond);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from seconds', () => {
      const dur: Milliseconds = milliseconds(seconds(2));
      expect(dur.unit).to.equal(DurationSize.Millisecond);
      expect(dur.count).to.equal(2e3);
    });
    it('correctly creates from minutes', () => {
      const dur: Milliseconds = milliseconds(minutes(2));
      expect(dur.unit).to.equal(DurationSize.Millisecond);
      expect(dur.count).to.equal(2e3 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Milliseconds = milliseconds(hours(2));
      expect(dur.unit).to.equal(DurationSize.Millisecond);
      expect(dur.count).to.equal(2e3 * 60 * 60);
    });
  });

  describe('Seconds', () => {
    it('correctly creates from count', () => {
      const dur: Seconds = seconds(2);
      expect(dur.unit).to.equal(DurationSize.Second);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from seconds', () => {
      const dur: Seconds = seconds(seconds(2));
      expect(dur.unit).to.equal(DurationSize.Second);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from minutes', () => {
      const dur: Seconds = seconds(minutes(2));
      expect(dur.unit).to.equal(DurationSize.Second);
      expect(dur.count).to.equal(2 * 60);
    });
    it('correctly creates from hours', () => {
      const dur: Seconds = seconds(hours(2));
      expect(dur.unit).to.equal(DurationSize.Second);
      expect(dur.count).to.equal(2 * 60 * 60);
    });
  });

  describe('Minutes', () => {
    it('correctly creates from count', () => {
      const dur: Minutes = minutes(2);
      expect(dur.unit).to.equal(DurationSize.Minute);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from minutes', () => {
      const dur: Minutes = minutes(minutes(2));
      expect(dur.unit).to.equal(DurationSize.Minute);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from hours', () => {
      const dur: Minutes = minutes(hours(2));
      expect(dur.unit).to.equal(DurationSize.Minute);
      expect(dur.count).to.equal(2 * 60);
    });
  });

  describe('Hours', () => {
    it('correctly creates from count', () => {
      const dur: Hours = hours(2);
      expect(dur.unit).to.equal(DurationSize.Hour);
      expect(dur.count).to.equal(2);
    });
    it('correctly creates from hours', () => {
      const dur: Hours = hours(hours(2));
      expect(dur.unit).to.equal(DurationSize.Hour);
      expect(dur.count).to.equal(2);
    });
  });
});
