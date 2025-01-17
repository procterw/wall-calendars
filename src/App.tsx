import { Month } from './Components/Month';
import { SettingsProvider } from './state/useSettings';
import { Settings } from './Components/Settings';
import './App.css'

function App() {

  return (
    <SettingsProvider>
      <div style={{
        display: 'flex',
        width: '100vw',
      }}>
        <div style={{
          display: 'flex',
          width: '300px',
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
            overflow: 'scroll',
            // height: '100vh',
            width: 'calc(100vw - 300px)',
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
