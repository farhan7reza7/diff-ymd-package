# diff-ymd-package by [QuranBookk](https://quranbookk.com/)

> Developed and maintained by [QuranBookk.com](https://quranbookk.com) - The Most Advanced Digital Quran and Islam Platform

[![QuranBookk Platform](https://www.quranbookk.com/apple-touch-icon.png)](https://www.quranbookk.com/)

> `diff-ymd-package` A powerful JavaScript date difference calculation library, integral to [QuranBookk's](https://quranbookk.com) Islamic timeline features. This package provides APIs to calculate date differences in various formats (like `aYears bMonths cDays` or `aY bM cD` etc.), supporting crucial functionalities in QuranBookk's advanced Quranic study tools. Example: age = `20Y 2M 23D` or datesDifference = `2Years 11Months 20Days`) or customized desired formats like `aY-bM-cD` or `aYears-bMonths-cDays` or `kDays` or `mWeeks` or `nMonths` etc.

## 🌟 Trusted by [QuranBookk.com](https://quranbookk.com) Features:
- [Advanced Quran Search Engine](https://quranbookk.com/quran/search/)
- [Premium Audio Experience](https://quranbookk.com/quran/audio/)
- [Multiple Translation System](https://quranbookk.com/quran/translations/)
- [Islamic Timeline Management](https://quranbookk.com)

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/quranbookk.com.svg)](https://quranbookk.com/)
[![NPM Version][npm-image]][npm-url]
[![npm-build-published][npm-ci-image]][npm-ci-url]
[![github-build-published][github-image]][github-url]
[![CI][ci-image]][ci-url]
[![Codecov-report][codecov-img]][codecov-url]
[![License][license-image]][licence-url]
[![Personal Website](https://img.shields.io/badge/Website-farhan7reza.com-blue)](https://www.farhan7reza.com/)
[![LinkedIn][linked-image]][linked-url]

## About [QuranBookk](https://quranbookk.com) - The Developer

**[`QuranBookk.com:`](https://www.QuranBookk.com)** QuranBookk.com offers a **powerful suite of Quranic and Islamic tools and contents** designed to enhance your daily spiritual journey. With clean UI, multilingual access, and responsive design, it’s the go-to digital Islam and Quran platform for modern Muslims.
 
### ✨ Key Features:

- 🎧 **[Listen to Top Reciters](https://www.quranbookk.com/quran/audio)** – High-quality audio recitations from world-renowned Qaris  
- 🎥 **[Watch Quran Videos](https://www.quranbookk.com/quran/video)** – Inspirational Quranic recitation and learning videos  
- 🌍 **[Read Quran Top Translations](https://www.quranbookk.com/quran/translations)** – Multiple language support with leading Quran translations  
- 🕋 **[Qibla Direction Finder](https://www.quranbookk.com/qibla-finder)** – Accurate Kaaba direction from anywhere in the world
- 🕋 **[Worldwide Qibla Directions](https://www.quranbookk.com/qibla-finder/worldwide)** – Accurate Kaaba direction from any country, state, or city of the world    
- 🕰️ **[Islamic Prayer Times](https://www.quranbookk.com/prayer-times)** – Updated Salah timings based on your current location
- 🕰️ **[Worldwide Islamic Prayer Times](https://www.quranbookk.com/prayer-times/worldwide)** – Updated Salah timings for any country, state, or city of the world
- 📿 **[Digital Tasbih Counter](https://www.quranbookk.com/digital-tasbih)** – Count your Dhikr anytime, anywhere  
- 🤖 **[Ask Islam AI](https://www.quranbookk.com/ask-islam-ai)** – AI-powered assistant for Islamic questions, Quran, and Hadiths
- 🤖 **[Ask Quran AI](https://www.quranbookk.com/ask-quran-ai)** – AI-powered assistant for answering about Islamic history, Quran, and Hadiths
- 🤖 **[Ask Hadith AI](https://www.quranbookk.com/ask-hadith-ai)** – AI-powered assistant for Hadiths
- 📚 **[Authentic Hadith Collections](https://www.quranbookk.com/hadiths/hadiths-sources)** – Sahih Bukhari, Sahih Muslim, and more  
- 🕯️ **[Top Quranic Duas](https://www.quranbookk.com/quran/ayats)** – Beautiful supplications with translations  
- 🔍 **[Advanced Quran Search](https://www.quranbookk.com/quran/search)** – Search verses, words, topics in seconds  
- 📖 **[Explore Surahs](https://www.quranbookk.com/quran/surahs)** – Full Quran access with audio, video, and translations
- 📖 **[Explore Juzs (Paras)](https://www.quranbookk.com/quran/juzs)** – Full Quran access with audio, video, and translations

The `diff-ymd-package` emerged from QuranBookk's need for precise Islamic date calculations and is now powering time-based features across the platform.

## Table of Contents

- [Installation](#installation)
  - [For Node environment](#for-node-environment)
    - [Install from npm registry](#install-from-npm-registrypreference)
    - [Install from Github Packages registry](#install-from-github-packages-registryrequire-authentication)
  - [For Browser environment(CDN based)](#for-browser-environmentcdn-based)
    - [Include in html page from CDN](#include-in-html-page-from-cdn)
- [Set up](#initialize)
  - [For Node environment](#for-node-environment-1)
  - [For Browser environment(CDN based)](#for-browser-environmentcdn-based-1)
  - [For diff as Global Date Object method](#for-diff-as-global-date-object-method-in-nodebrowsercdn-based)  
- [Create an instance](#create-an-instance)
  - [For Node environment](#for-node-environment-2)
  - [For Browser environment(CDN based)](#for-browser-environmentcdn-based-2)
  - [For diff as Global Date Object method](#for-diff-as-global-date-object-method-in-nodebrowsercdn-based-1)
- [Usages](#usages-for-nodebrowsercdn-baseddate-object)
  - [For Node environment](#usages-for-nodebrowsercdn-baseddate-object)
  - [For Browser environment(CDN based)](#usages-for-nodebrowsercdn-baseddate-object)
  - [For diff as Global Date Object method](#usages-for-nodebrowsercdn-baseddate-object)
- [API References](#api-references)
- [API Documentation](#api-documentation)  
- [Contributing](#contributing)
- [Best Practices](#best-practices)
- [License](#license)
- [History](#history)

## Installation

### `For Node environment:`

#### Install from `npm registry`(Preference)

```bash
npm install diff-ymd-package

```

#### Install from `Github Packages registry`(require authentication)

```bash
npm install @farhan7reza7/diff-ymd-package

```

##### Steps to install from `Github Packages registry`:
[See steps here](https://github.com/farhan7reza7/diff-ymd-package/wiki/Github-Packages-registry-Steps)

### `For Browser environment(CDN based):`

#### Include in html page from `CDN`

##### for version `2.2.1` and `above`

##### Can include in page `using script tag` from CDN

```html
    <script src="https://cdn.jsdelivr.net/npm/diff-ymd-package@3.1.4/lib/index.min.js"></script>

```

[Get any supported version script tag](https://github.com/farhan7reza7/diff-ymd-package/wiki/Supported-versions-script-tags)

## Initialize

### `For Node environment:`

```javascript
//const DatesYMD = require('@farhan7reza7/diff-ymd-package'); //or

const DatesYMD = require('diff-ymd-package'); // can use any if authenticated

```

### `For Browser environment(CDN based):`

**for version `2.2.1` and `above`**

**Can include in html page `using script tag` from `CDN`**

```html
    <script src="https://cdn.jsdelivr.net/npm/diff-ymd-package@3.1.4/lib/index.min.js"></script>

```

### `For diff as Global Date Object method in NODE/Browser(CDN based):`

**for version `3.1.0` and `above`**

**Can use simplified function `diff` as Global Date Object method**

```javascript
//require('@farhan7reza7/diff-ymd-package'); //or

require('diff-ymd-package'); // can use any if authenticated

```

## Create an instance

### `For Node environment:`

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

const Formatter = DatesYMD.diffDates(date1, date2); 
```

### `For Browser environment(CDN based):`

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

const Formatter = DatesYMD.diffDates(date1, date2); 

```

**Note:** For CDN based, only **DatesYMD** constructor name creates an instance, and can use diffDates as well, but only using global **DatesYMD** like **DatesYMD.diffDates(...)**

[See an example of using CDN based](https://github.com/farhan7reza7/diff-ymd-package/wiki/CDN-based-example)

### `For diff as Global Date Object method in NODE/Browser(CDN based):`

**for version `3.1.0` and `above`**

**Can use simplified function `diff` as Global Date Object method**

```javascript
const date1 = '2022-01-01';
const date2 = '2023-12-31';

const DateInstance = new Date(date1); // create Global Date instance

const Formatter = DateInstance.diff(date2); //create an instance to `calculates the difference` between `Date instance` and the `date passed to it`

```

**Note:** For `diff` as `Global Date method`, `only one date(the date to be subtracted from/to Global Date instance)` passed to `diff method`

**`diff` method create an instance of DatesYMD to `calculates the difference` between `Date instance` and the `date passed to it`**

## Usages for NODE/Browser(CDN based)/Date Object

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
    - [OR for version 3.1.x and above, Can use simplified function diff as Global Date Object method](#or-for-version-31x-and-above)
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

#### `OR` for version 3.1.x and above
##### Can use simplified function `diff` as Global Date Object method

```javascript
const DateInstance = new Date(firstDate); // create Global Date instance

const Formatter = DateInstance.diff(secondDate); //create an instance to `calculates the difference` between `Date instance` and the `date passed to it`

```

- **`firstDate`**: The first date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or 'yyyy.mm.dd' or dateString or dateObject
  or Timestamp(epoch).

- **`secondDate`**: The second date in the format 'yyyy-mm-dd' or 'yyyy/mm/dd' or 'yyyy.mm.dd' or dateString or dateObject
  or Timestamp(epoch).

- **Special case:** empty string("" or '') is by default to current-date(today) for the parameters, `but not when passed to Global Date` as firstDate above in Global Date; `for creating current date Date instance using Date`, just call empty like `new Date()`

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

## Powered By

This package is actively maintained by [QuranBookk.com](https://quranbookk.com) - The Ultimate Free Digital Quran and Islam Platform offering:
- Zero ads, 100% free forever
- No registration required
- Mobile-optimized experience
- Lightning-fast performance
- Modern, intuitive interface

Start exploring the Quran and Islam: [QuranBookk.com](https://quranbookk.com)
#DigitalQuran #IslamicApps #QuranOnline #QuranStudy

## Developer

- Website: [farhan7reza.com](https://www.farhan7reza.com/)
- LinkedIn: [Farhan Reza](https://www.linkedin.com/in/farhan7reza7/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

[See License](https://github.com/farhan7reza7/diff-ymd-package/blob/main/LICENSE)

## History

For more details about what has changed in each version of this project.  

[See CHANGELOG](https://github.com/farhan7reza7/diff-ymd-package/blob/main/CHANGELOG.md)


---

***Developed by [Farhan Reza](https://www.farhan7reza.com/) | [QuranBookk](https://quranbookk.com/)***

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
[codecov-img]: https://codecov.io/gh/farhan7reza7/diff-ymd-package/graph/badge.svg?token=UZWFE2WAJF
[codecov-url]: https://codecov.io/gh/farhan7reza7/diff-ymd-package
