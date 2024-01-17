// dates-ymd.test.js

// Import the DatesYMD class from your source code
const DatesYMD = require('../src/diff-ymd');

// Describe block for the DatesYMD class
describe('DatesYMD', () => {
  // Test case to check if the difference between two dates is calculated correctly
  test('should calculate the difference between two dates', () => {
    // Input dates for the test case
    const date1 = '2022-01-01';
    const date2 = '2023-02-15';

    // Create an instance of the DatesYMD class with the input dates
    const datesYMD = new DatesYMD(date1, date2);
    // Calculate the difference and get the result array
    const diffArray = datesYMD.diffArray();

    // Assert that the calculated difference matches the expected result
    expect(diffArray).toEqual([1, 1, 14, '1Y 1M 14D']);
  });

  // Test case to check if the class handles empty date inputs
  test('should handle empty date inputs', () => {
    // Create an instance of the DatesYMD class with empty date inputs
    const datesYMD = new DatesYMD('', '');
    // Calculate the difference and get the result array
    const diffArray = datesYMD.diffArray();

    // Assuming the current date is used for empty inputs
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // Assert that the calculated difference matches the expected result for empty inputs
    expect(diffArray).toEqual([0, 0, 0, `0Y 0M 0D`]);
  });

  // Test case to check if the formatted difference is generated correctly
  test('should format the difference between two dates like aY bM cD', () => {
    // Input dates for the test case
    const date1 = '2021-03-20';
    const date2 = '2022-05-22';

    // Create an instance of the DatesYMD class with the input dates
    const datesYMD = new DatesYMD(date1, date2);
    // Get the formatted difference
    const formattedDifference = datesYMD.formattedYMD();

    // Assert that the formatted difference matches the expected result
    expect(formattedDifference).toBe('1Y 2M 2D');
  });

  // Test case to check if the customized difference is generated correctly
  test('should customized the difference between two dates like (a + yearUnit + partSeparator + b + monthUnit + partSeparator + c + dayUnit), eg. aYs-bMs-cDs etc.', () => {
    // Input dates for the test case
    const date1 = '2021-03-20';
    const date2 = '2022-05-22';

    // Create an instance of the DatesYMD class with the input dates
    const datesYMD = new DatesYMD(date1, date2);
    // Get the customized difference
    const customizedDifference = datesYMD.customizeFormat(
      'Ys',
      'Ms',
      'Ds',
      '-',
    );

    // Assert that the customized difference matches the expected result
    expect(customizedDifference).toBe('1Ys-2Ms-2Ds');
  });
});
