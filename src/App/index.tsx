import React, { ReactElement } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

const App = (): ReactElement => (
    <BrowserRouter>
    <Switch>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
    </BrowserRouter>
);

export default App;