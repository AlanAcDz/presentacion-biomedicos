import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import ExampleBreakdown from '../components/pages/example/ExampleBreakdown';
import ExampleProduct from '../components/pages/example/ExampleProduct';
import ExamplePrototype from '../components/pages/example/ExamplePrototype';

const ExampleRouter = () => {
    const { path } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${path}/breakdown`} component={ ExampleBreakdown } />
                <Route path={`${path}/prototype`} component={ ExamplePrototype } />
                <Route path={`${path}/product`} component={ ExampleProduct } />
                <Redirect to={`${path}/breakdown`} />
            </Switch>
        </div>
    )
}

export default ExampleRouter;
