import './style.css';

import { Button } from './components/Button/Button.jsx';
import { Input } from './components/Input/Input.jsx';
import { Header } from './components/Header/Header.jsx';
import { Card } from './components/Card/Card.jsx';

import { useState } from 'react';

import principal from '../src/assets/principal.png';

import api from './services/api.js';

function App() {
  
  const [characterName, setCharacterName] = useState('');
  const [characterData, setCharacterData] = useState(null);
  //const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    //setLoading(true);
    setError(null);
    setCharacterData(null);

    try {
      const response = await api.get(`character/?name=${characterName}`);
      setCharacterData(response.data.results[0]);
    } catch (error) {
      setError('Personagem não encontrado');
    }
  };
  
  
  return (
    <div className="App">
      <Header />

      <main>
        <img className='img-principal' src={principal} alt='Rick and Morty'/>

        <Input value={characterName} onChange={(e) => setCharacterName(e.target.value)} placeholder={'Enter a Rick and Morty character...'}/>

        <Button onClick={handleSearch}>Search</Button>

      </main>


      {error && <p>{error}</p>}

      {characterData && (
        <Card name={characterData.name} status={characterData.status} species={characterData.species} image={characterData.image} location={characterData.location.name} gender={characterData.gender}/>
      )}

    </div>
  );
}

export default App;
