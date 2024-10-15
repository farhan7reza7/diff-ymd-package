declare class DatesYMD {
  constructor(
    firstDate: string | number | Date,
    secondDate: string | number | Date,
  );

  diffArray(): [number, number, number, string];
  formattedYMD(): string;
  customizeFormat(
    yearUnit: string,
    monthUnit: string,
    dayUnit: string,
    partSeparator: string,
  ): string;
  diffInMonths(): number;
  diffInWeeks(): number;
  diffInDays(): number;
  diffInYears(): number;
  diffInHours(): number;
  diffInMinutes(): number;
  diffInSeconds(): number;
}

declare function diffDates(
  firstDate: string | number | Date,
  secondDate: string | number | Date,
): DatesYMD;

// The hybrid CommonJS module export:
declare const diffYMDPackage: typeof DatesYMD & {
  diffDates: typeof diffDates;
};

export = diffYMDPackage;
