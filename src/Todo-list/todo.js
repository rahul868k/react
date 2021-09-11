import React,{useEffect, useState} from 'react'
import './todo.css'
// import List from './List'
// import Button from "@material-ui/core/Button";
import Brightness4icon from "@material-ui/icons/Brightness4"
// import AddIcon from "@material-ui/icons/Add";
// import DeleteIcon from "@material-ui/icons/Delete";
// import Checkbox from '@material-ui/core/Checkbox'
// import CheckIcon from '@material-ui/icons/Check'
// import ReplayIcon from '@material-ui/icons/Replay'
// import FormControlLabel from '@material-ui/core/FormControlLabel'

// function CheckboxExample(){
//     const [checked,setChecked] = useState(true)
//     return(
//         <div>
//             <FormControlLabel
//             control={ <Checkbox
//                 checked={checked}
//                 checkedIcon={<CheckIcon/>}
//                 icon={<ReplayIcon/>}
//                 onChange={(e)=> setChecked(e.target.checked)}
//                 inputProps={{
//                     'aria-label':'primary checkbox'
//                 }}
//                 />}
//                 // label='checked'
//             />
           
            
//         </div>
//     )
// }

const Todo = () => {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])
    const [error, setError] = useState(null)
    // const isSystemDark = window.matchMedia("(prefers-colors-scheme: dark)").matches
    const [isDark, setIsDark] = useState()
    const [color, setColor] = useState()

    useEffect(()=>{
        const getTodo = JSON.parse(localStorage.getItem('items'))
        if(getTodo){
            setItems(getTodo)
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('items', JSON.stringify(items))
    },[items])
   
    const itemEvent=(e)=>{
        setInputList(e.target.value)
    }

    // const addTodo=()=>{
    //     setItems(enterItems =>{
    //         return [...enterItems, inputList]
    //     })
    //     setInputList("");
    // };

    // const listOfItems = ()=>{
    //     if(!inputList){

    //     }else{
    //         setItems([...items, inputList])
    //         setInputList("")
    //     }
    // }

    // const addTodo =()=>{
    //     const newList=items;
    //     newList.push(inputList)
    //     setItems([...newList])
    // }

     // const deleteItems = (id)=>{
    //     console.log('deleted')
    //     setItems(enterItems =>{
    //         return enterItems.filter((arrItem, index)=>{
    //             return index !== id;
    //         })
    //     })
    // }

    // const dateTime = new Date().toLocaleString();

    const addTodo =(e)=>{
        e.preventDefault()
        if(inputList.length < 5){
            setError('At Least 5 words required !!!')
            return false
        }
        items.push(inputList)
        setItems([...items]);
        setInputList("")
        setError(null)
    }

    const deleteItems = (index)=>{
        // alert('do you want to delete this task')
        if(window.confirm('do you want to delete this task')){
            console.log('deleted')
            var newList =items;
            newList.splice(index,1);
            setItems([...newList])
        }
        
}   


    // useEffect(() => {
    //     setChecked(true)
    // }, [])

    // const checkHandler =(index)=>{
    //     const indexI = items.findIndex(item => item.index === index)
    //     const duplicate =[...items]

    //     duplicate[indexI]={
    //         id: items[index].index,

    //     }
    // } 
   
    const lightTheme ={
        backgroundColor:"white",
        color:"black"
    }
    const darkTheme ={
        backgroundColor:"black",
        color:"white"
    }
    const black ={
       color:"black",
       
    }
    const white ={
        color:"white",
       
    }
    
    return (
        <>
            <div className="main_div">
                
                <div className="container col-xl-3 col-lg-4 col-md-6 center_div" style={isDark? darkTheme:lightTheme}>
                        <div className="toggle" onClick={()=> setIsDark(toggle=>!toggle)}>
                            <Brightness4icon className="darkMode" fontSize="small" style={color ? white:black } onClick={()=> setColor(!color)}/>
                        </div>
                    <br />
                    <h1>Todo List</h1>
                    <br />
                    <div className="form">
                    <input type="text" placeholder="Add your todo " value={inputList} onChange={itemEvent} />
                    <button className="newBtn" onClick={addTodo}>Add #{items.length + 1} </button>
                    </div>
                    <div className="text-danger mt-2">
                    {error && <small>{error}</small>}
                    </div>
                    { items.length > 0 ?
                        <ol>
                            {items.map((item,index) =>{
                            // return <List key={index} id={index} text={item} onSelect={deleteItems}></List>
                            return(
                                <>
                                    <div className="todo_style">
                                        <li key={index}> {item} </li>
                                        {/* <i className="fas fas-edit add-btn"title="edit" onClick={()=> editItem(index)}>edit</i> */}
                                        <i className="fas fa-times deleteIcon" onClick={()=> deleteItems(index)}></i>
                                        {/* <div className="checkButton">
                                            <CheckboxExample/>
                                        </div> */}
                                    </div>
                                </>
                            )
                            })}
                        </ol>
                        : <div className="jumbotron text-center mt-5">
                            <h2 className="text-danger">No data found</h2>
                            <h4>Add your today task</h4>
                          </div>
                    }
                </div>
                {
                /* {JSON.stringify(items)} */}
            </div>
            
        </>
    )
}

export default Todo
