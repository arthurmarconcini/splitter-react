import './App.css'
import Logo from './images/logo.svg'

import Input from './components/Input'
import Checkbox from './components/Checkbox'
import Value from './components/Value'
import { useEffect, useState } from 'react'

function App() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [persons, setPersons] = useState(0)

  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (bill && tip && persons) {
      calculateTip()
      calculateTotal()
    }
  }, [persons, tip, bill])

  function handleCustom(e) {
    setTip(e.target.value)
  }

  function handleCheckboxClick(value) {
    setTip(value)
  }

  function handleBill(e) {
    setBill(+e.target.value)
  }

  function handlePersons(e) {
    setPersons(+e.target.value)
  }

  function calculateTip() {
    const tipTotal = (bill * tip) / 100
    setTipAmount(tipTotal / persons)
  }

  function calculateTotal() {
    let calculo = (bill + (bill / 100) * tip) / persons
    setTotal(calculo)
  }

  function handleReset() {
    setBill(0)
    setTip(0)
    setPersons(0)
    setTipAmount(0)
    setTotal(0)
  }

  return (
    <div className="App">
      <main>
        <img src={Logo} alt="Logo" />
        <div className="container">
          <div className="content">
            <Input name="Bill" handleInput={handleBill} bill={bill} />
            <div className="checkbox">
              <label htmlFor="">Select Tip %</label>
              <div className="checkbox-area">
                <div className="checkbox-row">
                  <Checkbox
                    name="5"
                    handleCheckboxClick={handleCheckboxClick}
                  />
                  <Checkbox
                    name="10"
                    handleCheckboxClick={handleCheckboxClick}
                  />
                  <Checkbox
                    name="15"
                    handleCheckboxClick={handleCheckboxClick}
                  />
                </div>
                <div className="checkbox-row">
                  <Checkbox
                    name="25"
                    handleCheckboxClick={handleCheckboxClick}
                  />
                  <Checkbox
                    name="50"
                    handleCheckboxClick={handleCheckboxClick}
                  />
                  <input
                    type="number"
                    placeholder="custom"
                    value={tip}
                    onChange={e => handleCustom(e)}
                  />
                </div>
              </div>
            </div>
            <Input
              name="Number of people"
              handleInput={handlePersons}
              persons={persons}
            />
          </div>
          <div className="display">
            <div className="values">
              <Value title="Tip Amount" value={tipAmount} />
              <Value title="Total" value={total} />
            </div>
            <input type="button" value="RESET" onClick={() => handleReset()} />
          </div>
        </div>
      </main>

      <div class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Arthur Marconcini Ramos</a>.
      </div>
    </div>
  )
}

export default App
