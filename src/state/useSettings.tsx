import { createContext, useContext } from "react";

type SettingsContextType = {
  month: number,
  year: number,
  imageProportion: number,
  width: number,
  height: number,
  bottomMargin: number,
  artist: string,
};

const defaultMonth = 1;
// const defaultArtist = 'Seongryul';
const defaultArtist = 'Noritake';

const defaults = {
  month: defaultMonth,
  year: 2025,
  imageProportion: 0.37,
  width: 3295,   // 11x17
  height: 5102,  // 11x17
  bottomMargin: 100, // 400?
  artist: defaultArtist,
  headerFont: 'Spectral',
  bodyFont: 'Spectral',
  type: {
    header: {
      size: '3em',
      weight: 500,
      style: 'italic',
    },
    weekLabels: {
      size: '1em',
      weight: 400,
      style: 'italic',
    },
    dates: {
      size: '1.1em',
      weight: 400,
      style: '',
    },
    events: {
      size: '0.8em',
      weight: 400,
      style: '',
    },
  },
};

const SettingsContext = createContext<SettingsContextType>({
    ...defaults,
});

export const SettingsProvider = (props: { children: React.ReactNode }) => {

  const state = defaults;

  return (
    <SettingsContext.Provider value={state}>
      { props.children }
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
