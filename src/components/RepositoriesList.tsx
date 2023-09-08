import React, { useState } from "react";
import useActions from "../hooks/useActions";

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

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
