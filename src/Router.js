import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import Content from './components/content/Content';
import Error from './components/error/Error';
import Header from './components/header/Header';

export default function Router(props) {

   

    return (
        <BrowserRouter>
          <Header />
            <Switch>
                <Route exact path="/"  component={Content}/>
               

                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
  }