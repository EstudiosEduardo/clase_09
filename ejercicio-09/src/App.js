import Video from './components/Video/Video';
import Audio from './components/Audio/Audio';
import Imagen from './components/Imagen/Imagen';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Video></Video>
       <Audio></Audio>
       <Imagen></Imagen>
      </header>
    </div>
  );
}

export default App;
