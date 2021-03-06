import React, { useContext } from 'react'
import { AppContext } from 'context'

import SelectScreen from './pages/select'
import RecordScreen from './pages/record'
import PlayScreen from './pages/play'

const App = () => {
  const { screen } = useContext(AppContext)

  // Select track screen
  if (screen === 1) {
    return <SelectScreen />
  }

  // Record screen
  if (screen === 2) {
    return <RecordScreen />
  }

  // Play/download screen
  if (screen === 3) {
    return <PlayScreen />
  }
}

export default App
