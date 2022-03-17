import logo from './logo.svg';
import './App.css';
import { iniGwExport } from '.';
import { Heading } from './components/Heading';

const sule = 'prikitiew';

const SubSubHeading = () => {
  return (
    <>
      <h3>Ini subsubheading</h3>
      <p>Ini bagian dari subsubheading</p>
    </>
  )
}

function SubHeading() {
  return (
    <div>
      <h2>Ini subheading</h2>
      <p>Ini bagian dari subheading</p>
      <span>ini span</span>
    </div>
  )
}

function App() {
  // dynamic value
  const name = ['IcaNqQ', 'icun', 'salamlekom'];
  const satu = 1;
  const alertAja = (sesuatu) => {
    alert('function clicked' + sesuatu)
  }
  const isLoading = false;

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
        <h2>Iniloading</h2>
      </div>
    );

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <Heading title="ini title" yangLaen="ini yang laen" count={satu} alertAja={alertAja} />
          <SubHeading />
          <SubSubHeading />
        </div>
      </header>
    </div>
  );
}

export default App;
