# diff-ymd-package

[![pages-build-deployment](https://github.com/farhan7reza7/diff-ymd-package/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/farhan7reza7/diff-ymd-package/actions/workflows/pages/pages-build-deployment)

[![License](https://img.shields.io/github/license/farhan7reza7/diff-ymd-package)](https://opensource.org/licenses/MIT)

diff-ymd-package provides api to difference dates in formatted ways(like (aYears bMonths cDays) or (aY bM cD), eg. age = 20Y 2M 23D or datesDifference = 2Years 11Months 20Days)

## Installation

```bash
npm install my-api-package

```

## Usage

```javascript
const DatesYMD = require('diff-ymd-package');

const date1 = '2022-01-01';
const date2 = '2023-12-31';

const calculator = new DatesYMD(date1, date2);
const result = calculator.formattedYMD();
const resultArray = calculator.diffArray();

console.log(result); // Output: "1Y 11M 30D"
console.log(resultArray); // Output: [1, 11, 30, '1Y 11M 30D']

```
## API Documentation  

### `DatesYMD`
Represents a utility class for calculating the difference between two dates.

#### Create an instance of `DatesYMD`:
```javascript
const calculator = new DatesYMD(firstDate, secondDate);

```
- **`firstDate`**: The first date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or 'yyyy.mm.dd'.
- **`secondDate`**: The second date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or 'yyyy.mm.dd'.


#### Methods:

**`diffArray`**
Calculates the difference between two dates and returns an array containing Y(years), M(months), D(days), and a formatted 'aY bM cD' difference string.

```javascript
const result = calculator.diffArray();

```
- **`Returns:`**
An array containing the calculated years, months, days, and the formatted difference.


**`formattedYMD()`**
Returns the formatted difference between two dates in aYears bMonths cDays(aY bM cD) format.

```javascript
const result = calculator.formattedYMD();

```
- **`Returns:`** A string in the format 'aY bM cD'.


[For more information, check out diff-ymd-package documentation](https://farhan7reza7.github.io/diff-ymd-package/DatesYMD.html)

## Contributing
If you find any issues or have suggestions for improvement, please open an issue or create a pull request on the GitHub repository.

## License
- This project is licensed under the MIT License - see the LICENSE file for details.
[License here](https://github.com/farhan7reza7/diff-ymd-package/blob/main/LICENSE)

## Important Links

- For more details about what has changed in each version of this project, please see the CHANGELOG.  
[CHANGELOG here](https://github.com/farhan7reza7/diff-ymd-package/blob/main/CHANGELOG.md)



