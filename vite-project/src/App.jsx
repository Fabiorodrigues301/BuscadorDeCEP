import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FiSearch} from 'react-icons/fi'     
import API from './servece/API'             

function App() {
  

const [input, setInput] = useState('')
const [CEP,setCEP]= useState({}) 

async function hendleSearch(){    
if(input === ''){
  alert("Preencha algum CEP")
  return;
}

try{ const response = await API.get(`${input}/json`); 
console.log(response.data); 
setCEP(response.data);
setInput("");} 

catch{ alert("Erro ao buscar o CEP  " + input ); 
 setInput("")}  

}

  return (
    <div className='container'>
      <h1 className='title'>Buscador De CEP</h1>
      <div className='containerInput'>
       
        <input type="text"
        placeholder='Digite o CEP...'
        value={input}    
        onChange={(e) => setInput(e.target.value)}  
        />

        <button className="botao" onClick={hendleSearch} 
        ><FiSearch size={25} color='#c2aaf2'/>
        </button>
</div>

       {Object.keys(CEP).length > 0 && 
       ( <main className='main'>
          <h2>CEP: {CEP.cep}</h2><br />
          <span>Rua: {CEP.logradouro} </span> <br />
          <span>Complemento: {CEP.complemento}</span> <br />
          <span>Bairro: {CEP.bairro}</span> <br />
          <span>Cidade: {CEP.localidade} - {CEP.uf}</span> <br />
        </main> )}
       
      
    </div>
  );
}

export default App
