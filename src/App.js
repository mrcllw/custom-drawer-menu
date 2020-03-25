import React from 'react';
import { registerRootComponent } from 'expo';
import Navigation from './navigation';

function App() {
  return <Navigation />
}

registerRootComponent(App);