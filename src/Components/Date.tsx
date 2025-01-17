import { useSettings } from '../state/useSettings';
import { useColors } from './Palette';


export const Date = (props) => {
  const { date, week, month } = props;

  const { width, customEvents } = useSettings();
  const { color } = useColors(month.image);

  return (
    <div
      style={{
        display: 'block',
        width: width / 7,
        // background: 'blue',
        marginLeft: date.dayOfMonth === 1
          ? (width / 7) * (7 - week.dates.length)
          : 0,
        // alignItems: 'flex-start',
        padding: '0.4rem 0.4rem',
        background: 'white',
      }}
    >
      <div style={{
        // borderTop: '0.2rem solid #e1e1fd',
        borderTop: '0.2rem solid black',
        display: 'flex',
        flexDirection: 'column',
        // background: date.isWeekend ? 'rgb(240, 239, 251)' : 'rgb(251, 249, 223)',
        height: '100%',
        textAlign: 'left',
      }}>
        <span style={{
          fontSize: '1.1em',
          fontWeight: 600,
          color: color,
        }}>
          {date.dayOfMonth}
        </span>

        <div style={{ flexGrow: 1 }} />

        {date.holidays.map((h) => (
          <span
            style={{
              fontSize: '0.7em',
              fontStyle: 'italic'
            }}
          >
            {h}
          </span>
        ))}
      </div>
    </div>
  );
};
