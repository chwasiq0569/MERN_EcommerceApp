import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './container/Home/Home';
import SignIn from './container/SignIn/SignIn';
import SignUp from './container/SignUp/SignUp';
import PrivateRoute from './components/HOC/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <Layout>
        <h1>CHILDRENS</h1>
      </Layout> */}
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
