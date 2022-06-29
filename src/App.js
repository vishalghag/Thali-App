
// import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import PageRoute from './routes/PageRoute';
// import store from './store/store';

function App() {
  return (
    <div className="App">
    {/* <Provider store={store}> */}
    <Navbar/>
    <PageRoute/>
    {/* </Provider> */}
    </div>
  );
}

export default App;
