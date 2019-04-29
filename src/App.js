import React, { Component } from 'react';

const characters = [
    { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
    { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
    { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
    { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
    { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }
]

const filtro =  characters.filter(function(e) {
	return e.race == 'Human';
});

console.log(filtro);


const Tr =()=>{
  return characters.map((e,i)=>{
    return <tr key={i} className="character-row">
      <td>{e.name}</td>
      <td>{e.race}</td>
      <td>{e.age}</td>
      <td>{e.weapon}</td>
        <td>
        <div className="controls">
          <div>☠ Kill</div>
          <div>💍 Use Ring</div>
        </div>
      </td>
    </tr>

  })
}

const Search = ({prop1,prop2,prop3}) =>
<div className="search-input">
  <input type="text" placeholder="search hero"/>
</div>

const Tabla = ()=>
<table className="characters-table">
  <tbody>
    <tr className="character-row">
      <th>Name</th>
      <th>Race</th>
      <th>Age</th>
      <th>Weapon</th>
      <th></th>
    </tr>
    <Tr/>

  </tbody>
  </table>

const Titulo =()=><h2>Fellowship of the Ring</h2>

class App extends Component {
  render() {
    return (
      <div className="index">

        <Titulo/>
        <div className="container">
          <Search/>
          <Tabla/>

        </div>
      </div>
    );
  }
}

export default App;
