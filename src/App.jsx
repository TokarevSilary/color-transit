import { useState } from 'react'
import onChange from './assets/onChange/onChange';
import { useEffect } from 'react';


function App() {
  const colorRegex = /^#[0-9a-fA-F]{6}$/;

  const [color, setColor] = useState("#9921ff");
  useEffect(()=>{
    if (color.length > 7) document.body.classList.add("error");
    if (color.length != 7) return;
    if(colorRegex.test(color)){
      document.body.style.background = color;
      document.body.classList.remove("error");
    }else {
      document.body.classList.add("error");

    }
}, [color])

  return (
    <>
      <label className='container'>
         <input type="text" className="input-field" onChange={(evt) => onChange(evt, color, setColor)} id="colorInput" placeholder="Введите код цвета..." value={color}></input>
         <span className="result" id="result">{(()=>{
          if (color.length > 7) return "Слишком много!";
          if (color.length !== 7) return ;
          if(colorRegex.test(color)){
            const a = parseInt(color.slice(1,3), 16);
            const b = parseInt(color.slice(3,5), 16);
            const c = parseInt(color.slice(5,7), 16);
            return `
            rgb{${a}, ${b}, ${c}}
            `;
         }return"Ошибка!"})()}</span>
      </label>
    </>
  )
}

export default App
