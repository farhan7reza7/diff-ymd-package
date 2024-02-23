# diff-ymd-package

> `diff-ymd-package` a `javascript library` provides APIs to difference dates in formatted ways(like (`aYears bMonths cDays`) or (`aY bM cD`) etc., eg. age = `20Y 2M 23D` or datesDifference = `2Years 11Months 20Days`) or customized desired formats like `aY-bM-cD` or `aYears-bMonths-cDays` or `kDays` or `mWeeks` or `nMonths` etc.

[![NPM Version][npm-image]][npm-url]
[![npm-build-published][npm-ci-image]][npm-ci-url]
[![github-build-published][github-image]][github-url]
[![CI][ci-image]][ci-url]
[![License][license-image]][licence-url]
[![LinkedIn][linked-image]][linked-url]


## Table of Contents

- [Installation](#installation)
  - [Install from npm registry](#install-from-npm-registrypreference)
  - [Install from Github Packages registry](#install-from-github-packages-registryrequire-authentication)
  - [Include in html page from CDN](#include-in-html-page-from-cdn)
- [Usages](#usages)
- [API References](#api-references)
- [API Documentation](#api-documentation)  
- [Contributing](#contributing)
- [Best Practices](#best-practices)
- [License](#license)
- [History](#history)

## Installation

### Install from `npm registry`(Preference)

```bash
npm install diff-ymd-package

```

### Install from `Github Packages registry`(require authentication)

```bash
npm install @farhan7reza7/diff-ymd-package

```

##### Steps to install from `Github Packages registry`:
[See steps here](https://github.com/farhan7reza7/diff-ymd-package/wiki/Github-Packages-registry-Steps)

### Include in html page from `CDN`

**`OR` for version `2.2.1` and `above`**

**Can include in page `using script tag` from CDN**

```html
    <script src="https://cdn.jsdelivr.net/npm/diff-ymd-package@2.3.2/lib/index.min.js"></script>

```

[Get any supported version script tag](https://github.com/farhan7reza7/diff-ymd-package/wiki/Supported-versions-script-tags)

## Usages

### `Initialize:`

```javascript
//const DatesYMD = require('@farhan7reza7/diff-ymd-package'); //or

const DatesYMD = require('diff-ymd-package'); // can use any if authenticated

```

**`OR` for version `2.2.1` and `above`**

**Can include in html page `using script tag` from `CDN`**

```html
    <script src="https://cdn.jsdelivr.net/npm/diff-ymd-package@2.3.2/lib/index.min.js"></script>

```

### `Create an instance:`

```javascript
const date1 = '2022-01-01';
const date2 = '2023-12-31';

const Formatter = new DatesYMD(date1, date2);
```

**`OR` for version 2.x.x and above**

**Can use simplified function `diffDates` on module-object(DatesYMD here)**

```javascript
const date1 = '2022-01-01';
const date2 = '2023-12-31';

const Formatter = DatesYMD.diffDates(date1, date2); // can use any
```

**Note:** For CDN based, only **DatesYMD** constructor name creates an instance, and can use diffDates as well, but only using global **DatesYMD** like **DatesYMD.diffDates(...)**

[See an example of using CDN based](https://github.com/farhan7reza7/diff-ymd-package/wiki/CDN-based-example)

### `Use methods to format difference:`
 
```javascript
// format output in aY bM cD format
const result = Formatter.formattedYMD(); // Output: "1Y 11M 30D"

// create format of your choice
const customizedFormat = Formatter.customizeFormat('Y', 'Ms', 'Ds', '-'); // Output: "1Y-11Ms-30Ds"

// return an array having years, months, days, and the formatted difference
const resultArray = Formatter.diffArray(); // Output: [1, 11, 30, '1Y 11M 30D']

// Calculate the difference in months
const monthsDifference = Formatter.diffInMonths(); // Output: 23

// Calculate the difference in weeks
const weeksDifference = Formatter.diffInWeeks(); // Output: 104

// Calculate the difference in days
const daysDifference = Formatter.diffInDays(); // Output: 729

// Calculate the difference in years
const yearsDifference = Formatter.diffInYears(); // Output: 1

// Calculate the difference in hours
const hoursDifference = Formatter.diffInHours(); // Output: 17496

// Calculate the difference in minutes
const minutesDifference = Formatter.diffInMinutes(); // Output: 1049760

// Calculate the difference in seconds
const secondsDifference = Formatter.diffInSeconds(); // Output: 62985600
```
**Get `Built in  codes` `for using` diff-ymd-package `any Method` on `created instance(Formatter)`**

[Get Built in codes here](https://github.com/farhan7reza7/diff-ymd-package/wiki/Built-in--codes)

### `Formatted Outputs:`

```javascript
console.log(result); // Output: "1Y 11M 30D"
// formatted output in aY bM cD format

console.log(customizedFormat); // Output: "1Y-11Ms-30Ds"
// you can use this method for creating format of your choice

console.log(resultArray); // Output: [1, 11, 30, '1Y 11M 30D']
/* you can access each of Y, M, D separately from output array and can format as per your choice like aY-bM-cD or aYears-bMonths-cDays etc.*/

/*example: 
let Y, M, D;

Y = resultArray[0];
M = resultArray[1];
D = resultArray[2];

const customFormat = Y + 'year ' + M + 'months ' + D + 'days';
console.log(customFormat); // output: 1year 11months 30days
*/

console.log(monthsDifference); // Output: 23
// Calculate the difference in months

console.log(weeksDifference); // Output: 104
// Calculate the difference in weeks

console.log(daysDifference); // Output: 729
// Calculate the difference in days

console.log(yearsDifference); // Output: 1
// Calculate the difference in years

console.log(hoursDifference); // Output: 17496
// Calculate the difference in hours

console.log(minutesDifference); // Output: 1049760
// Calculate the difference in minutes

console.log(secondsDifference); // Output: 62985600
// Calculate the difference in seconds
```

## API References
**diff-ymd-package**
- [Classes](#api-documentation)
  - [DatesYMD](#datesymd)
    - [Create an instance of DatesYMD](#create-an-instance-of-datesymd)
    - [OR for version 2.x.x and above, Can use simplified function diffDates on module-object](#can-use-simplified-function-diffdates-on-module-object)
    - [Methods](#methods)
        - [diffArray()](#diffarray)
        - [formattedYMD()](#formattedymd)
        - [customizeFormat(yearUnit, monthUnit, dayUnit, partSeparator)](#customizeformatyearunit-monthunit-dayunit-partseparator)
        - [diffInMonths()](#diffinmonths)
        - [diffInWeeks()](#diffinweeks)
        - [diffInDays()](#diffindays)
        - [diffInYears()](#diffinyears)
        - [diffInHours()](#diffinhours)
        - [diffInMinutes()](#diffinminutes)
        - [diffInSeconds()](#diffinseconds)
    
## API Documentation

### `DatesYMD`

Represents a utility class for calculating the formatted and desired customized difference between two dates in all cases.

#### Create an instance of `DatesYMD`:

```javascript
const Formatter = new DatesYMD(firstDate, secondDate);
```

#### `OR` for version 2.x.x and above
##### Can use simplified function `diffDates` on module-object

```javascript
//const DatesYMD = require('@farhan7reza7/diff-ymd-package'); or
const DatesYMD = require('diff-ymd-package');

const Formatter = DatesYMD.diffDates(firstDate, secondDate); // can use any
```

- **`firstDate`**: The first date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or 'yyyy.mm.dd' or dateString or dateObject
  or Timestamp(epoch).

- **`secondDate`**: The second date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or 'yyyy.mm.dd' or dateString or dateObject
  or Timestamp(epoch).

- **Special case:** empty string("" or '') is by default to current-date(today) for the parameters

- **`Returns:`**
  An instance of DatesYMD class.


### `Methods:`

- #### `diffArray()`

Calculates the difference between two dates and returns an array containing Y(years), M(months), D(days), and a formatted 'aY bM cD' difference string.

```javascript
const result = Formatter.diffArray();
```

**`Returns:`**
An array containing the calculated years, months, days, and the formatted difference.


- #### `formattedYMD()`

Returns the formatted difference between two dates in aY bM cD(aYears bMonths cDays) format.

```javascript
const result = Formatter.formattedYMD();
```

**`Returns:`** A string in the format 'aY bM cD'.


- #### `customizeFormat(yearUnit, monthUnit, dayUnit, partSeparator)`

Customizes the difference using specified units and separators

```javascript
const result = Formatter.customizeFormat(
  yearUnit,
  monthUnit,
  dayUnit,
  partSeparator,
);
```

**`Returns:`** A customized formatted difference string of form (a + yearUnit + partSeparator + b + monthUnit + partSeparator + c + dayUnit), eg. aYs-bMs-cDs etc.


- #### `diffInMonths()`

Calculates the difference in months between two dates.

```javascript
const monthsDifference = Formatter.diffInMonths();
```

**Returns:** The difference in months.


- #### `diffInWeeks()`

Calculates the difference in weeks between two dates.

```javascript
const weeksDifference = Formatter.diffInWeeks();
```

**Returns:** The difference in weeks.


- #### `diffInDays()`

Calculates the difference in days between two dates.

```javascript
const daysDifference = Formatter.diffInDays();
```

**Returns:** The difference in days.


- #### `diffInYears()`

Calculates the difference in years between two dates.

```javascript
const yearsDifference = Formatter.diffInYears();
```

**Returns:** The difference in years.


- #### `diffInHours()`

Calculates the difference in hours between two dates.

```javascript
const hoursDifference = Formatter.diffInHours();
```

**Returns:** The difference in hours.


- #### `diffInMinutes()`

Calculates the difference in minutes between two dates.

```javascript
const minutesDifference = Formatter.diffInMinutes();
```

**Returns:** The difference in minutes.


- #### `diffInSeconds()`

Calculates the difference in seconds between two dates.

```javascript
const secondsDifference = Formatter.diffInSeconds();
```

**Returns:** The difference in seconds.<br>

### `For more information:`
[See `diff-ymd-package Documentation`](https://farhan7reza7.github.io/diff-ymd-package/global.html)

## Contributing

If you find any issues or have suggestions for improvement, please open an issue or create a pull request on the GitHub repository.

[See CONTRIBUTING guidelines](https://github.com/farhan7reza7/diff-ymd-package/blob/main/CONTRIBUTING.md) for more information.

## Best Practices:

### The code adheres to recommended practices for readability and maintainability, including:

- Meaningful variable and function names for clarity.
- Clear and concise comments to enhance understanding.
- Proper indentation and formatting for visual organization.

[See mdn guidelines](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript) for more information.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

[See License](https://github.com/farhan7reza7/diff-ymd-package/blob/main/LICENSE)

## History

For more details about what has changed in each version of this project.  

[See CHANGELOG](https://github.com/farhan7reza7/diff-ymd-package/blob/main/CHANGELOG.md)

[npm-image]: https://img.shields.io/npm/v/diff-ymd-package
[npm-url]: https://www.npmjs.com/package/diff-ymd-package
[npm-ci-image]: https://github.com/farhan7reza7/diff-ymd-package/actions/workflows/npm-publish-npm-registry.yml/badge.svg
[npm-ci-url]: https://github.com/farhan7reza7/diff-ymd-package/actions/workflows/npm-publish-npm-registry.yml
[github-image]: https://github.com/farhan7reza7/diff-ymd-package/actions/workflows/npm-publish-github-packages.yml/badge.svg
[github-url]: https://github.com/farhan7reza7/diff-ymd-package/actions/workflows/npm-publish-github-packages.yml
[ci-image]: https://github.com/farhan7reza7/diff-ymd-package/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main
[ci-url]: https://github.com/farhan7reza7/diff-ymd-package/actions/workflows/pages/pages-build-deployment
[license-image]: https://img.shields.io/github/license/farhan7reza7/diff-ymd-package
[licence-url]: https://opensource.org/licenses/MIT
[linked-image]: https://img.shields.io/badge/LinkedIn-FarhanReza-blue
[linked-url]: https://www.linkedin.com/in/farhan7reza7/
