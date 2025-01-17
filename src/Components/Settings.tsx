import { useState } from "react";
import { useSettings } from "../state/useSettings";

const HR = () => {
  return (
    <div style={{ width: '100%', background: '#888', height: '1px', margin: '0.5em 0'}} />
  );
}

const customEventParser = (customEvent: String) => {

  const matches = customEvent.match(/{{.*}}/gm);

  if (!matches) return [];

  return matches.map((s) => {
    return {
      date: s.split(' % ')[0],
      event: s.split(' % ')[1],
    }
  });
};

export const Settings = () => {

  const _settings = useSettings();
  const [settings, _update] = useState(_settings);
  const update = (key, val, v = () => true) => {
    const nextSettings = {
      ..._settings,
      [key]: val,
    };
    _update(nextSettings);

    if (v()) {
      _settings.update(nextSettings);
    }
  };

  const inputStyle = {
    width: '100%',
    border: 'none',
    padding: '12px',
    background: '#eee',
    boxSizing: 'border-box',
    margin: '0.2em 0',
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
      width: '100%'
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
          <option value="Gambrell">Gambrell</option>

        </select>
      </label>

      <HR />

      <label>
        Font
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
        Font scale
        <select
          value={settings.fontScale}
          style={inputStyle}
          onChange={(e) => update('fontScale', e.target.value)}
        >
          <option value="2.5em">Small</option>
          <option value="3em">Medium</option>
          <option value="3.5em">Large</option>
        </select>
      </label>

      <HR />

      <label>
        Image proportion
        <input
          value={settings.imageProportion}
          onChange={(e) => update(
            'imageProportion',
            e.target.value, () => !isNaN(e.target.value) && e.target.value <= 0.8 && e.target.value >= 0.1
          )}
          type="number"
          min={0.1}
          max={0.8}
          style={inputStyle} />
      </label>

      <label>
        Image position X
        <select
          value={settings.imagePositionX}
          style={inputStyle}
          onChange={(e) => update('imagePositionX', e.target.value)}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>

      <label>
        Image position Y
        <select
          value={settings.imagePositionY}
          style={inputStyle}
          onChange={(e) => update('imagePositionY', e.target.value)}
        >
          <option value="top">Top</option>
          <option value="center">Center</option>
          <option value="bottom">Bottom</option>
        </select>
      </label>

      <HR />

      <label>
        Palette size
        <select
          value={settings.bottomMargin}
          style={inputStyle}
          onChange={(e) => update('bottomMargin', Number(e.target.value))}
        >
          <option value="0">None</option>
          <option value="50">Small</option>
          <option value="100">Medium</option>
          <option value="150">Large</option>
        </select>
      </label>

      <HR />

      <label>
        Viewing scale
        <select
          value={settings.scale}
          style={inputStyle}
          onChange={(e) => update('scale', Number(e.target.value))}
        >
          <option value="0.1">Small</option>
          <option value="0.15">Medium</option>
          <option value="0.4">True size</option>
        </select>
      </label>

      <HR />

      <label>
        Custom holidays
        <textarea
          value={settings.customEventString}
          onChange={(e) => {
            update('customEventString', e.target.value);
            update('customEvents', customEventParser(e.target.value));
          }}
          placeholder={
`{{03/15 % Ted's Birthday!}}
{{12/26 % Family Christmas}}

(Careful this is still fragile!)
          `}
          style={{
            ...inputStyle,
            height: 200,
          }}
        />
      </label>

    </div>
  );
};
