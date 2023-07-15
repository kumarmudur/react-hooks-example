import { createContext, lazy, Suspense } from 'react';
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

// context
import ComponentC from './components/hooks/useContext/ComponentC';

import Test from './components/Test';

// HOC
import Component1 from './components/hoc/Component1';

// Render Props
import Parent from './components/renderProps/Parent';

export const UserContext = createContext();
export const ChannelContext = createContext();

const MyTest = lazy(() => import('./components/Test'));


function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <Counter4 /> */}
      {/* <Counter1 /> */}
      {/* <IntervalCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={'Shiva Mahadeva'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Suspense fallback={<div>Loading.....</div>}>
      <MyTest></MyTest>
      </Suspense> */}
      {/* <Component1 /> */}
     <Parent />
    </div>
  );
}

export default App;
