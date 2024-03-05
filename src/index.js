/**
 * Represents a javascript class for calculating the difference between two dates in formatted ways like (aY bM cD)(aYears bMonths cDays) or customized desired formats like aY-bM-cD or aYears-bMonths-cDays or nDays or mWeeks etc.
 *
 * @class
 */
const DatesYMD = require('./DatesYMD');

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
const diffDates = require('./diff-dates');

/**
 * Makes the `diff` method available as the method of the Date object on importing the diff-ymd-package.
 *
 * This method creates an instance of DatesYMD to calculates the difference between Date instance and the passed date.
 *
 * @function
 * @memberof Date.prototype
 * @name diff
 * @param {string} date (type- String but Number for epoch, and Object for dateObject) - The date to be differed, in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or yyyy.mm.dd or dateString or dateObject or Timestamp(epoch).
 * @returns {DatesYMD} An object containing methods for date difference calculations.
 */
export function config(Date) {
  Date.prototype.diff = function (date) {
    return diffDates(this, date);
  } 
};

// Export the DatesYMD class and equivalent function diffDates for usages in other modules
//module.exports = DatesYMD; // default export for class
module.exports.diffDates = diffDates; // named export for equivalent function
module.exports.config = config; // named export for integrating to Date
