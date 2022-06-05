import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person, index) => {
        return (
          <article key={index} className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
