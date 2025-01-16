import { useSettings } from '../state/useSettings';
import { Palette } from './Palette';
import { WeekLabels } from './WeekLabels';
import { ExportButton } from './ExportButton';
import { useMonth } from '../state/useMonth';

export const Month = (props) => {

  const { year, monthNumber } = props;

  const month = useMonth(year, monthNumber);

  const settings = useSettings();

  const { width, height, imageProportion, bottomMargin } = useSettings();

  const imageHeight = height * imageProportion; // 600?
  const calendarHeight = height - imageHeight - bottomMargin;

  const scale = 0.14;

  return (
    <div
      style={{
        overflow: 'visible',
        fontFamily: settings.headerFont,
        marginBottom: '2em',
      }}
    >

      {/* <ExportButton month={month} /> */}

      <div style={{
        transform: `scale(${scale}, ${scale})`,
        transformOrigin: 'top left',
        width: width * scale,
        height: height * scale,
        // border: '5px solid black',
      }}>
        
      <div id={`calendar-${month.name}`} style={{
        width: width,
        height: height,
        fontSize: '3em',
        boxShadow: '0 0 0.4rem 0.2rem rgba(0,0,0,0.15)',
        background: 'white',
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        // backgroundImage: `url(${monthImage[month.name]})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover' 
      }}>
        <img src={month.image}
           width={width} height={imageHeight}
           style={{
            objectFit: 'cover',
            // objectPosition: 'top',
            // position: 'absolute',
           }}
        />

        <h2 style={{
          position: 'absolute',
          color: 'white',
          fontSize: '3em',
          // height: '100%',
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
                  }}>
                    <span style={{
                      fontSize: '1.1em',
                      fontWeight: 600,
                    }}>
                      {date.dayOfMonth}
                    </span>

                    <div style={{ flexGrow: 1 }}/>

                    { date.holidays.map(h => (
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
                </div> // end day
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
