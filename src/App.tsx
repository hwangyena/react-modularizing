import './App.css';
import PersonalRecommend from './components/PersonalRecommend';

function App() {
  const onBuyAll = () => {
    console.log('buy all!');
  };

  return (
    <div className='App'>
      <PersonalRecommend onBuyAll={onBuyAll} />
    </div>
  );
}

export default App;
