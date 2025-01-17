import { extractColors } from 'extract-colors';
import { useState, useEffect } from 'react';
import { useSettings } from '../state/useSettings';
import convert from 'color-convert';

export const useColors = (image) => {
  const [palette, setPalette] = useState([]);
  const [color, setColor] = useState('black');

  useEffect(() => {
    // https://www.npmjs.com/package/extract-colors
    extractColors(image, {
      distance: 0.08,
      // hueDistance: 0.1,
    })
      .then((p) => {
        setPalette(p);

        // const hsvP = p
        //   .map(c => convert.hex.hsv(c.hex))
        //   .sort((a,b) => {
        //     return (a[2] + a[1]) - (b[2] + b[1]);
        //   })

        // const selected = convert.hsv.hex(hsvP[Math.round(hsvP.length - 1)]);

        // setColor(`#${selected}`);
      })
      .catch(console.error);
  }, [image]);

  return {
    palette,
    color,
  };
};

export const Palette = (props) => {
  const { bottomMargin } = useSettings();
  const { palette } = useColors(props.month.image);

  return (
    <div style={{
      display: 'flex',
      // padding: '0.4em',
    }}>
      {palette.map((pc, i) => {
        // if (i === palette.length - 1) {
          return (
            <div style={{
              height: bottomMargin,
              flexGrow: 1,
              // background: pc.hex,
              background: pc.hex,
            }}
            />
          )
        // }
        // return (
        //   <div style={{
        //     height: bottomMargin,
        //     flexGrow: 1,
        //     // background: pc.hex,
        //     background: `linear-gradient(180deg, ${pc.hex} 30%, ${palette[i+1].hex} 100%)`,
        //   }}
        //   />
        // )
      })}
    </div>
  );
};
