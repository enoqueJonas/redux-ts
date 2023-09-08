import { store } from './state';
import { Provider } from 'react-redux';
import { RepositoriesList } from './components/RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
