import { Month } from './Components/Month';
import { SettingsProvider, useSettings } from './state/useSettings';
import './App.css'
import { populateMonth, useMonth } from './state/useMonth';
import { useState } from 'react';

const Settings = () => {

  const _settings = useSettings();
  const [settings, _update] = useState(_settings);
  const update = (key, val) => {
    _update({
      ..._settings,
      [key]: val,
    });
  };

  const inputStyle = {
    width: '100%',
    border: 'none',
    padding: '12px',
    background: '#eee',
    boxSizing: 'border-box',
    borderRadius: 0,
    minHeight: 50,
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '2em',
      fontSize: '14px',
      textAlign: 'left',
    }}>

      <label> 
        Artist
        <select
          value={settings.artist}
          style={inputStyle}
          onChange={(e) => update('artist', e.target.value)}
        >
          <option value="Noritake">Noritake</option>
          <option value="Seongryul">Seongryul</option>
        </select>
      </label>

      <label> 
        Header font
        <select
          value={settings.headerFont}
          style={inputStyle}
          onChange={(e) => update('headerFont', e.target.value)}
        >
          <option value="Poppins">Poppins</option>
          <option value="Playfair Display">Playfair Display</option>
        </select>
      </label>

      <label> 
        Body font
        <select
          value={settings.bodyFont}
          style={inputStyle}
          onChange={(e) => update('bodyFont', e.target.value)}
        >
          <option value="Poppins">Poppins</option>
          <option value="Playfair Display">Playfair Display</option>
        </select>
      </label>


      <label>
        Image proportion
        <input
          value={settings.imageProportion}
          onChange={(e) => update('imageProportion', e.target.value)}
          type="number"
          style={inputStyle}
        />
      </label>

      <div style={{
        width: '100%',
        height: '1px',
        margin: '2em 0',
        background: 'black',
        boxSizing: 'border-box',
      }} />

      <button
        onClick={() => _settings.update(settings)}
        style={inputStyle}
      >
        Apply changes
      </button>
    </div>
  );
};

function App() {

  return (
    <SettingsProvider>
      <div style={{
        display: 'flex',
        width: '100vw',
      }}>
        <div style={{
          display: 'flex',
          width: '500px',
        }}>
          <Settings />
        </div>
        <div style={{
          flexGrow: 1,
        }}>
          <div style={{
            display: 'flex',
            // flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            background: 'rgb(250,250,250)',
          }}>
            {/* <div>
              <h2>Calendar Generator</h2>
              <p>Controls go here!</p>
            </div> */}
              <Month year={2025} monthNumber={0} />
              <Month year={2025} monthNumber={1} />
              <Month year={2025} monthNumber={2} />
              <Month year={2025} monthNumber={3} />
              
              {/* { months.map((month) => (<Month month={month} />)) } */}
          </div>
        </div>
      </div>
    </SettingsProvider>
  )
}

export default App
