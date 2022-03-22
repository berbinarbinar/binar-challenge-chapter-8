import logo from './logo.svg';
import './App.css';
import { ImportingThisMF } from '.'
import data from './data/index.json'
import { Heading } from './components/Heading';
import { SubHeading } from './components/SubHeading';


// Component:
// const SubHeading = () => {
//   return (
//     <h2 style={{color: "pink"}}>SubHeading</h2>
//   )
// }

const SubSubHeading = () => {
  return (
    <h3 style={{color: "yellow"}}>SubSubHeading</h3>
  )
}


function App() {
  // Dynamic Value:
  const name = "aLExGodJirah";
  const g = -5.67 * 10**-8;
  const loop = [3.14, 3*10**8, g];
  const isShow = true;
  const isLoading = false;
  const uno = 1;

  const justAlert = (a) => {
    alert('function clicked ' + a);
  }

  if (isLoading) return <h1>loading...</h1>

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <ul>
            {/* Since component is a function, the params can be shown by using properties in html */}
            {/* <Heading title='igorrrrrr' other='shut the fuck upppppp'/> */}
            <SubHeading count={uno} justAlert={justAlert}/>
            <SubSubHeading/>
          </ul>
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
          <br/>
          {name.toUpperCase()}
          <br/>
          {name.toLocaleLowerCase()}
          <br/>
          {(g)}
          <br/>
          {ImportingThisMF}
        </p>

        <ul>
          {
            loop.map((e, idx) => {
              return (
                <li key = {idx}>
                  {e}
                </li>
              )
            })
          }
        </ul>

        {
          // Ternary Operator
          !isShow ? <img src="https://apicms.thestar.com.my/uploads/images/2022/03/16/1515905.jpg" alt="jokowi camping"/> : <h1>Jokowi camping</h1>

        }

        <ul>
          {
            data.map(e => {
              return(
                <>
                  <li>{e.name}, {e.age}, {e.hobby}</li>
                </>
              )
            })
          }
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
    </div>
  );
}

export default App;
