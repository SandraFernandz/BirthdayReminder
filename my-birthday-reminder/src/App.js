import React, { useState } from 'react';
import TodaysBirthday from './TodaysBirthday';

function App() {
  const [people, setPeople] = useState('');
  console.log('hi');

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear all
        </button>

        <button>Who's birthday is today?</button>
        {}
      </section>
    </main>
  );
}

export default App;
