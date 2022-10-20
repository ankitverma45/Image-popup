import './App.css';

function App() {
  return (
  <>
    <div className='container'>
      <div className='image-box'>
        <input type="radio" id="img-1" name ="image"  checked />
        <input type="radio" id="img-2" name ="image"  checked/>
        <input type="radio" id="img-3" name ="image"  checked/>
        <input type="radio" id="img-4" name ="image"  checked/>
        <input type="radio" id="img-5" name ="image"  checked/>
        <div className='image-big'></div>
      </div>
    </div>
  </>
  );
}

export default App;
