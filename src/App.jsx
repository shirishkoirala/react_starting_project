import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map((coreConcept) => {
                return <CoreConcept {...coreConcept} />
              })
            }
          </ul>
        </section>
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
              <TabButton onClick={() => handleSelect('components')}>Components</TabButton>
              <TabButton onClick={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onClick={() => handleSelect('props')}>Props</TabButton>
              <TabButton onClick={() => handleSelect('state')}>State</TabButton>
            </menu>
            {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
