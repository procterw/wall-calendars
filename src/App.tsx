import { Month } from './Components/Month';
import { SettingsProvider } from './state/useSettings';
import './App.css'
import { populateMonth, useMonth } from './state/useMonth';

function App() {

  const { month } = useMonth();

  return (
    <SettingsProvider>
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'space-around', background: 'rgb(250,250,250)'}}>
        {/* <div>
          <h2>Calendar Generator</h2>
          <p>Controls go here!</p>
        </div> */}
          <Month month={populateMonth(2025, 0, 'Seongryul')} />
          <Month month={populateMonth(2025, 1, 'Seongryul')} />
          <Month month={populateMonth(2025, 2, 'Seongryul')} />
          
          {/* { months.map((month) => (<Month month={month} />)) } */}
      </div>
    </SettingsProvider>
  )
}

export default App
