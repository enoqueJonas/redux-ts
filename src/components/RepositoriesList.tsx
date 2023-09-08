import React, { useState } from "react";

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  );
};
