import React from 'react';
import HookComponent from './components/HookComponent';
import HookEffectComponent from './components/HookEffectComponent';
import HookCustomComponent from './components/HookCustomComponent';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
        <div className="container">
          <Route path="/class/" component={ClassComponent} />
          <Route path="/function/" component={FunctionComponent} />
          <Route path="/hook/" component={HookComponent} />
          <Route path="/hookeffect/" component={HookEffectComponent} />
          <Route path="/hookcustom/" component={HookCustomComponent} />
        </div>
    </Router>
  );
};
