import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Technologies from '../components/pages/technologies/Technologies';
import TechnologiesChallenge from '../components/pages/technologies/TechnologiesChallenge';
import TechnologiesCloud from '../components/pages/technologies/TechnologiesCloud';
import TechnologiesDatabase from '../components/pages/technologies/TechnologiesDatabase';
import TechnologiesWeb from '../components/pages/technologies/TechnologiesWeb';

const TechnologiesRouter = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}`} exact component={ Technologies } />
            <Route path={`${path}/challenge`} component={ TechnologiesChallenge } />
            <Route path={`${path}/cloud`} component={ TechnologiesCloud } />
            <Route path={`${path}/database`} component={ TechnologiesDatabase } />
            <Route path={`${path}/web`} component={ TechnologiesWeb } />
            <Redirect to={`${path}`} />
        </Switch>
    )
}

export default TechnologiesRouter;