import { assert } from './assert';
import { Unit } from './unit';

// #region types

/**
 * A {@code Duration} is represented by a type parameter, {@code unit}, and a value, {@code count},
 * such that {@code count * unit} is the number of seconds that this {@code Duration} represents.
 *
 * Since {@code unit} is a type parameter, a {@code Duration} is only assignable to another {@code Duration}
 * with the same {@code unit}. This is the mechanism used to provide a type-safe API for {@code Duration}.
 */
export interface Duration<UnitValue extends number> {
  /**
   * The scaling factor of {@code count}. The numeric value repesents the temporal ratio of the
   * underlying unit type to one second.
   * @see {@link Unit}
   */
  readonly unit: UnitValue;
  /**
   * The number of "ticks" of {@code unit} that equate to this {@code Duration}.
   * This value must be integral.
   */
  readonly count: number;
}

/** A type alias for a {@code Duration} with nanosecond precision */
export type Nanoseconds = Duration<Unit.Nanosecond>;
/** A type alias for a {@code Duration} with microsecond precision */
export type Microseconds = Duration<Unit.Microsecond>;
/** A type alias for a {@code Duration} with millisecond precision */
export type Milliseconds = Duration<Unit.Millisecond>;
/** A type alias for a {@code Duration} with second precision */
export type Seconds = Duration<Unit.Second>;
/** A type alias for a {@code Duration} with minute precision */
export type Minutes = Duration<Unit.Minute>;
/** A type alias for a {@code Duration} with hour precision */
export type Hours = Duration<Unit.Hour>;

/** A type alias for a {@code Duration} with any pre-defined precisions */
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

/**
 * An implementation of a {@code Duration}
 *
 * @hidden
 * @internal
 */
export class DurationObject<T extends number> implements Duration<T> {
  public readonly unit: T;
  public readonly count: number;

  constructor(unit: T, count: number) {
    this.unit = unit;
    if (!Number.isSafeInteger(count)) throw RangeError();
    this.count = count;
  }

  valueOf(): number { return Duration.valueOf(this); }
  toString(): string { return Duration.toString(this); }
}

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
  /**
   * Adds two {@code Duration}s together without loss of precision.
   *
   * @param lhs the left hand side of the addition
   * @param rhs the right hand side of the addition
   */
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
  /**
   * Subtracts one {@code Duration} from another together without loss of precision.
   *
   * @param lhs the left hand side of the subtraction
   * @param rhs the right hand side of the subtraction
   */
  export function sub(lhs: AnyDuration, rhs: AnyDuration): AnyDuration {
    const unit = Math.min(lhs.unit, rhs.unit);
    const count = (lhs.count * lhs.unit) / unit - (rhs.count * rhs.unit) / unit;
    return new DurationObject(unit, Math.round(count));
  }

  // #endregion



  // #region comparison

  /**
   * Checks if two {@code Duration}s are the exact same without any rounding errors.
   *
   * @param lhs the left hand side of the equality check
   * @param rhs the right hand side of the equality check
   */
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
  /**
   * Checks if {@code lhs} is shorter than {@code rhs} without any rounding errors. Note that given two negative
   * {@code Duration}s, the more negative {@code Duration} is considered shorter.
   *
   * @param lhs the left hand side of the less than check
   * @param rhs the right hand side of the less than check
   */
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
  /**
   * Checks if {@code lhs} is greater than {@code rhs} without any rounding errors. Note that given two negative
   * {@code Duration}s, the less negative {@code Duration} is considered longer.
   *
   * @param lhs the left hand side of the greater than check
   * @param rhs the right hand side of the greater than check
   */
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

  /**
   * Gets the number of seconds represented by the given {@code Duration}.
   *
   * @param duration the {@code Duration} to convert
   */
  export function valueOf<T extends number>(duration: Duration<T>): number {
    if (Number.isInteger(duration.unit)) {
      return duration.unit * duration.count;
    }
    return duration.count / Math.round(1 / duration.unit);
  }

  /**
   * Gets a human readable string for the given {@code Duration}.
   *
   * @param duration the {@code Duration} to print
   */
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

  /**
   * Clones the given {@code Duration} without loss of precision.
   *
   * @param duration the {@code Duration} to clone
   */
  export function clone<T extends number>(duration: Duration<T>): Duration<T> {
    return new DurationObject(duration.unit, duration.count);
  }

  /**
   * Creates a {@code Duration} that represents {@code count} nanoseconds.
   *
   * @param count the number of nanoseconds
   */
  export function nanoseconds(count: number): Nanoseconds;
  /**
   * Creates a {@code Duration} in nanoseconds which is the same as the given {@code Duration}
   * without loss of precision.
   * 
   * @param duration the {@code Duration} to create from
   */
  export function nanoseconds(duration: AtLeastNanoseconds): Nanoseconds;
  export function nanoseconds(arg: number | AtLeastNanoseconds): Nanoseconds {
    return createDurationObjectFromArg(Unit.Nanosecond, arg);
  }

  /**
   * Creates a {@code Duration} that represents {@code count} microseconds.
   *
   * @param count the number of microseconds
   */
  export function microseconds(count: number): Microseconds;
  /**
   * Creates a {@code Duration} in microseconds which is the same as the given {@code Duration}
   * without loss of precision.
   * 
   * @param duration the {@code Duration} to create from
   */
  export function microseconds(duration: AtLeastMicroseconds): Microseconds;
  export function microseconds(arg: number | AtLeastMicroseconds): Microseconds {
    return createDurationObjectFromArg(Unit.Microsecond, arg);
  }

  /**
   * Creates a {@code Duration} that represents {@code count} milliseconds.
   *
   * @param count the number of milliseconds
   */
  export function milliseconds(count: number): Milliseconds;
  /**
   * Creates a {@code Duration} in milliseconds which is the same as the given {@code Duration}
   * without loss of precision.
   * 
   * @param duration the {@code Duration} to create from
   */
  export function milliseconds(duration: AtLeastMilliseconds): Milliseconds;
  export function milliseconds(arg: number | AtLeastMilliseconds): Milliseconds {
    return createDurationObjectFromArg(Unit.Millisecond, arg);
  }

  /**
   * Creates a {@code Duration} that represents {@code count} seconds.
   *
   * @param count the number of seconds
   */
  export function seconds(count: number): Seconds;
  /**
   * Creates a {@code Duration} in seconds which is the same as the given {@code Duration}
   * without loss of precision.
   * 
   * @param duration the {@code Duration} to create from
   */
  export function seconds(duration: AtLeastSeconds): Seconds;
  export function seconds(arg: number | AtLeastSeconds): Seconds {
    return createDurationObjectFromArg(Unit.Second, arg);
  }

  /**
   * Creates a {@code Duration} that represents {@code count} minutes.
   *
   * @param count the number of minutes
   */
  export function minutes(count: number): Minutes;
  /**
   * Creates a {@code Duration} in minutes which is the same as the given {@code Duration}
   * without loss of precision.
   * 
   * @param duration the {@code Duration} to create from
   */
  export function minutes(duration: AtLeastMinutes): Minutes;
  export function minutes(arg: number | AtLeastMinutes): Minutes {
    return createDurationObjectFromArg(Unit.Minute, arg);
  }

  /**
   * Creates a {@code Duration} that represents {@code count} hours.
   *
   * @param count the number of hours
   */
  export function hours(count: number): Hours;
  /**
   * Creates a {@code Duration} in hours which is the same as the given {@code Duration}
   * without loss of precision.
   * 
   * @param duration the {@code Duration} to create from
   */
  export function hours(duration: AtLeastHours): Hours;
  export function hours(arg: number | AtLeastHours): Hours {
    return createDurationObjectFromArg(Unit.Hour, arg);
  }

  // #endregion



  // #region conversions

  /**
   * Floors the given {@code Duration} to a {@code Duration} of the given unit. The conversion is
   * analogous to {@code Math.floor} and could potentially cause loss of precision.
   *
   * @param unit the unit to convert to
   * @param duration the {@code Duration} to convert
   */
  export function floorTo<T extends number, U extends number>(unit: T, duration: Duration<U>): Duration<T> {
    return createDurationWithConversion(unit, duration, Math.floor);
  }
  /**
   * Ceils the given {@code Duration} to a {@code Duration} of the given unit. The conversion is
   * analogous to {@code Math.ceil} and could potentially cause loss of precision.
   *
   * @param unit the unit to convert to
   * @param duration the {@code Duration} to convert
   */
  export function ceilTo<T extends number, U extends number>(unit: T, duration: Duration<U>): Duration<T> {
    return createDurationWithConversion(unit, duration, Math.ceil);
  }
  /**
   * Rounds the given {@code Duration} to a {@code Duration} of the given unit. The conversion is
   * analogous to {@code Math.round} and could potentially cause loss of precision.
   *
   * @param unit the unit to convert to
   * @param duration the {@code Duration} to convert
   */
  export function roundTo<T extends number, U extends number>(unit: T, duration: Duration<U>): Duration<T> {
    return createDurationWithConversion(unit, duration, Math.round);
  }
  /**
   * Creates a {@code Duration} with the same magnitude as the given {@code Duration}. This conversion is
   * analogous to {@code Math.abs} and has no loss in precision.
   *
   * @param duration the {@code Duration} to get absolute value of
   */
  export function abs<T extends number>(duration: Duration<T>): Duration<T> {
    return new DurationObject(duration.unit, Math.abs(duration.count));
  }
  /**
   * Creates a {@code Duration} from the given {@code Date} to right now, stored in milliseconds
   *
   * @param date the starting point in time
   */
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

/**
 * @hidden
 * @internal
 */
function createDurationObjectFromArg<T extends number, U extends number>(unit: T, arg: number | Duration<U>): Duration<T> {
  let count: number;
  if (typeof arg === 'number') {
    if (!Number.isInteger(arg)) throw TypeError();
    count = arg;
  } else count = (arg.count * arg.unit) / unit;
  return new DurationObject(unit, Math.round(count));
}

/**
 * @hidden
 * @internal
 */
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
