export interface MapsData {
  battle_royale: {
    current: {
      DurationInMinutes: number;
      DurationInSecs: number;
      asset: string;
      code: string;
      end: number;
      map: string;
      readableDate_end: string;
      readableDate_start: string;
      remainingMins: number;
      remainingSecs: number;
      remainingTimer: string;
      start: number;
    };
    next: {
      start: number;
      end: number;
      readableDate_start: string;
      readableDate_end: string;
      map: string;
      code: string;
      asset: string;
      DurationInMinutes: number;
      DurationInSecs: number;
      remainingMins: number;
      remainingSecs: number;
      remainingTimer: string;
    };
  };
  ranked: {
    current: {
      DurationInMinutes: number;
      DurationInSecs: number;
      asset: string;
      code: string;
      end: number;
      map: string;
      readableDate_end: string;
      readableDate_start: string;
      remainingMins: number;
      remainingSecs: number;
      remainingTimer: string;
      start: number;
    };
    next: {
      start: number;
      end: number;
      readableDate_start: string;
      readableDate_end: string;
      map: string;
      code: string;
      asset: string;
      DurationInMinutes: number;
      DurationInSecs: number;
      remainingMins: number;
      remainingSecs: number;
      remainingTimer: string;
    };
  };
  ltm: {
    current: {
      DurationInMinutes: number;
      DurationInSecs: number;
      asset: string;
      code: string;
      end: number;
      map: string;
      eventName: string;
      readableDate_end: string;
      readableDate_start: string;
      remainingMins: number;
      remainingSecs: number;
      remainingTimer: string;
      start: number;
    };
    next: {
      start: number;
      end: number;
      readableDate_start: string;
      readableDate_end: string;
      map: string;
      eventName: string;
      code: string;
      asset: string;
      DurationInMinutes: number;
      DurationInSecs: number;
      remainingMins: number;
      remainingSecs: number;
      remainingTimer: string;
    };
  };
}
