// Import the exported codes(class: DatesYMD, and closure: diffDates) from source codes file
const diffCalculator = require('../src/diff-ymd');

// Given dates for testing
const date1 = '2022-01-01';
const date2 = '2023-02-15';

// Create an instance of DatesYMD for testing
const differ = new diffCalculator(date1, date2);

// Describe block for the diffCalculator class
describe('diffCalculator', () => {
  // Test case to check if the difference between two dates is calculated correctly
  test('calculates the difference between two dates', () => {
    // Input dates for the test case
    const date1 = '2022-01-01';
    const date2 = '2023-02-15';

    // Create an instance of the diffCalculator class with the input dates
    const datesYMD = new diffCalculator(date1, date2);
    // Calculate the difference and get the result array
    const diffArray = datesYMD.diffArray();

    // Assert that the calculated difference matches the expected result
    expect(diffArray).toEqual([1, 1, 14, '1Y 1M 14D']);
  });

  // Test case to check if the class handles empty date inputs
  test('handles empty date inputs', () => {
    // Create an instance of the diffCalculator class with empty date inputs
    const datesYMD = new diffCalculator('', '');
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
  test('formats the difference between two dates like aY bM cD', () => {
    // Input dates for the test case
    const date1 = '2021-03-20';
    const date2 = '2022-05-22';

    // Create an instance of the diffCalculator class with the input dates
    const datesYMD = new diffCalculator(date1, date2);
    // Get the formatted difference
    const formattedDifference = datesYMD.formattedYMD();

    // Assert that the formatted difference matches the expected result
    expect(formattedDifference).toBe('1Y 2M 2D');
  });

  // Test case to check if the customized difference is generated correctly
  test('customizes the difference between two dates like (a + yearUnit + partSeparator + b + monthUnit + partSeparator + c + dayUnit), e.g., aYs-bMs-cDs etc.', () => {
    // Input dates for the test case
    const date1 = '2021-03-20';
    const date2 = '2022-05-22';

    // Create an instance of the diffCalculator class with the input dates
    const datesYMD = new diffCalculator(date1, date2);
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

  // Test for diffInMonths()
  test('calculates the difference in months between two dates', () => {
    const monthsDifference = differ.diffInMonths();
    // Assuming date1 to date2 has a difference of 13 months
    expect(monthsDifference).toBe(13);
  });

  // Test for diffInWeeks()
  test('calculates the difference in weeks between two dates', () => {
    const weeksDifference = differ.diffInWeeks();
    // Assuming date1 to date2 has a difference of 56 weeks
    expect(weeksDifference).toBe(58);
  });

  // Test for diffInDays()
  test('calculates the difference in days between two dates', () => {
    const daysDifference = differ.diffInDays();
    // Assuming date1 to date2 has a difference of 410 days
    expect(daysDifference).toBe(410);
  });

  // Test for diffInYears()
  test('calculates the difference in years between two dates', () => {
    const yearsDifference = differ.diffInYears();
    // Assuming date1 to date2 has a difference of 1 year
    expect(yearsDifference).toBe(1);
  });

  // Test for diffInHours()
  test('calculates the difference in hours between two dates', () => {
    const hoursDifference = differ.diffInHours();
    // Assuming date1 to date2 has a difference of 9840 hours
    expect(hoursDifference).toBe(9840);
  });

  // Test for diffInMinutes()
  test('calculates the difference in minutes between two dates', () => {
    const minutesDifference = differ.diffInMinutes();
    // Assuming date1 to date2 has a difference of 590400 minutes
    expect(minutesDifference).toBe(590400);
  });

  // Test for diffInSeconds()
  test('calculates the difference in seconds between two dates', () => {
    const secondsDifference = differ.diffInSeconds();
    // Assuming date1 to date2 has a difference of 35424000 seconds
    expect(secondsDifference).toBe(35424000);
  });
});

// tests for closure function named diffDates
describe('diffDates', () => {
  let dateCalculator;

  beforeEach(() => {
    // Setting up a new instance for each test
    dateCalculator = diffCalculator.diffDates('2022-01-01', '2022-01-15');
  });

  afterEach(() => {
    // Cleaning up after each test
    dateCalculator = null;
  });

  // Test suite for diffArray function
  describe('diffArray', () => {
    test('calculates the difference array correctly', () => {
      // Act
      const result = dateCalculator.diffArray();

      // Assert
      expect(result).toEqual([0, 0, 14, '0Y 0M 14D']);
    });
  });

  // Test suite for formattedYMD function
  describe('formattedYMD', () => {
    test('returns the formatted difference string', () => {
      // Act
      const result = dateCalculator.formattedYMD();

      // Assert
      expect(result).toBe('0Y 0M 14D');
    });
  });

  // Test suite for customizeFormat function
  describe('customizeFormat', () => {
    test('customizes the difference using specified units and separators', () => {
      // Act
      const result = dateCalculator.customizeFormat(
        ' years',
        ' months',
        ' days',
        '-',
      );

      // Assert
      expect(result).toBe('0 years-0 months-14 days');
    });
  });

  // Test suite for diffInMonths function
  describe('diffInMonths', () => {
    test('calculates the difference in months correctly', () => {
      // Act
      const result = dateCalculator.diffInMonths();

      // Assert
      expect(result).toBe(0);
    });
  });

  // Test suite for diffInWeeks function
  describe('diffInWeeks', () => {
    test('calculates the difference in weeks correctly', () => {
      // Act
      const result = dateCalculator.diffInWeeks();

      // Assert
      expect(result).toBe(2);
    });
  });

  // Test suite for diffInDays function
  describe('diffInDays', () => {
    test('calculates the difference in days correctly', () => {
      // Act
      const result = dateCalculator.diffInDays();

      // Assert
      expect(result).toBe(14);
    });
  });

  // Test suite for diffInYears function
  describe('diffInYears', () => {
    test('calculates the difference in years correctly', () => {
      // Act
      const result = dateCalculator.diffInYears();

      // Assert
      expect(result).toBe(0);
    });
  });

  // Test suite for diffInHours function
  describe('diffInHours', () => {
    test('calculates the difference in hours correctly', () => {
      // Act
      const result = dateCalculator.diffInHours();

      // Assert
      expect(result).toBe(336);
    });
  });

  // Test suite for diffInMinutes function
  describe('diffInMinutes', () => {
    test('calculates the difference in minutes correctly', () => {
      // Act
      const result = dateCalculator.diffInMinutes();

      // Assert
      expect(result).toBe(20160);
    });
  });

  // Test suite for diffInSeconds function
  describe('diffInSeconds', () => {
    test('calculates the difference in seconds correctly', () => {
      // Act
      const result = dateCalculator.diffInSeconds();

      // Assert
      expect(result).toBe(1209600);
    });
  });
});
