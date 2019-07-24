import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Landing from '../LandingPage/Landing';
import Team from '../Team/Team';


export default function Routes() {
    return (
        <Switch>
            <Route exact path = '/' component = {Landing} />
            <Route exact path = '/team' component = {Team} />
            <Route path = '/events' component = {null} />
            <Route path = '/register/:id' component = {null} />
        </Switch>
    )
}