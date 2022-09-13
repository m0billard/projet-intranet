import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Survey from './components/Survey'

ReactDOM.render((
        <Router>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/survey">
                <Survey />
            </Route>
        </Router>
), document.getElementById('app'))
