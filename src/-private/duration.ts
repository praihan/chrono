import { assert } from './assert';
import { Unit } from './unit';

// #region types

export interface Duration<UnitValue extends number> {
  readonly unit: UnitValue;
  readonly count: number;
}

export type Nanoseconds = Duration<Unit.Nanosecond>;
export type Microseconds = Duration<Unit.Microsecond>;
export type Milliseconds = Duration<Unit.Millisecond>;
export type Seconds = Duration<Unit.Second>;
export type Minutes = Duration<Unit.Minute>;
export type Hours = Duration<Unit.Hour>;

export type AnyDuration = Nanoseconds | Microseconds | Milliseconds | Seconds | Minutes | Hours;

export type AtLeastHours = Hours;
export type AtLeastMinutes = Minutes | AtLeastHours;
export type AtLeastSeconds = Seconds | AtLeastMinutes;
export type AtLeastMilliseconds = Milliseconds | AtLeastSeconds;
export type AtLeastMicroseconds = Microseconds | AtLeastMilliseconds;
export type AtLeastNanoseconds = Nanoseconds | AtLeastMicroseconds;

export type AtMostNanoseconds = Nanoseconds;
export type AtMostMicroseconds = Microseconds | AtMostNanoseconds;
export type AtMostMilliseconds = Milliseconds | AtMostMicroseconds;
export type AtMostSeconds = Seconds | AtMostMilliseconds;
export type AtMostMinutes = Minutes | AtMostSeconds;
export type AtMostHours = Hours | AtMostMinutes;

// #endregion



export namespace Duration {

  // #region arithmetic

  export function add(lhs: Nanoseconds, rhs: AtLeastNanoseconds): Nanoseconds;
  export function add<DurationType extends AtMostNanoseconds>(lhs: Nanoseconds, rhs: DurationType): DurationType;
  export function add(lhs: Microseconds, rhs: AtLeastMicroseconds): Microseconds;
  export function add<DurationType extends AtMostMicroseconds>(lhs: Microseconds, rhs: DurationType): DurationType;
  export function add(lhs: Milliseconds, rhs: AtLeastMilliseconds): Milliseconds;
  export function add<DurationType extends AtMostMilliseconds>(lhs: Milliseconds, rhs: DurationType): DurationType;
  export function add(lhs: Seconds, rhs: AtLeastSeconds): Seconds;
  export function add<DurationType extends AtMostSeconds>(lhs: Seconds, rhs: DurationType): DurationType;
  export function add(lhs: Minutes, rhs: AtLeastMinutes): Minutes;
  export function add<DurationType extends AtMostMinutes>(lhs: Minutes, rhs: DurationType): DurationType;
  export function add(lhs: Hours, rhs: AtLeastHours): Hours;
  export function add<DurationType extends AtMostHours>(lhs: Hours, rhs: DurationType): DurationType;
  export function add(lhs: AnyDuration, rhs: AnyDuration): AnyDuration {
    const unit = Math.min(lhs.unit, rhs.unit);
    const count = (lhs.count * lhs.unit) / unit + (rhs.count * rhs.unit) / unit;
    return new DurationObject(unit, Math.round(count));
  }

  export function sub(lhs: Nanoseconds, rhs: AtLeastNanoseconds): Nanoseconds;
  export function sub<DurationType extends AtMostNanoseconds>(lhs: Nanoseconds, rhs: DurationType): DurationType;
  export function sub(lhs: Microseconds, rhs: AtLeastMicroseconds): Microseconds;
  export function sub<DurationType extends AtMostMicroseconds>(lhs: Microseconds, rhs: DurationType): DurationType;
  export function sub(lhs: Milliseconds, rhs: AtLeastMilliseconds): Milliseconds;
  export function sub<DurationType extends AtMostMilliseconds>(lhs: Milliseconds, rhs: DurationType): DurationType;
  export function sub(lhs: Seconds, rhs: AtLeastSeconds): Seconds;
  export function sub<DurationType extends AtMostSeconds>(lhs: Seconds, rhs: DurationType): DurationType;
  export function sub(lhs: Minutes, rhs: AtLeastMinutes): Minutes;
  export function sub<DurationType extends AtMostMinutes>(lhs: Minutes, rhs: DurationType): DurationType;
  export function sub(lhs: Hours, rhs: AtLeastHours): Hours;
  export function sub<DurationType extends AtMostHours>(lhs: Hours, rhs: DurationType): DurationType;
  export function sub(lhs: AnyDuration, rhs: AnyDuration): AnyDuration {
    const unit = Math.min(lhs.unit, rhs.unit);
    const count = (lhs.count * lhs.unit) / unit - (rhs.count * rhs.unit) / unit;
    return new DurationObject(unit, Math.round(count));
  }

  // #endregion



  // #region comparison

  export function isEqual<T extends number, U extends number>(lhs: Duration<T>, rhs: Duration<U>): boolean {
    if ((lhs.unit as number) < (rhs.unit as number)) {
      const rhsToLhs: Duration<T> = floorTo(lhs.unit, rhs);
      return lhs.count === rhsToLhs.count;
    } else if ((lhs.unit as number) > (rhs.unit as number)) {
      const lhsToRhs: Duration<U> = floorTo(rhs.unit, lhs);
      return lhsToRhs.count === rhs.count;
    } else {
      return lhs.count === rhs.count;
    }
  }
  export function isShorter<T extends number, U extends number>(lhs: Duration<T>, rhs: Duration<U>): boolean {
    if ((lhs.unit as number) < (rhs.unit as number)) {
      const rhsToLhs: Duration<T> = floorTo(lhs.unit, rhs);
      return lhs.count < rhsToLhs.count;
    } else if ((lhs.unit as number) > (rhs.unit as number)) {
      const lhsToRhs: Duration<U> = floorTo(rhs.unit, lhs);
      return lhsToRhs.count < rhs.count;
    } else {
      return lhs.count < rhs.count;
    }
  }
  export function isLonger<T extends number, U extends number>(lhs: Duration<T>, rhs: Duration<U>): boolean {
    if ((lhs.unit as number) < (rhs.unit as number)) {
      const rhsToLhs: Duration<T> = floorTo(lhs.unit, rhs);
      return lhs.count > rhsToLhs.count;
    } else if ((lhs.unit as number) > (rhs.unit as number)) {
      const lhsToRhs: Duration<U> = floorTo(rhs.unit, lhs);
      return lhsToRhs.count > rhs.count;
    } else {
      return lhs.count > rhs.count;
    }
  }

  // #endregion



  // #region object-related

  export function valueOf<T extends number>(duration: Duration<T>): number {
    if (Number.isInteger(duration.unit)) {
      return duration.unit * duration.count;
    }
    return duration.count / Math.round(1 / duration.unit);
  }

  export function toString<T extends number>(duration: Duration<T>): string {
    if (isNanoseconds(duration)) return `${duration.count}ns`;
    else if (isMicroseconds(duration)) return `${duration.count}µs`;
    else if (isMilliseconds(duration)) return `${duration.count}ms`;
    else if (isSeconds(duration)) return `${duration.count}s`;
    else if (isMinutes(duration)) return `${duration.count}m`;
    else if (isHours(duration)) return `${duration.count}h`;
    else return `${duration.count}(unit:${duration.unit})`;
  }

  // #endregion



  // #region factories

  export function clone<T extends number>(duration: Duration<T>): Duration<T> {
    return new DurationObject(duration.unit, duration.count);
  }

  export function nanoseconds(count: number): Nanoseconds;
  export function nanoseconds(duration: AtLeastNanoseconds): Nanoseconds;
  export function nanoseconds(arg: number | AtLeastNanoseconds): Nanoseconds {
    return createDurationObjectFromArg(Unit.Nanosecond, arg);
  }

  export function microseconds(count: number): Microseconds;
  export function microseconds(duration: AtLeastMicroseconds): Microseconds;
  export function microseconds(arg: number | AtLeastMicroseconds): Microseconds {
    return createDurationObjectFromArg(Unit.Microsecond, arg);
  }

  export function milliseconds(count: number): Milliseconds;
  export function milliseconds(duration: AtLeastMilliseconds): Milliseconds;
  export function milliseconds(arg: number | AtLeastMilliseconds): Milliseconds {
    return createDurationObjectFromArg(Unit.Millisecond, arg);
  }

  export function seconds(count: number): Seconds;
  export function seconds(duration: AtLeastSeconds): Seconds;
  export function seconds(arg: number | AtLeastSeconds): Seconds {
    return createDurationObjectFromArg(Unit.Second, arg);
  }

  export function minutes(count: number): Minutes;
  export function minutes(duration: AtLeastMinutes): Minutes;
  export function minutes(arg: number | AtLeastMinutes): Minutes {
    return createDurationObjectFromArg(Unit.Minute, arg);
  }

  export function hours(count: number): Hours;
  export function hours(duration: AtLeastHours): Hours;
  export function hours(arg: number | AtLeastHours): Hours {
    return createDurationObjectFromArg(Unit.Hour, arg);
  }

  // #endregion



  // #region conversions

  export function floorTo<T extends number, U extends number>(unit: T, duration: Duration<U>): Duration<T> {
    return createDurationWithConversion(unit, duration, Math.floor);
  }
  export function ceilTo<T extends number, U extends number>(unit: T, duration: Duration<U>): Duration<T> {
    return createDurationWithConversion(unit, duration, Math.ceil);
  }
  export function roundTo<T extends number, U extends number>(unit: T, duration: Duration<U>): Duration<T> {
    return createDurationWithConversion(unit, duration, Math.round);
  }
  export function abs<T extends number>(duration: Duration<T>): Duration<T> {
    return new DurationObject(duration.unit, Math.abs(duration.count));
  }
  export function since(date: Date): Milliseconds {
    return milliseconds(Date.now() - date.getTime());
  }

  // #endregion

  // #region typecheck

  export function isNanoseconds(duration: Nanoseconds): duration is Nanoseconds;
  export function isNanoseconds<T extends number>(duration: Duration<T>): false;
  export function isNanoseconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === Unit.Nanosecond;
  }

  export function isMicroseconds(duration: Microseconds): duration is Microseconds;
  export function isMicroseconds<T extends number>(duration: Duration<T>): false;
  export function isMicroseconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === Unit.Microsecond;
  }

  export function isMilliseconds(duration: Milliseconds): duration is Milliseconds;
  export function isMilliseconds<T extends number>(duration: Duration<T>): false;
  export function isMilliseconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === Unit.Millisecond;
  }

  export function isSeconds(duration: Seconds): duration is Seconds;
  export function isSeconds<T extends number>(duration: Duration<T>): false;
  export function isSeconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === Unit.Second;
  }

  export function isMinutes(duration: Minutes): duration is Minutes;
  export function isMinutes<T extends number>(duration: Duration<T>): false;
  export function isMinutes<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === Unit.Minute;
  }

  export function isHours(duration: Hours): duration is Hours;
  export function isHours<T extends number>(duration: Duration<T>): false;
  export function isHours<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === Unit.Hour;
  }

  // #endregion
}



// #region privates

export class DurationObject<T extends number> implements Duration<T> {
  public readonly unit: T;
  public readonly count: number;

  constructor(unit: T, count: number) {
    this.unit = unit;
    if (!Number.isSafeInteger(count)) throw RangeError();
    this.count = count;
  }

  valueOf() { return Duration.valueOf(this); }
  toString() { return Duration.toString(this); }
}

function createDurationObjectFromArg<T extends number, U extends number>(unit: T, arg: number | Duration<U>): Duration<T> {
  let count: number;
  if (typeof arg === 'number') {
    if (!Number.isInteger(arg)) throw TypeError();
    count = arg;
  } else count = (arg.count * arg.unit) / unit;
  return new DurationObject(unit, Math.round(count));
}

function createDurationWithConversion<T extends number, U extends number>(unit: T, duration: Duration<U>, convertFunc: (x: number) => number): Duration<T> {
  assert(unit !== 0);
  assert(unit < 1 || Number.isInteger(unit));
  assert(duration.unit !== 0);
  assert(duration.unit < 1 || Number.isInteger(duration.unit));

  const unitIsInt = Number.isInteger(unit);
  const durationUnitIsInt = Number.isInteger(duration.unit);

  let numer: number;
  let denom: number;

  if (unitIsInt && durationUnitIsInt) {
    numer = duration.count * duration.unit;
    denom = unit;
  } else if (unitIsInt && !durationUnitIsInt) {
    numer = duration.count;
    denom = unit * Math.round(1 / duration.unit);
  } else if (!unitIsInt && durationUnitIsInt) {
    numer = duration.count * duration.unit * Math.round(1 / unit);
    denom = 1;
  } else {
    numer = duration.count * Math.round(1 / unit);
    denom = Math.round(1 / duration.unit);
  }
  return new DurationObject(unit, convertFunc(numer / denom));
}

// #endregion
