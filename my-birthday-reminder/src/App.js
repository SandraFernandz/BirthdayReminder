import React, { useState } from 'react';
import TodaysBirthday from './TodaysBirthday';
import TodaysDate from './TodaysDate';

function App() {
  const [people, setPeople] = useState('');
  console.log('hi');

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <h4>Today's Date: </h4>
        <TodaysDate />
        <button
          onClick={() => {
            setPeople([people]);
          }}
        >
          Clear all
        </button>
        <TodaysBirthday people={people} />
        <button>Who's birthday is today?</button>
        <div></div>
      </section>
    </main>
  );
}

export default App;
