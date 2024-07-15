
export type CalendarEvent = {
    type: string;
    description?: string;
    date: string | null;
    time?: string;
  };
  export type CalendarDay = {
    key: number;
    isToday: boolean;
    className: string;
    onClick: () => false | void;
    text: number;
    events: CalendarEvent[];
  };
  