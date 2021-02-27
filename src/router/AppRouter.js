import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import StravaRedirect from '../pages/StravaRedirect'
import ItWorked from '../pages/ItWorked'

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/redirect" component={StravaRedirect}/>
                        <Route path="/itworked" component={ItWorked}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;