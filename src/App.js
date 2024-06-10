import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Character from './components/Character.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <Character attrList={ATTRIBUTE_LIST} classList={CLASS_LIST} skill_list={SKILL_LIST}/>
      </section>
    </div>
  );
}


export default App;
