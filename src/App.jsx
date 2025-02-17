import React from 'react'
import { useState } from 'react'
import PrayerTimetable from './pages/PrayerTimeTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrayerTimetable />
    </>
  )
}

export default App
