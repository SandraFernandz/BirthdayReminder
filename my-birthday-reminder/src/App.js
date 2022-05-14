import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  console.log('hi');
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear all
        </button>
        <button onClick={() => {}}>Who's birthday is today?</button>
      </section>
    </main>
  );
}

export default App;
