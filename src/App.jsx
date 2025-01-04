import { useState } from 'react'
import ProfessionsGrid from './components/ProfessionsGrid'
import Reagents from './components/Reagents'
import Calculator from './components/Calculator'
import EngineeringData from './assets/engineering.json'

const craftingProfessions = [
  "Alchemy",
  "Blacksmithing",
  "Enchanting",
  "Engineering",
  "Leatherworking",
  "Tailoring"
]

const gatheringProfessions = [
  "Herbalism",
  "Mining",
  "Skinning"
]

const secondaryProfessions = [
  "Cooking",
  "First Aid",
  "Fishing"
]

const fakeData = {
  'Arcane Bomb': 3
}


function App() {
  const [selectedProfession, setSelectedProfession] = useState(null)
  const [items, setItems] = useState({})

  let reagents = {}
  for (const item in items) {
    const itemData = EngineeringData[item]
    for (const reagent in itemData.reagents) {
      const quantity = items[item]
      const processedArr = reagent.split('/')
      const arrLen = processedArr.length
      const reagentName = processedArr[arrLen - 1]
      if (reagentName in reagents) {
        reagents[reagentName] = parseInt(reagents[reagentName]) + quantity * parseInt(itemData.reagents?.[reagent])
      } else {
        reagents[reagentName] = quantity * parseInt(itemData.reagents?.[reagent])
      }
    }
  }
  const reagentsLength = Object.keys(reagents).filter(val => (reagents[val] > 0)).length

  function clearData() {
    setItems({})
    setSelectedProfession(null)
  }


  return (
    <>
      <header>
        <h1>Classic Wow Crafting Calculator</h1>
        <p>I want to craft 6 X and 4 Y and 8 Z... So what reagents do I need?</p>
        <ol>
          <li>Select your profession.</li>
          <li>Enter the quantity of each item you wish to craft.</li>
          <li>See what reagents you will need to complete your order.</li>
        </ol>
      </header>
      <main>
        <section>
          <ProfessionsGrid selectedProfession={selectedProfession} setSelectedProfession={setSelectedProfession} craftingProfessions={craftingProfessions} />
        </section>
        <section style={{ opacity: selectedProfession ? 1 : 0.4 }}>
          <Reagents reagentsLength={reagentsLength} reagents={reagents} />
          <Calculator fakeData={fakeData} items={items} setItems={setItems} selectedProfession={selectedProfession} />
        </section>
      </main>
      <footer>
        <p>Made by <a target='_blank' href='https://www.smoljames.com'>Smoljames</a> using <a target='_blank' href='https://www.fantacss.smoljames.com'>FantaCSS</a> 🔥</p>
      </footer>
    </>
  )
}

export default App
