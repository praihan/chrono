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

  abs,
} = Duration;

describe('Duration.abs', () => {
  describe('Nanoseconds', () => {
    it('correctly handles positive', () => {
      const dur: Nanoseconds = abs(nanoseconds(1e3));
      expect(dur.unit).to.equal(Unit.Nanosecond);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles negative', () => {
      const dur: Nanoseconds = abs(nanoseconds(-1e3));
      expect(dur.unit).to.equal(Unit.Nanosecond);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles 0', () => {
      const dur: Nanoseconds = abs(nanoseconds(0));
      expect(dur.unit).to.equal(Unit.Nanosecond);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Microseconds', () => {
    it('correctly handles positive', () => {
      const dur: Microseconds = abs(microseconds(1));
      expect(dur.unit).to.equal(Unit.Microsecond);
      expect(dur.count).to.equal(1);
    });
    it('correctly handles negative', () => {
      const dur: Microseconds = abs(microseconds(-1));
      expect(dur.unit).to.equal(Unit.Microsecond);
      expect(dur.count).to.equal(1);
    });
    it('correctly handles 0', () => {
      const dur: Microseconds = abs(microseconds(0));
      expect(dur.unit).to.equal(Unit.Microsecond);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Milliseconds', () => {
    it('correctly handles positive', () => {
      const dur: Milliseconds = abs(milliseconds(1e3));
      expect(dur.unit).to.equal(Unit.Millisecond);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles negative', () => {
      const dur: Milliseconds = abs(milliseconds(-1e3));
      expect(dur.unit).to.equal(Unit.Millisecond);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles 0', () => {
      const dur: Milliseconds = abs(milliseconds(0));
      expect(dur.unit).to.equal(Unit.Millisecond);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Seconds', () => {
    it('correctly handles positive', () => {
      const dur: Seconds = abs(seconds(1e3));
      expect(dur.unit).to.equal(Unit.Second);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles negative', () => {
      const dur: Seconds = abs(seconds(-1e3));
      expect(dur.unit).to.equal(Unit.Second);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles 0', () => {
      const dur: Seconds = abs(seconds(0));
      expect(dur.unit).to.equal(Unit.Second);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Minutes', () => {
    it('correctly handles positive', () => {
      const dur: Minutes = abs(minutes(1));
      expect(dur.unit).to.equal(Unit.Minute);
      expect(dur.count).to.equal(1);
    });
    it('correctly handles negative', () => {
      const dur: Minutes = abs(minutes(-1));
      expect(dur.unit).to.equal(Unit.Minute);
      expect(dur.count).to.equal(1);
    });
    it('correctly handles 0', () => {
      const dur: Minutes = abs(minutes(0));
      expect(dur.unit).to.equal(Unit.Minute);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Hours', () => {
    it('correctly handles positive', () => {
      const dur: Hours = abs(hours(1e3));
      expect(dur.unit).to.equal(Unit.Hour);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles negative', () => {
      const dur: Hours = abs(hours(-1e3));
      expect(dur.unit).to.equal(Unit.Hour);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles 0', () => {
      const dur: Hours = abs(hours(0));
      expect(dur.unit).to.equal(Unit.Hour);
      expect(dur.count).to.equal(0);
    });
  });
});
