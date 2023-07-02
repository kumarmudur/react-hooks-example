import './App.css';

// Classes
// import Counter from './components/classes/Counter';

// Hooks 
import Counter from './components/hooks/useState/Counter';
import Counter2 from './components/hooks/useState/Counter2';
import Counter3 from './components/hooks/useState/Counter3';
import Counter4 from './components/hooks/useState/Counter4';

import Counter1 from './components/hooks/useEffect/Counter1';
import IntervalCounter from './components/hooks/useEffect/IntervalCounter';
import DataFetching from './components/hooks/useEffect/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <Counter4 /> */}
      {/* <Counter1 /> */}
      {/* <IntervalCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
