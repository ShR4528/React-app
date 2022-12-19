import Costs from './components/Costs'

function App(props) {
  const costs = [
    {
      date: new Date(2022, 2, 12),
      description: 'Fridge',
      amount: 999.99
    },
    {
      date: new Date(2022, 4, 19),
      description: 'MacBook',
      amount: 1200.99
    },
    {
      date: new Date(2022, 2, 22),
      description: 'T-shirt',
      amount: 99.99
    }
  ]
  return (
    <div>
      <Costs costs={costs} />

    </div>
  );
}

export default App
