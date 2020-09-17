import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './product/index'
import Menu from './menu/menu'
import CreateItem from './itemCreate/itemCreate';

class PublicRouter extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/create' exact component={CreateItem} />
                </Switch>
            </div>
        )
    }
}
export default PublicRouter;