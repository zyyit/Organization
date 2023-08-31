import React from 'react';

const searchById = (userId, testData) => {
  // Type the code for the body of your function or hook here.
  // Functions can be triggered via Button/Touchable actions.
  // Hooks are run per ReactJS rules.

  /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  if (userId != '') {
    return testData.filter(item => item.employee_code === userId);
  } else {
    return testData;
  }
};

export default searchById;
