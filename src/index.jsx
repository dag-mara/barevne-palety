import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes.js';
import Palette from './components/palette';

const App = () => {
  return (
    <>
      <div className="container">
        <header>
          <h1>Barevné palety</h1>
        </header>
        <main>
          {palettes.map((palette) => (
            <Palette key={palette.name} name={palette.name} description={palette.description} image={palette.image} colors={palette.colors} attribution={palette.attribution} direction={palette.direction} />
          ))}
        </main>
        <footer>
          <p>Czechitas, Digitální akademie: Web</p>
        </footer>
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(
    <App />
);
