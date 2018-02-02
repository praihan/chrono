export enum DurationSize {
  Nanosecond = 1e-9,
  Microsecond = 1e-6,
  Millisecond = 1e-3,
  Second = 1,
  Minute = 60,
  Hour = 3600,
}

export interface Duration<Unit extends number> {
  readonly unit: Unit;
  count: number;
}

export class DurationObject<T extends number> implements Duration<T> {
  get unit() { return this._unit; }
  get count() { return this._count; }
  set count(value) { this._count = Math.round(value); }

  private _unit: T;
  private _count: number;

  constructor(unit: T, count: number) {
    this._unit = unit;
    this._count = Math.round(count);
  }
  valueOf() { return Duration.valueOf(this); }
  toString() { return Duration.toString(this); }
}

export type Nanoseconds = Duration<DurationSize.Nanosecond>;
export type Microseconds = Duration<DurationSize.Microsecond>;
export type Milliseconds = Duration<DurationSize.Millisecond>;
export type Seconds = Duration<DurationSize.Second>;
export type Minutes = Duration<DurationSize.Minute>;
export type Hours = Duration<DurationSize.Hour>;

export namespace Duration {

  export function assign(dest: Nanoseconds, source: Nanoseconds | Microseconds | Milliseconds | Seconds | Minutes | Hours): Nanoseconds;
  export function assign(dest: Microseconds, source: Microseconds | Milliseconds | Seconds | Minutes | Hours): Microseconds;
  export function assign(dest: Milliseconds, source: Milliseconds | Seconds | Minutes | Hours): Milliseconds;
  export function assign(dest: Seconds, source: Seconds | Minutes | Hours): Seconds;
  export function assign(dest: Minutes, source: Minutes | Hours): Minutes;
  export function assign(dest: Hours, source: Hours): Hours;
  export function assign<T extends number, U extends number>(dest: Duration<T>, source: Duration<U>): Duration<T> {
    dest.count = (source.count * source.unit) / dest.unit;
    return dest;
  }

  export function add(dest: Nanoseconds, source: Nanoseconds | Microseconds | Milliseconds | Seconds | Minutes | Hours): Nanoseconds;
  export function add(dest: Microseconds, source: Microseconds | Milliseconds | Seconds | Minutes | Hours): Microseconds;
  export function add(dest: Milliseconds, source: Milliseconds | Seconds | Minutes | Hours): Milliseconds;
  export function add(dest: Seconds, source: Seconds | Minutes | Hours): Seconds;
  export function add(dest: Minutes, source: Minutes | Hours): Minutes;
  export function add(dest: Hours, source: Hours): Hours;
  export function add<T extends number, U extends number>(dest: Duration<T>, source: Duration<U>): Duration<T> {
    dest.count += (source.count * source.unit) / dest.unit;
    return dest;
  }

  export function sub(dest: Nanoseconds, source: Nanoseconds | Microseconds | Milliseconds | Seconds | Minutes | Hours): Nanoseconds;
  export function sub(dest: Microseconds, source: Microseconds | Milliseconds | Seconds | Minutes | Hours): Microseconds;
  export function sub(dest: Milliseconds, source: Milliseconds | Seconds | Minutes | Hours): Milliseconds;
  export function sub(dest: Seconds, source: Seconds | Minutes | Hours): Seconds;
  export function sub(dest: Minutes, source: Minutes | Hours): Minutes;
  export function sub(dest: Hours, source: Hours): Hours;
  export function sub<T extends number, U extends number>(dest: Duration<T>, source: Duration<U>): Duration<T> {
    dest.count -= (source.count * source.unit) / dest.unit;
    return dest;
  }

  export function areEqual<T extends number, U extends number>(lhs: Duration<T>, rhs?: Duration<U>): boolean {
    if (rhs == null) return false;
    const lhsNano = Math.round(lhs.count * lhs.unit / DurationSize.Nanosecond);
    const rhsNano = Math.round(rhs.count * rhs.unit / DurationSize.Nanosecond)
    return lhsNano === rhsNano;
  }

  export function isShorter<T extends number, U extends number>(lhs: Duration<T>, rhs?: Duration<U>): boolean {
    return rhs != null && (lhs.count * lhs.unit) < (rhs.count * rhs.unit);
  }

  export function isLonger<T extends number, U extends number>(lhs: Duration<T>, rhs?: Duration<U>): boolean {
    return rhs != null && (lhs.count * lhs.unit) > (rhs.count * rhs.unit);
  }

  export function clone<T extends number>(duration: Duration<T>): Duration<T> {
    return new DurationObject(duration.unit, duration.count);
  }

  // export function timeSinceEpoch<T extends number>(duration: Duration<T>) {
  //   return duration.count * duration.unit;
  // }

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

  /* tslint:disable:unified-signatures */
  export function nanoseconds(count: number): Nanoseconds;
  export function nanoseconds(duration: Nanoseconds | Microseconds | Milliseconds | Seconds | Minutes | Hours): Nanoseconds;
  export function nanoseconds(arg: number | Nanoseconds | Microseconds | Milliseconds | Seconds | Minutes | Hours): Nanoseconds {
    return createDurationFromArg(DurationSize.Nanosecond, arg);
  }

  export function microseconds(count: number): Microseconds;
  export function microseconds(duration: Microseconds | Milliseconds | Seconds | Minutes | Hours): Microseconds;
  export function microseconds(arg: number | Microseconds | Milliseconds | Seconds | Minutes | Hours): Microseconds {
    return createDurationFromArg(DurationSize.Microsecond, arg);
  }

  export function milliseconds(count: number): Milliseconds;
  export function milliseconds(duration: Milliseconds | Seconds | Minutes | Hours): Milliseconds;
  export function milliseconds(arg: number | Milliseconds | Seconds | Minutes | Hours): Milliseconds {
    return createDurationFromArg(DurationSize.Millisecond, arg);
  }

  export function seconds(count: number): Seconds;
  export function seconds(duration: Seconds | Minutes | Hours): Seconds;
  export function seconds(arg: number | Seconds | Minutes | Hours): Seconds {
    return createDurationFromArg(DurationSize.Second, arg);
  }

  export function minutes(count: number): Minutes;
  export function minutes(duration: Minutes | Hours): Minutes;
  export function minutes(arg: number | Minutes | Hours): Minutes {
    return createDurationFromArg(DurationSize.Minute, arg);
  }

  export function hours(count: number): Hours;
  export function hours(duration: Hours): Hours;
  export function hours(arg: number | Hours): Hours {
    return createDurationFromArg(DurationSize.Hour, arg);
  }
  /* tslint:enable:unified-signatures */

  export function isNanoseconds(duration: Nanoseconds): duration is Nanoseconds;
  export function isNanoseconds<T extends number>(duration: Duration<T>): false;
  export function isNanoseconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationSize.Nanosecond;
  }

  export function isMicroseconds(duration: Microseconds): duration is Microseconds;
  export function isMicroseconds<T extends number>(duration: Duration<T>): false;
  export function isMicroseconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationSize.Microsecond;
  }

  export function isMilliseconds(duration: Milliseconds): duration is Milliseconds;
  export function isMilliseconds<T extends number>(duration: Duration<T>): false;
  export function isMilliseconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationSize.Millisecond;
  }

  export function isSeconds(duration: Seconds): duration is Seconds;
  export function isSeconds<T extends number>(duration: Duration<T>): false;
  export function isSeconds<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationSize.Second;
  }

  export function isMinutes(duration: Minutes): duration is Minutes;
  export function isMinutes<T extends number>(duration: Duration<T>): false;
  export function isMinutes<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationSize.Minute;
  }

  export function isHours(duration: Hours): duration is Hours;
  export function isHours<T extends number>(duration: Duration<T>): false;
  export function isHours<T extends number>(duration: Duration<T>): boolean {
    return duration.unit === DurationSize.Hour;
  }
}

function createDurationFromArg<T extends number, U extends number>(unit: T, arg: number | Duration<U>): Duration<T> {
  let count: number;
  if (typeof arg === 'number') {
    if (!Number.isInteger(arg)) throw TypeError();
    count = arg;
  } else count = (arg.count * arg.unit) / unit;
  return new DurationObject(unit, count);
}
