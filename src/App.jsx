import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const str = "ABCDEFGHIJKLMNOPQRSTUV*^()WXYZabcdefghijklmnopqrstuvwxyz0123456789!^@%#$&"

  
  
  // let n = length
  function passGenerator () {
    let n = document.getElementById('paslen').value
    
    let str1 = ""
    for (let i = 0; i < n; i++) {
      let a = Math.floor(Math.random() * 60)
      str1 += str[a]
    }
    setPassword(str1);
  }

  function clrPassword(){
    setPassword("");
  }

  function cpyPassword(){
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div style={{ height: "100vh", width: "100vw", backgroundColor: "lightblack", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ height: "300px", width: "700px", backgroundColor: "grey", borderRadius: "20px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Password Generator</h1>
          <input style={{ alignItems: "center", color: "white", fontSize: "15px", borderRadius: "10px", width: "80%", height: "40px", marginLeft: "60px" }} type="text" placeholder="Password" value={password} />
          <input id='paslen' defaultValue={10} style={{ alignItems: "center", backgroundColor: "", fontSize: "15px", width: "10%", height: "30px", marginLeft: "40px", marginTop: "40px" }} type="number" placeholder='Length' />
          <button onClick={passGenerator} style={{ alignItems: "center", backgroundColor: "blue", fontSize: "15px", width: "", height: "40px", marginLeft: "40px", marginTop: "40px" }}>Genrate</button>
          <button onClick={clrPassword} style={{ alignItems: "center", backgroundColor: "red", fontSize: "15px", width: "", height: "40px", marginLeft: "40px", marginTop: "40px" }}>Clear</button>
          <button  onClick={cpyPassword} style={{ alignItems: "", backgroundColor: "salmon", fontSize: "15px", color: "black", width: "", height: "40px", marginLeft: "40px", marginTop: "10px" }}>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
