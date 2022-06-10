import Education from './components/Education';
import Experience from './components/Experience';
import GeneralInfo from './components/GeneralInfo';
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <GeneralInfo />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
