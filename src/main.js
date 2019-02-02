import React from "react"
import Home from './components/pages/home/homeContainer'
import Settings from './components/pages/settings/settings'
import { Switch, Route } from "react-router-dom"

const Main = () => (
    <div>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/settings" component={Settings}/>

    </Switch>
    </div>
)

export default Main;