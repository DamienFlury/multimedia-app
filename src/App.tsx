import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import CustomThemeProvider from './providers/CustomThemeProvider';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Technologies from './routes/Technologies';

function App() {
  return (
    <ParallaxProvider>
      <CustomThemeProvider>
        <BrowserRouter>
          <Navigation>
            <Switch>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/technologies">
                <Technologies />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Navigation>
        </BrowserRouter>
      </CustomThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
