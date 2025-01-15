import { useSettings } from '../state/useSettings';

export const WeekLabels = () => {
  const { imageProportion, height } = useSettings();
  const imageHeight = height * imageProportion; // TODO

  const days = 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(',');

  return (
    <div style={{
      display: 'flex',
      padding: '0.4em',
      position: 'absolute',
      left: 0,
      right: 0,
      color: 'white',
      top: imageHeight - 100,
      // background: 'rgba(0,0,0,0.1)',
    }}>
      {days.map(d => (
        <span style={{
          flexGrow: 1,
          fontSize: '0.9em',
          fontWeight: 700,
          fontStyle: 'italic',
        }}>
          {d}
        </span>
      ))}
    </div>
  );
};
