import React, { useState } from "react";
import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { loading, error, data } = useTypedSelector((state) => state.repositories)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
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
