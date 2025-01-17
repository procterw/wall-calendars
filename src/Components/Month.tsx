import { useSettings } from '../state/useSettings';
import { Palette } from './Palette';
import { WeekLabels } from './WeekLabels';
import { useMonth } from '../state/useMonth';
import { Date } from './Date';

export const Month = (props) => {

  const { year, monthNumber } = props;

  const month = useMonth(year, monthNumber);

  const settings = useSettings();

  const { width, height, imageProportion, bottomMargin } = useSettings();

  const imageHeight = height * imageProportion; // 600?
  const calendarHeight = height - imageHeight - bottomMargin;

  return (
    <div
      style={{
        overflow: 'visible',
        fontFamily: settings.headerFont,
        marginBottom: '2em',
      }}
    >

      <div style={{
        transform: `scale(${settings.scale}, ${settings.scale})`,
        transformOrigin: 'top left',
        width: width * settings.scale,
        height: height * settings.scale,
        // border: '5px solid black',
      }}>
        
      <div id={`calendar-${month.name}`} style={{
        width: width,
        height: height,
        fontSize: settings.fontScale,
        boxShadow: '0 0 0.4rem 0.2rem rgba(0,0,0,0.15)',
        background: 'white',
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
      }}>
        <img src={month.image}
           width={width} height={imageHeight}
           style={{
            objectFit: 'cover',
            objectPosition: `${settings.imagePositionX} ${settings.imagePositionY}`,
           }}
        />

        <h2 style={{
          position: 'absolute',
          color: 'white',
          fontSize: '3em',
          textAlign: 'center',
          fontWeight: 700,
          letterSpacing: 70,
          fontStyle: 'italic',
          left: 158,
          top: 0,
          width: imageHeight,
          textAlignLast: 'center',
          padding: 0,
          margin: 0,
          transform: 'rotate(90deg)',
          transformOrigin: '0% 0%',
        }}>
          { month.name }
        </h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: calendarHeight,
          // marginTop: imageHeight,
        }}>
          <WeekLabels />

          {month.weeks.map((week, i) => (
            <div
              style={{
                width: width,
                flex: 1,
                display: 'flex',
                // flexDirection: 'row',
              }}
            >
              { week.dates.map((date) => (
                <Date date={date} week={week} month={month} />
              ))}
            </div> // end week
          ))}
        </div> {/* end month */}
      
      <Palette month={month} />

      </div>
    </div>
    </div>
  );
};
