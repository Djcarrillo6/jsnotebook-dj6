import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For A NPM Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
};

export default App;