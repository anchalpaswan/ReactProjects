import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'
import { useSelector } from 'react-redux'

function App() {
  const amount = useSelector((state) => state.account.amount)
  const points = useSelector((state) => state.bonus.points)
  const account = useSelector((state) => state.account)

  return (
    <div className="App">
      <h4>App</h4>
      {account.pending ? (
        <p>loading...</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <p>Current Amount of User{amount}</p>
      )}

      <h3>Total Bonus: {points}</h3>

      <Account />
      <Bonus />
    </div>
  )
}

export default App
