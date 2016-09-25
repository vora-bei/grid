// Dependencies
import 'velocity-animate';

// Utils
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { initializeStore } from './store/configureStore.js';

// Pages
import Grid from './containers/grid/components/grid.jsx';



const store = initializeStore();


// Main class - App
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Grid/>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
