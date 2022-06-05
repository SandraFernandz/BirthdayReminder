import React from 'react';
import data from './data';

const TodaysBirthday = () => {
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
  console.log(actualDate, 'hello');

  return (
    <main>
      <section className="container">
        <h3>birthdays today</h3>
        {data.map((person) => {
          if (person.dob === actualDate) {
            return (
              <>
                <div key={person.id}>{console.log(person.name)}</div>
              </>
            );
          } else {
            return null;
          }
        })}
      </section>
    </main>
  );
};

export default TodaysBirthday;
