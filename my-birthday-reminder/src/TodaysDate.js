import React from 'react';

const TodaysDate = ({ people }) => {
  let currDate = new Date();
  let newDate = currDate.getDate();
  let newDate1 = newDate < 10 ? `0${newDate}` : `${newDate}`;
  let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Auguts',
    'September',
    'October',
    'November',
    'December',
  ];
  let currentMonth = month[currDate.getMonth()];
  let actualDate = `${newDate1} ${currentMonth}`;
  console.log(actualDate);
  return actualDate;
};

export default TodaysDate;
