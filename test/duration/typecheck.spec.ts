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

  isNanoseconds,
  isMicroseconds,
  isMilliseconds,
  isSeconds,
  isMinutes,
  isHours,
} = Duration;

const _ = {
  nanoseconds: nanoseconds(1),
  microseconds: microseconds(-2),
  milliseconds: milliseconds(7),
  seconds: seconds(4),
  minutes: minutes(-14),
  hours: hours(0),
};

describe('Duration.is[Type]', () => {
  describe('isNanoseconds', () => {
    it('is true for nanoseconds', () => expect(isNanoseconds(_.nanoseconds)).to.be.true);
    it('is false for microseconds', () => expect(isNanoseconds(_.microseconds)).to.be.false);
    it('is false for milliseconds', () => expect(isNanoseconds(_.milliseconds)).to.be.false);
    it('is false for seconds', () => expect(isNanoseconds(_.seconds)).to.be.false);
    it('is false for minutes', () => expect(isNanoseconds(_.minutes)).to.be.false);
    it('is false for hours', () => expect(isNanoseconds(_.hours)).to.be.false);
  });

  describe('isMicroseconds', () => {
    it('is false for nanoseconds', () => expect(isMicroseconds(_.nanoseconds)).to.be.false);
    it('is true for microseconds', () => expect(isMicroseconds(_.microseconds)).to.be.true);
    it('is false for milliseconds', () => expect(isMicroseconds(_.milliseconds)).to.be.false);
    it('is false for seconds', () => expect(isMicroseconds(_.seconds)).to.be.false);
    it('is false for minutes', () => expect(isMicroseconds(_.minutes)).to.be.false);
    it('is false for hours', () => expect(isMicroseconds(_.hours)).to.be.false);
  });

  describe('isMilliseconds', () => {
    it('is false for nanoseconds', () => expect(isMilliseconds(_.nanoseconds)).to.be.false);
    it('is false for microseconds', () => expect(isMilliseconds(_.microseconds)).to.be.false);
    it('is true for milliseconds', () => expect(isMilliseconds(_.milliseconds)).to.be.true);
    it('is false for seconds', () => expect(isMilliseconds(_.seconds)).to.be.false);
    it('is false for minutes', () => expect(isMilliseconds(_.minutes)).to.be.false);
    it('is false for hours', () => expect(isMilliseconds(_.hours)).to.be.false);
  });

  describe('isSeconds', () => {
    it('is false for nanoseconds', () => expect(isSeconds(_.nanoseconds)).to.be.false);
    it('is false for microseconds', () => expect(isSeconds(_.microseconds)).to.be.false);
    it('is false for milliseconds', () => expect(isSeconds(_.milliseconds)).to.be.false);
    it('is true for seconds', () => expect(isSeconds(_.seconds)).to.be.true);
    it('is false for minutes', () => expect(isSeconds(_.minutes)).to.be.false);
    it('is false for hours', () => expect(isSeconds(_.hours)).to.be.false);
  });

  describe('isMinutes', () => {
    it('is false for nanoseconds', () => expect(isMinutes(_.nanoseconds)).to.be.false);
    it('is false for microseconds', () => expect(isMinutes(_.microseconds)).to.be.false);
    it('is false for milliseconds', () => expect(isMinutes(_.milliseconds)).to.be.false);
    it('is false for seconds', () => expect(isMinutes(_.seconds)).to.be.false);
    it('is true for minutes', () => expect(isMinutes(_.minutes)).to.be.true);
    it('is false for hours', () => expect(isMinutes(_.hours)).to.be.false);
  });

  describe('isHours', () => {
    it('is false for nanoseconds', () => expect(isHours(_.nanoseconds)).to.be.false);
    it('is false for microseconds', () => expect(isHours(_.microseconds)).to.be.false);
    it('is false for milliseconds', () => expect(isHours(_.milliseconds)).to.be.false);
    it('is false for seconds', () => expect(isHours(_.seconds)).to.be.false);
    it('is false for minutes', () => expect(isHours(_.minutes)).to.be.false);
    it('is true for hours', () => expect(isHours(_.hours)).to.be.true);
  });
});
