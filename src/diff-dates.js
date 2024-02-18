//const DatesYMD = require('./DatesYMD');
import DatesYMD from "./DatesYMD";

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
export default function diffDates(firstDate, secondDate) {
  const YMD = new DatesYMD(firstDate, secondDate); 
  return YMD;
}

// Export the function diffDates for usages in other modules
//module.exports = diffDates;
