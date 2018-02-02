export interface Duration<Unit extends number> {
  readonly unit: Unit;
  readonly count: number;
  
  assign<T extends number>(duration: Duration<T>): void;

  add<T extends number>(duration: Duration<T>): void;
  sub<T extends number>(duration: Duration<T>): void;

  isShorter<T extends number>(duration: Duration<T>): void;
  isLonger<T extends number>(duration: Duration<T>): void;

  clone(): Duration<Unit>;
}

export type DurationConstructor<Unit extends number> = {
  readonly unit: Unit;
}

export class Nanoseconds implements Duration<1e-9> {
  static get unit() { return 1e-9 as 1e-9; }

  public get unit() { return Nanoseconds.unit; }
  public get count() { return this.ticks; }

  private ticks: number = 0;

  assign<T extends number>(duration: Duration<T>): void {
    this.ticks = (duration.count * duration.unit) * this.unit;
  }
  add<T extends number>(duration: Duration<T>): void {
    throw new Error("Method not implemented.");
  }
  sub<T extends number>(duration: Duration<T>): void {
    throw new Error("Method not implemented.");
  }
  isShorter<T extends number>(duration: Duration<T>): void {
    throw new Error("Method not implemented.");
  }
  isLonger<T extends number>(duration: Duration<T>): void {
    throw new Error("Method not implemented.");
  }
  clone(): Duration<1e-9> {
    throw new Error("Method not implemented.");
  }
}

export type Microseconds = Duration<1e-6>;
export type Milliseconds = Duration<1e-3>;
export type Seconds = Duration<1>;
export type Minutes = Duration<60>;
export type Hours = Duration<3600>;
