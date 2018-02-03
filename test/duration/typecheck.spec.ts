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
    it('is true for nanoseconds', () => expect(Duration.isNanoseconds(_.nanoseconds)).to.be.true);
    it('is false for microseconds', () => expect(Duration.isNanoseconds(_.microseconds)).to.be.false);
    it('is false for milliseconds', () => expect(Duration.isNanoseconds(_.milliseconds)).to.be.false);
    it('is false for seconds', () => expect(Duration.isNanoseconds(_.seconds)).to.be.false);
    it('is false for minutes', () => expect(Duration.isNanoseconds(_.minutes)).to.be.false);
    it('is false for hours', () => expect(Duration.isNanoseconds(_.hours)).to.be.false);
  });

  describe('isMicroseconds', () => {
    it('is false for nanoseconds', () => expect(Duration.isMicroseconds(_.nanoseconds)).to.be.false);
    it('is true for microseconds', () => expect(Duration.isMicroseconds(_.microseconds)).to.be.true);
    it('is false for milliseconds', () => expect(Duration.isMicroseconds(_.milliseconds)).to.be.false);
    it('is false for seconds', () => expect(Duration.isMicroseconds(_.seconds)).to.be.false);
    it('is false for minutes', () => expect(Duration.isMicroseconds(_.minutes)).to.be.false);
    it('is false for hours', () => expect(Duration.isMicroseconds(_.hours)).to.be.false);
  });

  describe('isMilliseconds', () => {
    it('is false for nanoseconds', () => expect(Duration.isMilliseconds(_.nanoseconds)).to.be.false);
    it('is false for microseconds', () => expect(Duration.isMilliseconds(_.microseconds)).to.be.false);
    it('is true for milliseconds', () => expect(Duration.isMilliseconds(_.milliseconds)).to.be.true);
    it('is false for seconds', () => expect(Duration.isMilliseconds(_.seconds)).to.be.false);
    it('is false for minutes', () => expect(Duration.isMilliseconds(_.minutes)).to.be.false);
    it('is false for hours', () => expect(Duration.isMilliseconds(_.hours)).to.be.false);
  });

  describe('isSeconds', () => {
    it('is false for nanoseconds', () => expect(Duration.isSeconds(_.nanoseconds)).to.be.false);
    it('is false for microseconds', () => expect(Duration.isSeconds(_.microseconds)).to.be.false);
    it('is false for milliseconds', () => expect(Duration.isSeconds(_.milliseconds)).to.be.false);
    it('is true for seconds', () => expect(Duration.isSeconds(_.seconds)).to.be.true);
    it('is false for minutes', () => expect(Duration.isSeconds(_.minutes)).to.be.false);
    it('is false for hours', () => expect(Duration.isSeconds(_.hours)).to.be.false);
  });

  describe('isMinutes', () => {
    it('is false for nanoseconds', () => expect(Duration.isMinutes(_.nanoseconds)).to.be.false);
    it('is false for microseconds', () => expect(Duration.isMinutes(_.microseconds)).to.be.false);
    it('is false for milliseconds', () => expect(Duration.isMinutes(_.milliseconds)).to.be.false);
    it('is false for seconds', () => expect(Duration.isMinutes(_.seconds)).to.be.false);
    it('is true for minutes', () => expect(Duration.isMinutes(_.minutes)).to.be.true);
    it('is false for hours', () => expect(Duration.isMinutes(_.hours)).to.be.false);
  });

  describe('isHours', () => {
    it('is false for nanoseconds', () => expect(Duration.isHours(_.nanoseconds)).to.be.false);
    it('is false for microseconds', () => expect(Duration.isHours(_.microseconds)).to.be.false);
    it('is false for milliseconds', () => expect(Duration.isHours(_.milliseconds)).to.be.false);
    it('is false for seconds', () => expect(Duration.isHours(_.seconds)).to.be.false);
    it('is false for minutes', () => expect(Duration.isHours(_.minutes)).to.be.false);
    it('is true for hours', () => expect(Duration.isHours(_.hours)).to.be.true);
  });
});
