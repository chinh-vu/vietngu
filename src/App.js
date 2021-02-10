import React from 'react'
import Main from './Main'
import { Provider } from 'react-redux'
import configureStore from './stores/loginRedux'

import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = configureStore();
function App (props) {
  return (
    // wiring redux
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
        </PersistGate>
    </Provider>
  )
}

export default App
