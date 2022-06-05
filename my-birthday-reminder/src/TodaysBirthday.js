import React from 'react';

const TodaysBirthday = ({ people }) => {
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
  console.log('hello');

  return (
    <main>
      <section className="container">
        <h3>birthdays today</h3>
        {people.map((person, index) => {
          let personDOB = person.dob;
          if (personDOB === actualDate) {
            return (
              <article key={index} className="person">
                <img src={person.image} alt={person.name} />
                <div>
                  <h4>{person.name}</h4>
                </div>
              </article>
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
