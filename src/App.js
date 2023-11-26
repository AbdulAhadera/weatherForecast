
import './App.css';
import TopButton from './Components/TopButton';
import Input from './Components/Input';
import TimeAndLoc from './Components/TimeAndLoc';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';




function App() {
  return (
    <div
      className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButton />
      <Input />
      <TimeAndLoc />
      <TemperatureAndDetails />
      <Forecast  title={'hourly forecast'}/>
    </div>
  );
}

export default App;
