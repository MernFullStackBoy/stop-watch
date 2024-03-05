import React, { useState } from 'react'
import Display from './components/Display'
import Btn from './components/Btn'

const App = () => {

  const [time, setTime] = useState({ m: 0, s: 0, ms: 0 })

  const [interv, setInterv] = useState()

  let updateM = time.m
  let updateS = time.s
  let updateMs = time.ms

  function run() {
    if (updateS === 60) {
      updateM++
      updateS = 0
    }
    if (updateMs == 99) {
      updateS++
      updateMs = 0
    }
    updateMs++
    return setTime({ m: updateM, s: updateS, ms: updateMs })
  }

  function start() {
    run()
    setInterv(setInterval(run, 10))
  }

  function stop() {
    clearInterval(interv, 10)
  }

  function reset() {
    clearInterval(interv, 10)
    setTime({ m: 0, s: 0, ms: 0 })
  }

  return (
    <div className=' w-[350px] h-[250px] bg-slate-700 mx-auto relative top-10 rounded-[20px] p-2 '>
      <Display time={time} />
      <Btn stop={stop} reset={reset} start={start} />
    </div>
  )
}

export default App