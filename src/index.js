import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router'
//import PresentationPage from 'views/PresentationPage/PresentationPage.js'
import 'assets/scss/material-kit-pro-react.scss?v=1.10.0'

const hist = createBrowserHistory()
const PresentationPage = lazy(() => import('views/PresentationPage/PresentationPage.js'))

ReactDOM.render(
  <Suspense fallback={null}>
    <Router history={hist}>
      <Switch>
        <Route path='/' component={PresentationPage} />
      </Switch>
    </Router>
  </Suspense>,
  document.getElementById('root')
)
