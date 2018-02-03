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

describe('Duration.abs', () => {
  describe('Nanoseconds', () => {
    it('correctly handles positive', () => {
      const dur: Nanoseconds = Duration.abs(nanoseconds(1e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles negative', () => {
      const dur: Nanoseconds = Duration.abs(nanoseconds(-1e3));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles 0', () => {
      const dur: Nanoseconds = Duration.abs(nanoseconds(0));
      expect(dur.unit).to.equal(UnitSize.Nanosecond);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Microseconds', () => {
    it('correctly handles positive', () => {
      const dur: Microseconds = Duration.abs(microseconds(1));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(1);
    });
    it('correctly handles negative', () => {
      const dur: Microseconds = Duration.abs(microseconds(-1));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(1);
    });
    it('correctly handles 0', () => {
      const dur: Microseconds = Duration.abs(microseconds(0));
      expect(dur.unit).to.equal(UnitSize.Microsecond);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Milliseconds', () => {
    it('correctly handles positive', () => {
      const dur: Milliseconds = Duration.abs(milliseconds(1e3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles negative', () => {
      const dur: Milliseconds = Duration.abs(milliseconds(-1e3));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles 0', () => {
      const dur: Milliseconds = Duration.abs(milliseconds(0));
      expect(dur.unit).to.equal(UnitSize.Millisecond);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Seconds', () => {
    it('correctly handles positive', () => {
      const dur: Seconds = Duration.abs(seconds(1e3));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles negative', () => {
      const dur: Seconds = Duration.abs(seconds(-1e3));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles 0', () => {
      const dur: Seconds = Duration.abs(seconds(0));
      expect(dur.unit).to.equal(UnitSize.Second);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Minutes', () => {
    it('correctly handles positive', () => {
      const dur: Minutes = Duration.abs(minutes(1));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(1);
    });
    it('correctly handles negative', () => {
      const dur: Minutes = Duration.abs(minutes(-1));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(1);
    });
    it('correctly handles 0', () => {
      const dur: Minutes = Duration.abs(minutes(0));
      expect(dur.unit).to.equal(UnitSize.Minute);
      expect(dur.count).to.equal(0);
    });
  });

  describe('Hours', () => {
    it('correctly handles positive', () => {
      const dur: Hours = Duration.abs(hours(1e3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles negative', () => {
      const dur: Hours = Duration.abs(hours(-1e3));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(1e3);
    });
    it('correctly handles 0', () => {
      const dur: Hours = Duration.abs(hours(0));
      expect(dur.unit).to.equal(UnitSize.Hour);
      expect(dur.count).to.equal(0);
    });
  });
});
