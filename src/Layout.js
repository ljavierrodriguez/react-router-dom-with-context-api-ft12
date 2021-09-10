import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import injectContext from './store/appContext';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';


const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/contact/:name">
                    <Contact />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                {/* <Route exact path="/about/me" component={About} /> */}
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Home} />
                {/* <Route render={() => {
                    return (
                        <h1>Not Found</h1>
                    )
                }} /> */}

                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);