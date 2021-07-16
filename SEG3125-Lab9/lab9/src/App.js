import Navbar from './Navbar';
import Home from './Home';
import Register from './Register';
import ContactUs from './ContactUs';
import InformativeVideos from './InformativeVideos';
import { Suspense } from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading... </div>}>
          <Navbar />
        </Suspense>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/informative-videos">
              <InformativeVideos />
            </Route>
            <Route exact path="/contact-us">
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
