import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [hover,setHover]=useState(false)
  const [length, setlength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");
  // useRef hook
  const passwordRef=useRef(null)
  
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed)str+="0123456789"
    if(charAllowed)str+="~!@#%^&*(){}><?+-"

    for(let i=0;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copytoclipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
     
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" value={password} 
            className='outline-none w-full py-1 px-3'
             placeholder='password' 
             readOnly
             ref={passwordRef} 
            />
            <button 
            id='copy'
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' 
            onClick={copytoclipboard}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
              padding: '20px',
              backgroundColor: isHovered ? 'dark blue' : 'blue',
              cursor: 'pointer',
              border:isHovered?'0.66px solid black':'none',
            }}
            >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input type="range"
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=>setlength(e.target.value)} />
                <label>Length :{length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox" 
                  defaultValue={numberAllowed}
                  id='numberInput'
                  onChange={()=>{
                    setNumberAllowed((pre)=>!pre)
                  }}
                  />
              </div>
              <label htmlFor="numberInput">Numbers</label>
              <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox" 
                  defaultValue={charAllowed}
                  id='numberInput'
                  onChange={()=>{
                    setCharAllowed((pre)=>!pre)
                  }}
                  />
              </div>
              <label htmlFor="charInput">Characters</label>
          </div>
      </div>
    </>
  )
}

export default App
