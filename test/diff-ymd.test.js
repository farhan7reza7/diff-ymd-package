// dates-ymd.test.js

const DatesYMD = require('../src/diff-ymd');

describe('DatesYMD', () => {
  test('should calculate the difference between two dates', () => {
    const date1 = '2022-01-01';
    const date2 = '2023-02-15';

    const datesYMD = new DatesYMD(date1, date2);
    const diffArray = datesYMD.diffArray();

    expect(diffArray).toEqual([1, 1, 14, '1Y 1M 14D']);
  });

  test('should handle empty date inputs', () => {
    const datesYMD = new DatesYMD('', '');
    const diffArray = datesYMD.diffArray();

    // Assuming the current date is used for empty inputs
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    expect(diffArray).toEqual([0, 0, 0, `0Y 0M 0D`]);
  });

  test('should format the difference between two dates like aY bM cD', () => {
    const date1 = '2021-03-20';
    const date2 = '2022-05-22';

    const datesYMD = new DatesYMD(date1, date2);
    const formattedDifference = datesYMD.formattedYMD();

    expect(formattedDifference).toBe('1Y 2M 2D');
  });
});
