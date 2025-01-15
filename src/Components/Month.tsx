import domtoimage from 'dom-to-image-more';
import { saveAs } from 'file-saver';
import { useSettings } from '../state/useSettings';
import { Palette } from './Palette';
import { WeekLabels } from './WeekLabels';

const ExportButton = (props) => {
  const { width, height } = useSettings();
  const { month } = props;

  return (
    <button
      onClick={() => {
        domtoimage.toBlob(
          document.getElementById(`calendar-${month.name}`),
          { width: width, height: height, bgcolor: 'white'}

        ).then(function (blob) {
          saveAs(blob, `${month.name}.png`);
      });
      }}
      style={{ marginBottom: 20}}
    >
      Export!
    </button>
  );
};

export const Month = (props) => {

  const { month } = props;

  const { width, height, imageProportion, bottomMargin } = useSettings();

  const imageHeight = height * imageProportion; // 600?
  const calendarHeight = height - imageHeight - bottomMargin;

  return (
    <div
      style={{
        overflow: 'visible',
      }}
    >

      <ExportButton month={month} />

      <div style={{
        transform: 'scale(0.2, 0.2)',
        transformOrigin: 'top left',
        width: width / 5,
        height: height / 5,
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

{/* 

<svg
        id="my-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        // ref={svgRef}
        // 
        height={height}
        width={width}
        // viewBox={`0 0 ${width*2} ${height*2}`}
        style={{
          boxShadow: '0 0 6px 2px rgba(0,0,0,0.15)',
        }}
      >

        <svg
          width={width}
          height={imageHeight}
          viewBox={`0 0 ${width} ${imageHeight}`}
        >
          <image href={monthImage[month.name]} width="100%" />
        </svg>

        <g transform={`translate(0, ${imageHeight + 30})`}>
          <text
            fontFamily='Georgia'
            fontSize={72}
            fill='white'
            fontWeight={500}
            x={15}
            y={-70}
          >
            {month.name}
          </text>

      //     {/* Week rows */}
      //     {month.weeks.map((week, i) => (
      //       <g transform={`translate(0, ${weekScale(i)})`}>
      //         {week.dates.map((date, i) => (
      //           <g
      //             transform={`translate(${dayScale(i)}, 0)`}
      //           >
      //             <rect
      //               fill="#333"
      //               width={dayScale.bandwidth()}
      //               height={0.5}
      //               y={-20}
      //               x={0} />
      //             {/* <rect
      //                         fill='red'
      //                         width={dayScale.bandwidth()}
      //                         height={weekScale.bandwidth()}
      //                         x={0}
      //                         y={0}
      //                       /> */}

      //             <text
      //               // alignmentBaseline="central"
      //               y={0}
      //               x={0}
      //               fontWeight={500}
      //               fontSize={21}
      //             >
      //               {date.getDate()}
      //             </text>

      //             {/* <text x="50"> */}
      //             {/* { Moon.lunarPhaseEmoji(date) } */}
      //             {/* { Moon.lunarPhase(date) } */}
      //             {/* </text> */}

                  // {hd.isHoliday(date) && (
                  //   hd.isHoliday(date).map((h) => (
                  //     <text
                  //       y={weekScale.bandwidth() - 30}
                  //       alignmentBaseline="baseline"
                  //       fontSize={13}
                  //     >
                  //       {h.name}
                  //     </text>
                  //   ))
                  // )}

      //           </g>
      //         ))}
      //       </g>
      //     ))}
      //   </g>
      // </svg> */}