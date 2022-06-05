import React, { useState } from 'react';
import TodaysBirthday from './TodaysBirthday';
import TodaysDate from './TodaysDate';
import data from './data';

function App() {
  const [people, setPeople] = useState('äji');
  console.log('hi');

  function handleData() {
    setPeople(people);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <h4>Today's Date: </h4>
        <TodaysDate />
        <button>Clear all</button>
        <button onClick={handleData}>Who's birthday is today?</button>
        {people ? (
          <TodaysBirthday data={people} />
        ) : (
          'There are no birthdays today'
        )}
        <div></div>
      </section>
    </main>
  );
}

export default App;
