// YOUR IMPORTS BELOW:
import warmUp from './utils/warmUp.js';
import * as dateUtils from './utils/dateandtime.js';
import { round, square } from './utils/math.js';
import { mapper, concatArrays } from './utils/arrays.js';
import { iterator, myObject } from './utils/utilities.js';

// YOUR FUNCTION CALLS BELOW:



// WHEN COMPLETE - THIS LINE AND EVERYTHING BELOW SHOULD BE REMOVED
/*
INSTRUCTIONS
1- The only thing that should be in app.js are all of the appropriate imports and all the function calls.
2 - For each category, create a corresponding file. i.e, Strings = strings.js
3 - Put each of the files created in a /utils directory
4 - Each category will have export / import instructions. Read carefully!
*/

//  WARMUP
// Export warmUp() as a 'default'

warmUp(warmUp);

// DATEANDTIME
// Export ALL date and time functions, inline.
// Import  using the * operator (as = allfunctions).

dateUtils.getCurrentTime();
dateUtils.getCurrentDate();


// MATH
// Export all functions individually.
// Import only square and round, using { }.



square(64);

round(6.234);

// ARRAYS
// Keep variables in the arrays file, no need to export.
// Export each function individually.
// Import each function individually using { }.


mapper();
concatArrays();

// UTILITIES
// Export both the function and myObject, inline.
// Import both using the * operator (as = utilities).


iterator(myObject.array);
myObject.greeting('Matt');
