import React, { useState } from 'react'

// export const Calculator = () => {
//     const [input, setInput] = useState("");
//     const [result, setResult] = useState('')
//     const handler = e => {
//         setInput(e.target.value)
//     }

//     return (
//         <div className='calc'>

//             <form>
//                 <label>
//                     <input type="text" value={input} name={input} onChange={handler} placeholder='0' /></label>
//                     ={result}
//             </form>

//             <div className="keypad">

//                 <button onClick={() => setInput('')} >Clr</button>
//                 <button onClick={() => setInput(input.slice(0, input.length - 1))} >C</button>
//                 <button onClick={() => setInput(input + '/')} >&divide;</button>
//                 <button onClick={() => setInput(input + '7')} >7</button>
//                 <button onClick={() => setInput(input + '8')} >8</button>
//                 <button onClick={() => setInput(input + '9')} >9</button>
//                 <button onClick={() => setInput(input + '*')} >&times;</button>
//                 <button onClick={() => setInput(input + '4')} >4</button>
//                 <button onClick={() => setInput(input + '5')} >5</button>
//                 <button onClick={() => setInput(input + '6')} >6</button>
//                 <button onClick={() => setInput(input + '-')} >&ndash;</button>
//                 <button onClick={() => setInput(input + '1')} >1</button>
//                 <button onClick={() => setInput(input + '2')} >2</button>
//                 <button onClick={() => setInput(input + '3')} >3</button>
//                 <button onClick={() => setInput(input + '+')} >+</button>
//                 <button onClick={() => setInput(input + '0')} >0</button>
//                 <button onClick={() => setInput(input + '.')} >.</button>
//                 <button onClick={() => setResult(eval(input))} >=</button>
//             </div>


//         </div>
//     )
// }

const Calculator = () => {
    const [result, setResult] = useState('')
    const handleClick = e => {
        setResult(result.concat(e.target.name))
    }

    const clr=()=>{
        setResult('')
    }
    const C=()=>{
        setResult(result.slice(0,-1))
    }
    const rlt=()=>{
        try{
            setResult(eval(result).toString());
        }catch(err){
            setResult('Error')
        }
       
    }



    return (
        <div className='calc'>
            <form>
                <input type="text" value={result} placeholder='0' />
            </form>

            <div className="keypad">

                <button onClick={clr} id="clr" >Clear</button>
                <button onClick={C} id="c" >C</button>

                {/* <button onClick={()=> setResult('')} >Clr</button>
                <button onClick={()=> setResult(result.slice(0,result.length-1))} >C</button> */}

                <button name="/" onClick={handleClick} >&divide;</button>
                <button name="7" onClick={handleClick} >7</button>
                <button name="8" onClick={handleClick} >8</button>
                <button name="9" onClick={handleClick} >9</button>
                <button name="*" onClick={handleClick} >&times;</button>
                <button name="4" onClick={handleClick} >4</button>
                <button name="5" onClick={handleClick} >5</button>
                <button name="6" onClick={handleClick} >6</button>
                <button name="-" onClick={handleClick} >&ndash;</button>
                <button name="1" onClick={handleClick} >1</button>
                <button name="2" onClick={handleClick} >2</button>
                <button name="3" onClick={handleClick} >3</button>
                <button name="+" onClick={handleClick} >+</button>
                <button name="0" onClick={handleClick} >0</button>
                <button name="." onClick={handleClick} >.</button>
                <button onClick={rlt} id="result" >=</button>
            </div>
        </div>
    )
}

export default Calculator

