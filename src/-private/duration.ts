// #region types 

export enum DurationUnitSize {
  Nanosecond = 1e-9,
  Microsecond = 1e-6,
  Millisecond = 1e-3,
  Second = 1,
  Minute = 60,
  Hour = 3600,
}

export interface Duration<Unit extends number> {
  readonly unit: Unit;
  readonly count: number;
}

export type Nanoseconds = Duration<DurationUnitSize.Nanosecond>;
export type Microseconds = Duration<DurationUnitSize.Microsecond>;
export type Milliseconds = Duration<DurationUnitSize.Millisecond>;
export type Seconds = Duration<DurationUnitSize.Second>;
export type Minutes = Duration<DurationUnitSize.Minute>;
export type Hours = Duration<DurationUnitSize.Hour>;

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
    return new DurationObject(unit, count);
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
    return new DurationObject(unit, count);
  }

  // #endregion



  // #region comparison

  export function areEqual<T extends number>(lhs: Duration<T>, rhs: Duration<T>): boolean {
    return lhs.count === rhs.count;
  }
  export function isShorter<T extends number, U extends number>(lhs: Duration<T>, rhs: Duration<U>): boolean {
    return (lhs.count * lhs.unit) < (rhs.count * rhs.unit);
  }
  export function isShorterOrEqual<T extends number>(lhs: Duration<T>, rhs: Duration<T>): boolean {
    return lhs.count <= rhs.count;
  }
  export function isLonger<T extends number, U extends number>(lhs: Duration<T>, rhs: Duration<U>): boolean {
    return (lhs.count * lhs.unit) > (rhs.count * rhs.unit);
  }
  export function isLongerOrEqual<T extends number>(lhs: Duration<T>, rhs: Duration<T>): boolean {
    return lhs.count >= rhs.count;
  }

  export const eql = areEqual;
  export const lt = isShorter;
  export const lte = isShorterOrEqual;
  export const gt = isLonger;
  export const gte = isLongerOrEqual;

  // #endregion



  // #region object-related

  export function valueOf<T extends number>(duration: Duration<T>): number {
    return duration.unit * duration.count;
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
    return createDurationObjectFromArg(DurationUnitSize.Nanosecond, arg);
  }

  export function microseconds(count: number): Microseconds;
  export function microseconds(duration: AtLeastMicroseconds): Microseconds;
  export function microseconds(arg: number | AtLeastMicroseconds): Microseconds {
    return createDurationObjectFromArg(DurationUnitSize.Microsecond, arg);
  }

  export function milliseconds(count: number): Milliseconds;
  export function milliseconds(duration: AtLeastMilliseconds): Milliseconds;
  export function milliseconds(arg: number | AtLeastMilliseconds): Milliseconds {
    return createDurationObjectFromArg(DurationUnitSize.Millisecond, arg);
  }

  export function seconds(count: number): Seconds;
  export function seconds(duration: AtLeastSeconds): Seconds;
  export function seconds(arg: number | AtLeastSeconds): Seconds {
    return createDurationObjectFromArg(DurationUnitSize.Second, arg);
  }

  export function minutes(count: number): Minutes;
  export function minutes(duration: AtLeastMinutes): Minutes;
  export function minutes(arg: number | AtLeastMinutes): Minutes {
    return createDurationObjectFromArg(DurationUnitSize.Minute, arg);
  }

  export function hours(count: number): Hours;
  export function hours(duration: AtLeastHours): Hours;
  export function hours(arg: number | AtLeastHours): Hours {
    return createDurationObjectFromArg(DurationUnitSize.Hour, arg);
  }

  // #endregion



  // #region typecheck

  export function isNanoseconds(duration: Nanoseconds): duration is Nanoseconds;
  export function isNanoseconds<T extends number>(duration: Duration<T>): false;
  export function isNanoseconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationUnitSize.Nanosecond;
  }

  export function isMicroseconds(duration: Microseconds): duration is Microseconds;
  export function isMicroseconds<T extends number>(duration: Duration<T>): false;
  export function isMicroseconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationUnitSize.Microsecond;
  }

  export function isMilliseconds(duration: Milliseconds): duration is Milliseconds;
  export function isMilliseconds<T extends number>(duration: Duration<T>): false;
  export function isMilliseconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationUnitSize.Millisecond;
  }

  export function isSeconds(duration: Seconds): duration is Seconds;
  export function isSeconds<T extends number>(duration: Duration<T>): false;
  export function isSeconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationUnitSize.Second;
  }

  export function isMinutes(duration: Minutes): duration is Minutes;
  export function isMinutes<T extends number>(duration: Duration<T>): false;
  export function isMinutes<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationUnitSize.Minute;
  }

  export function isHours(duration: Hours): duration is Hours;
  export function isHours<T extends number>(duration: Duration<T>): false;
  export function isHours<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationUnitSize.Hour;
  }

  // #endregion
}



// #region privates

export class DurationObject<T extends number> implements Duration<T> {
  public readonly unit: T;
  public readonly count: number;

  constructor(unit: T, count: number) {
    this.unit = unit;
    this.count = Math.round(count);
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
  return new DurationObject(unit, count);
}

// #endregion
