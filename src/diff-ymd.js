/**
 * Represents a javascript class for calculating the difference between two dates in formatted ways like (aY bM cD)(aYears bMonths cDays) or customized desired formats like aY-bM-cD or aYears-bMonths-cDays or nDays or mWeeks etc.
 *
 * @class
 */
class DatesYMD {
  /**
   * Creates an instance of DatesYMD.
   *
   * @constructor
   * @param {string} firstDate (type- String but Number for epoch, and Object for dateObject) - The first date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or yyyy.mm.dd or dateString or dateObject
  or Timestamp(epoch).
   * @param {string} secondDate (type- String but Number for epoch, and Object for dateObject) - The second date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or yyyy.mm.dd or dateString or dateObject
  or Timestamp(epoch).
   */
  constructor(firstDate, secondDate) {
    this.firstDate = firstDate;
    this.secondDate = secondDate;

    // Handle empty date inputs by defaulting to the current date
    this.handleEmpty = function () {
      var firstD, secondD;
      if (this.firstDate === '' && this.secondDate === '') {
        firstD = new Date();
        secondD = new Date();
      } else if (this.firstDate === '') {
        firstD = new Date();
        secondD = new Date(this.secondDate);
      } else if (this.secondDate === '') {
        firstD = new Date(this.firstDate);
        secondD = new Date();
      } else {
        firstD = new Date(this.firstDate);
        secondD = new Date(this.secondDate);
      }
      return [firstD, secondD];
    };

    // Swap dates if the first date is smaller than the second date
    this.swapDates = function (firstD, secondD) {
      if (firstD.getTime() < secondD.getTime()) {
        let negativeHandle = firstD;
        firstD = secondD;
        secondD = negativeHandle;
      }
      return [firstD, secondD];
    };

    // initializing dates difference
    this.initDiff = function () {
      var dates, firstD, secondD;

      // Handle empty date inputs by defaulting to the current date
      dates = this.handleEmpty();
      (firstD = dates[0]), (secondD = dates[1]);

      // Swap dates if the first date is smaller than the second date
      let swapped = this.swapDates(firstD, secondD);
      if (swapped) {
        (firstD = swapped[0]), (secondD = swapped[1]);
      }

      return [firstD, secondD];
    };
  }

  /**
   * Calculates the difference between two dates and returns an array containing Y, M, D, and a formatted 'aY bM cD' difference string.
   *
   * @method
   * @returns {Array} An array containing the calculated years, months, days, and the formatted difference.
   */
  diffArray() {
    var year, month, day, monthAdjuster;
    let firstD, secondD, dates, yearS, yearF, monthS, monthF, dateS, dateF, datesDiff;

    // initializing dates difference
    dates = this.initDiff();
    (firstD = dates[0]), (secondD = dates[1]);

    // Extract year, month, and date components of the two dates
    yearS = secondD.getFullYear();
    yearF = firstD.getFullYear();

    monthS = secondD.getMonth() + 1;
    monthF = firstD.getMonth() + 1;

    dateS = secondD.getDate();
    dateF = firstD.getDate();

    // Calculate the difference in years, months, and days
    if (monthF >= monthS && dateF >= dateS) {
      year = yearF - yearS;
      month = monthF - monthS;
      day = dateF - dateS;
    } else if (monthF < monthS && dateF >= dateS) {
      // Handle the case where the months are different, and the first date's day is greater than or equal to the second date's day
      day = dateF - dateS;
      month = monthF + 12 - monthS;
      year = yearF - 1 - yearS;
    } else if (monthF > monthS && dateF < dateS) {
      // Handle the case where the months are different, and the first date's day is less than the second date's day
      month = monthF - monthS - 1;
      year = yearF - yearS;

      // Save the first last month of monthF for correct aY bM cD following mathematical finding algorithm for calculating aY bM cD correctly like if 2020-05-22 to 2021-03-20, then firstly decide monthAdjuster which is (greaterDate month - 1), that is 03 - 1 = 02, then find month from 20-05 to 21-02(02 is monthAdjuster) i.e 9M, and  then decide days from 2021-02-22 to 2021-03-20
      monthAdjuster = monthF - 1; // for getting intuitively correct - aY bM cD in all cases

      // Further adjustments based on specific conditions
      if (monthAdjuster === 2) {
        // Handle February
        if (yearF % 4 === 0) {
          // Leap year logic
          day = dateF > 29 ? dateF : 29 - dateS + dateF;
        } else {
          // Non-leap year logic
          day = dateF > 28 ? dateF : 28 - dateS + dateF;
        }
      } else if (
        // handle 30 days months
        monthAdjuster === 4 ||
        monthAdjuster === 6 ||
        monthAdjuster === 8 ||
        monthAdjuster === 11
      ) {
        // Handle months with 30 days
        day = dateF > 30 ? dateF : 30 - dateS + dateF;
      } else {
        // Handle months with 31 days
        day = 31 - dateS + dateF;
      }
    } else if (monthF <= monthS && dateF < dateS) {
      // Handle the case where the months are either different or equal, and the first date's day is less than the second date's day
      month = monthF + 11 - monthS;
      year = yearF - 1 - yearS;
      monthAdjuster = monthF - 1; // for getting intuitively correct - aY bM cD

      // Further adjustments based on specific conditions
      if (monthAdjuster === 2) {
        // Handle February
        if (yearF % 4 === 0) {
          // Leap year logic
          day = dateF > 29 ? dateF : 29 - dateS + dateF;
        } else {
          // Non-leap year logic
          day = dateF > 28 ? dateF : 28 - dateS + dateF;
        }
      } else if (
        // handle 30 days months
        monthAdjuster === 4 ||
        monthAdjuster === 6 ||
        monthAdjuster === 8 ||
        monthAdjuster === 11
      ) {
        // Handle months with 30 days
        day = dateF > 30 ? dateF : 30 - dateS + dateF;
      } else {
        // Handle months with 31 days
        day = 31 - dateS + dateF;
      }
    }

    // Format the difference and return the result
    const diffFormat = year + 'Y ' + month + 'M ' + day + 'D';
    datesDiff = [year, month, day, diffFormat];
    return datesDiff;
  }

  /**
   * Returns the formatted difference between two dates.
   *
   * @method
   * @returns {string} The formatted difference in the format 'aY bM cD'.
   */
  formattedYMD() {
    return this.diffArray()[3];
  }

  /**
   * Customizes the difference using specified units and separators like (a + yearUnit + partSeparator + b + monthUnit + partSeparator  + c + dayUnit), eg. aYs-bMs-cDs etc.
   *
   * @method
   * @param {string} yearUnit - The unit for years.
   * @param {string} monthUnit - The unit for months.
   * @param {string} dayUnit - The unit for days.
   * @param {string} partSeparator - The separator between year, month, and day parts.
   * @returns {string} The customized formatted difference.
   */
  customizeFormat(yearUnit, monthUnit, dayUnit, partSeparator) {
    let Y, M, D;
    Y = this.diffArray()[0];
    M = this.diffArray()[1];
    D = this.diffArray()[2];
    const customized =
      Y +
      yearUnit +
      partSeparator +
      M +
      monthUnit +
      partSeparator +
      D +
      dayUnit;
    return customized;
  }

  /**
   * Calculates the difference in months between two dates.
   *
   * @method
   * @returns {number} The difference in months.
   */
  diffInMonths() {
    let ymdArray, year, month;

    // initializing dates difference
    ymdArray = this.diffArray();

    // Extract year, month, and date components of the difference
    (year = ymdArray[0]), (month = ymdArray[1]);

    // calculate months
    const months = year * 12 + month;

    return months;
  }

  /**
   * Calculates the difference in weeks between two dates.
   *
   * @method
   * @returns {number} The difference in weeks.
   */
  diffInWeeks() {
    let dates, weeks, firstD, secondD;

    // initializing dates difference
    dates = this.initDiff();
    (firstD = dates[0]), (secondD = dates[1]);

    // calculate weeks
    weeks = Math.floor(
      (firstD.getTime() - secondD.getTime()) / (7 * 24 * 60 * 60 * 1000),
    );

    return weeks;
  }

  /**
   * Calculates the difference in days between two dates.
   *
   * @method
   * @returns {number} The difference in days.
   */
  diffInDays() {
    let dates, days, firstD, secondD;

    // initializing dates difference
    dates = this.initDiff();
    (firstD = dates[0]), (secondD = dates[1]);

    // calculate days
    days = Math.floor(
      (firstD.getTime() - secondD.getTime()) / (24 * 60 * 60 * 1000),
    );

    return days;
  }

  /**
   * Calculates the difference in years between two dates.
   *
   * @method
   * @returns {number} The difference in years.
   */
  diffInYears() {
    let ymdArray, years;

    // get dates difference array
    ymdArray = this.diffArray();

    // Extract year component of the difference
    years = ymdArray[0];

    return years;
  }

  /**
   * Calculates the difference in hours between two dates.
   *
   * @method
   * @returns {number} The difference in hours.
   */
  diffInHours() {
    let days, hours;

    // get dates difference days
    days = this.diffInDays();

    // calculate hours
    hours = days * 24;

    return hours;
  }

  /**
   * Calculates the difference in minutes between two dates.
   *
   * @method
   * @returns {number} The difference in minutes.
   */
  diffInMinutes() {
    let minutes, hours;

    // get dates difference hours
    hours = this.diffInHours();

    // calculate minutes
    minutes = hours * 60;

    return minutes;
  }

  /**
   * Calculates the difference in seconds between two dates.
   *
   * @method
   * @returns {number} The difference in seconds.
   */
  diffInSeconds() {
    let seconds, minutes;

    // get dates difference minutes
    minutes = this.diffInMinutes();

    // calculate seconds
    seconds = minutes * 60;

    return seconds;
  }
}

/**
 * Represents a utility for calculating the difference between two dates in formatted or desired customized ways.
 *
 * @typedef {Object} DatesYMD
 * @property {Function} diffArray - Calculates the difference between two dates and returns an array containing years, months, days, and a formatted difference string.
 * @property {Function} formattedYMD - Returns the formatted difference between two dates.
 * @property {Function} customizeFormat - Customizes the difference using specified units and separators.
 * @property {Function} diffInMonths - Calculates the difference in months between two dates.
 * @property {Function} diffInWeeks - Calculates the difference in weeks between two dates.
 * @property {Function} diffInDays - Calculates the difference in days between two dates.
 * @property {Function} diffInYears - Calculates the difference in years between two dates.
 * @property {Function} diffInHours - Calculates the difference in hours between two dates.
 * @property {Function} diffInMinutes - Calculates the difference in minutes between two dates.
 * @property {Function} diffInSeconds - Calculates the difference in seconds between two dates.
 */

/**
 * Creates an instance of DatesYMD.
 *
 * @param {string} firstDate (type- String but Number for epoch, and Object for dateObject) - The first date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or yyyy.mm.dd or dateString or dateObject
  or Timestamp(epoch).
 * @param {string} secondDate (type- String but Number for epoch, and Object for dateObject) - The second date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or yyyy.mm.dd or dateString or dateObject
  or Timestamp(epoch).
 *
 * @returns {DatesYMD} An object containing methods for date difference calculations.
 */
function diffDates(firstDate, secondDate) {
  /**
   * Handles empty date inputs by defaulting to the current date.
   *
   * @function
   * @returns {Array} An array containing the first and second date objects.
   */
  function handleEmpty() {
    var firstD, secondD;
    if (firstDate === '' && secondDate === '') {
      firstD = new Date();
      secondD = new Date();
    } else if (firstDate === '') {
      firstD = new Date();
      secondD = new Date(secondDate);
    } else if (secondDate === '') {
      firstD = new Date(firstDate);
      secondD = new Date();
    } else {
      firstD = new Date(firstDate);
      secondD = new Date(secondDate);
    }
    return [firstD, secondD];
  }

  /**
   * Swaps dates if the first date is smaller than the second date.
   *
   * @function
   * @param {Date} firstD - The first date object.
   * @param {Date} secondD - The second date object.
   * @returns {Array} An array containing the first and second date objects.
   */
  function swapDates(firstD, secondD) {
    if (firstD.getTime() < secondD.getTime()) {
      let negativeHandle = firstD;
      firstD = secondD;
      secondD = negativeHandle;
    }
    return [firstD, secondD];
  }

  /**
   * Initializes dates difference.
   *
   * @function
   * @returns {Array} An array containing the first and second date objects.
   */
  function initDiff() {
    let dates, swapped;
    var firstD, secondD;

    // Handle empty date inputs by defaulting to the current date
    dates = handleEmpty();
    [firstD, secondD] = dates;

    // Swap dates if the first date is smaller than the second date
    swapped = swapDates(firstD, secondD);
    if (swapped) {
      [firstD, secondD] = swapped;
    }

    return [firstD, secondD];
  }

  return {
    /**
     * Calculates the difference between two dates and returns an array containing years, months, days, and a formatted difference string.
     *
     * @returns {Array} An array containing the calculated years, months, days, and the formatted difference.
     */
    diffArray: function () {  
      var year, month, day, monthAdjuster;
      let firstD, secondD, dates, yearS, yearF, monthS, monthF, dateS, dateF, datesDiff;
      
      // initializing dates difference
      dates = initDiff();
      (firstD = dates[0]), (secondD = dates[1]);

      // Extract year, month, and date components of the two dates
      yearS = secondD.getFullYear();
      yearF = firstD.getFullYear();

      monthS = secondD.getMonth() + 1;
      monthF = firstD.getMonth() + 1;

      dateS = secondD.getDate();
      dateF = firstD.getDate();

      // Calculate the difference in years, months, and days
      if (monthF >= monthS && dateF >= dateS) {
        year = yearF - yearS;
        month = monthF - monthS;
        day = dateF - dateS;
      } else if (monthF < monthS && dateF >= dateS) {
        // Handle the case where the months are different, and the first date's day is greater than or equal to the second date's day
        day = dateF - dateS;
        month = monthF + 12 - monthS;
        year = yearF - 1 - yearS;
      } else if (monthF > monthS && dateF < dateS) {
        // Handle the case where the months are different, and the first date's day is less than the second date's day
        month = monthF - monthS - 1;
        year = yearF - yearS;

        // Save the first last month of monthF for correct aY bM cD following mathematical finding algorithm for calculating aY bM cD correctly like if 2020-05-22 to 2021-03-20, then firstly decide monthAdjuster which is (greaterDate month - 1), that is 03 - 1 = 02, then find month from 20-05 to 21-02(02 is monthAdjuster) i.e 9M, and  then decide days from 2021-02-22 to 2021-03-20
        monthAdjuster = monthF - 1; // for getting intuitively correct - aY bM cD in all cases

        // Further adjustments based on specific conditions
        if (monthAdjuster === 2) {
          // Handle February
          if (yearF % 4 === 0) {
            // Leap year logic
            day = dateF > 29 ? dateF : 29 - dateS + dateF;
          } else {
            // Non-leap year logic
            day = dateF > 28 ? dateF : 28 - dateS + dateF;
          }
        } else if (
          // handle 30 days months
          monthAdjuster === 4 ||
          monthAdjuster === 6 ||
          monthAdjuster === 8 ||
          monthAdjuster === 11
        ) {
          // Handle months with 30 days
          day = dateF > 30 ? dateF : 30 - dateS + dateF;
        } else {
          // Handle months with 31 days
          day = 31 - dateS + dateF;
        }
      } else if (monthF <= monthS && dateF < dateS) {
        // Handle the case where the months are either different or equal, and the first date's day is less than the second date's day
        month = monthF + 11 - monthS;
        year = yearF - 1 - yearS;
        monthAdjuster = monthF - 1; // for getting intuitively correct - aY bM cD

        // Further adjustments based on specific conditions
        if (monthAdjuster === 2) {
          // Handle February
          if (yearF % 4 === 0) {
            // Leap year logic
            day = dateF > 29 ? dateF : 29 - dateS + dateF;
          } else {
            // Non-leap year logic
            day = dateF > 28 ? dateF : 28 - dateS + dateF;
          }
        } else if (
          // handle 30 days months
          monthAdjuster === 4 ||
          monthAdjuster === 6 ||
          monthAdjuster === 8 ||
          monthAdjuster === 11
        ) {
          // Handle months with 30 days
          day = dateF > 30 ? dateF : 30 - dateS + dateF;
        } else {
          // Handle months with 31 days
          day = 31 - dateS + dateF;
        }
      }

      // Format the difference and return the result
      const diffFormat = year + 'Y ' + month + 'M ' + day + 'D';
      datesDiff = [year, month, day, diffFormat];
      return datesDiff;
    },

    /**
     * Returns the formatted difference between two dates.
     *
     * @returns {string} The formatted difference in the format 'aY bM cD'.
     */
    formattedYMD: function () {
      return this.diffArray()[3];
    },

    /**
     * Customizes the difference using specified units and separators like (a + yearUnit + partSeparator + b + monthUnit + partSeparator + c + dayUnit), eg. aYs-bMs-cDs etc.
     *
     * @param {string} yearUnit - The unit for years.
     * @param {string} monthUnit - The unit for months.
     * @param {string} dayUnit - The unit for days.
     * @param {string} partSeparator - The separator between year, month, and day parts.
     * @returns {string} The customized formatted difference.
     */
    customizeFormat: function (yearUnit, monthUnit, dayUnit, partSeparator) {
      let Y, M, D;
      Y = this.diffArray()[0];
      M = this.diffArray()[1];
      D = this.diffArray()[2];
      const customized =
        Y +
        yearUnit +
        partSeparator +
        M +
        monthUnit +
        partSeparator +
        D +
        dayUnit;
      return customized;
    },

    /**
     * Calculates the difference in months between two dates.
     *
     * @returns {number} The difference in months.
     */
    diffInMonths: function () {
      let ymdArray, year, month;

      // initializing dates difference
      ymdArray = this.diffArray();

      // Extract year, month, and date components of the difference
      (year = ymdArray[0]), (month = ymdArray[1]);

      // calculate months
      const months = year * 12 + month;

      return months;
    },

    /**
     * Calculates the difference in weeks between two dates.
     *
     * @returns {number} The difference in weeks.
     */
    diffInWeeks: function () {
      let dates, weeks, firstD, secondD;

      // initializing dates difference
      dates = initDiff();
      (firstD = dates[0]), (secondD = dates[1]);

      // calculate weeks
      weeks = Math.floor(
        (firstD.getTime() - secondD.getTime()) / (7 * 24 * 60 * 60 * 1000),
      );

      return weeks;
    },

    /**
     * Calculates the difference in days between two dates.
     *
     * @returns {number} The difference in days.
     */
    diffInDays: function () {
      let dates, days, firstD, secondD;

      // initializing dates difference
      dates = initDiff();
      (firstD = dates[0]), (secondD = dates[1]);

      // calculate days
      days = Math.floor(
        (firstD.getTime() - secondD.getTime()) / (24 * 60 * 60 * 1000),
      );

      return days;
    },

    /**
     * Calculates the difference in years between two dates.
     *
     * @returns {number} The difference in years.
     */
    diffInYears: function () {
      let ymdArray, years;

      // get dates difference array
      ymdArray = this.diffArray();

      // Extract year component of the difference
      years = ymdArray[0];

      return years;
    },

    /**
     * Calculates the difference in hours between two dates.
     *
     * @returns {number} The difference in hours.
     */
    diffInHours: function () {
      let days, hours;

      // get dates difference days
      days = this.diffInDays();

      // calculate hours
      hours = days * 24;

      return hours;
    },

    /**
     * Calculates the difference in minutes between two dates.
     *
     * @returns {number} The difference in minutes.
     */
    diffInMinutes: function () {
      let minutes, hours;

      // get dates difference hours
      hours = this.diffInHours();

      // calculate minutes
      minutes = hours * 60;

      return minutes;
    },

    /**
     * Calculates the difference in seconds between two dates.
     *
     * @returns {number} The difference in seconds.
     */
    diffInSeconds: function () {
      let seconds, minutes;

      // get dates difference minutes
      minutes = this.diffInMinutes();

      // calculate seconds
      seconds = minutes * 60;

      return seconds;
    },
  };
}

// Export the DatesYMD class and closure function diffDates for usages in other modules
module.exports = DatesYMD; // default export for class
module.exports.diffDates = diffDates; // named export for closure
