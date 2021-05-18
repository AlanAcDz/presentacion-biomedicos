import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/layout/Header';
import AboutMe from '../components/pages/AboutMe';
import Advantages from '../components/pages/Advantages';
import ExampleRouter from './ExampleRouter';
import TechnologiesRouter from './TechnologiesRouter';

const AppRouter = () => {
    return (
        <Router>
            <Header/>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={ AboutMe } />
                    <Route path="/advantages" component={ Advantages } />
                    <Route path="/example" component={ ExampleRouter } />
                    <Route path="/technologies" component={ TechnologiesRouter } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
