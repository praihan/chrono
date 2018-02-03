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

describe('Duration.clone', () => {
  it('clones nanoseconds', () => {
    const dur: Nanoseconds = Duration.clone(nanoseconds(2));
    expect(dur.unit).to.equal(DurationUnitSize.Nanosecond);
    expect(dur.count).to.equal(2);
  });
  it('clones microseconds', () => {
    const dur: Microseconds = Duration.clone(microseconds(-2));
    expect(dur.unit).to.equal(DurationUnitSize.Microsecond);
    expect(dur.count).to.equal(-2);
  });
  it('clones millseconds', () => {
    const dur: Milliseconds = Duration.clone(milliseconds(2));
    expect(dur.unit).to.equal(DurationUnitSize.Millisecond);
    expect(dur.count).to.equal(2);
  });
  it('clones seconds', () => {
    const dur: Seconds = Duration.clone(seconds(-2));
    expect(dur.unit).to.equal(DurationUnitSize.Second);
    expect(dur.count).to.equal(-2);
  });
  it('clones minutes', () => {
    const dur: Minutes = Duration.clone(minutes(2));
    expect(dur.unit).to.equal(DurationUnitSize.Minute);
    expect(dur.count).to.equal(2);
  });
  it('clones hours', () => {
    const dur: Hours = Duration.clone(hours(-2));
    expect(dur.unit).to.equal(DurationUnitSize.Hour);
    expect(dur.count).to.equal(-2);
  });
});
