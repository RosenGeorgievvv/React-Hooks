
import './App.css'
import ContextTutorial from './UseContext/ContextTutorial'
import EffectTutorial from './UseEffect/EffectTutorial'
import ReducerTutorial from './UseReducer/ReducerTutorial'
import RefTutorial from './UseRef/RefTutorial'
import StateTutorial from './UseState/StateTutorial'

function App() {

  return (
    <>
      <StateTutorial />
      <EffectTutorial />
      <ReducerTutorial />
      <RefTutorial />
      <ContextTutorial />
    </>
  )
}

export default App
