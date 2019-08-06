import React from 'react';
import Main from './components/main'
import Upload from './components/upload'
import { Route, Switch } from 'react-router-dom'

import './styles/main.css'

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/upload" component={Upload} />
                <Route path="/:id" component={Main} />
            </Switch>
        )
    }
}

export default App;