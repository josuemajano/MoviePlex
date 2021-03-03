import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import Popular from './pages/Popular/Popular';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
    <GlobalStyle/>
    <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/popular" exact component={Popular} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
