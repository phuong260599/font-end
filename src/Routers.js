import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import PublicRouter from './public/publicRouter';
import AdminRouter from './admin/adminRouter';

class Routers extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={PublicRouter} />
                    <Route path='/admin' component={AdminRouter} />
                </Switch>
            </div>
        )
    }
}
export default Routers;