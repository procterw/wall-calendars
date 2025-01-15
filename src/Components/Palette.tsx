import { extractColors } from 'extract-colors';
import { useState, useEffect } from 'react';
import { useSettings } from '../state/useSettings';

export const Palette = (props) => {
  const { bottomMargin } = useSettings();
  const [palette, setPalette] = useState([]);

  // https://www.npmjs.com/package/extract-colors
  useEffect(() => {
    extractColors(props.month.image, {
      distance: 0.08,
      // hueDistance: 0.1,
    })
      .then(setPalette)
      .catch(console.error);
  }, []);

  return (
    <div style={{
      display: 'flex',
      padding: '0.4em',
    }}>
      {palette.map((pc) => (
        <div style={{
          height: bottomMargin,
          flexGrow: 1,
          background: pc.hex,
        }} />
      ))}
    </div>
  );
};
