import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';

function App() {
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
      </main>
    </div>
  );
}

export default App;
