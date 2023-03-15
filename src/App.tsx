import './App.css';
import Items from './components/Items';

function App() {
  const onBuyAll = () => {
    console.log('buy all!');
  };

  return (
    <div className='App'>
      <h1>개인별 물건 추천 프로세스</h1>
      <Items onBuyAll={onBuyAll} />
    </div>
  );
}

export default App;
