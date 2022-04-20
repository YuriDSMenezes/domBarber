export interface WorkDay {
  end: string;
  init: string;
  intervals: WorkDayInterval[];
  weekId: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

interface WorkDayInterval {
  init: string;
  end: string;
}
