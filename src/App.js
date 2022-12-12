import CostItem from './components/CostItem';

function App() {
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
      <h1>Hello</h1>

      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />

      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />

      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />

    </div>
  );
}

export default App;
