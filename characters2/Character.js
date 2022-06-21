import { useEffect, useState } from 'react';
import Character from './Character';

function List() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const data = [
      {'class': 'Wizard',
      'magic': 'fire',
      'armor': 'light',
      'weapon': 'staff'
    }, {'class': 'Paladin',
    'magic': 'light',
    'armor': 'plate',
    'weapon': 'sword'}
  ];
  }, [characters.length]);
  return (
  <div>
    <h2>Characters</h2>
    <Character />
    <Character />
  </div>
  )
}

export default List;
