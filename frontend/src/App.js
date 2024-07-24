//1. import area
import { useReducer } from 'react';
import './App.css';
import { ADDITION, CLEAR, DIVISION, MULTIPLICATION, NUMBER, RESULT, SUBTRACTION } from './reducer/action';


let oldState = {
  result: 0,
  leftvalue: '',
  operator: '',
  rightvalue: ''
}

const reducerFunction = (oldState,action)=>{

let newState = oldState;  

//console.log("newState---->",newState)
//console.log("action---->",action)

 switch(action.type){
  
    case CLEAR:
      //alert("hii");
      return {
        result: 0,
        leftvalue: '',
        operator: '',
        rightvalue: ''
      }
       break;
    case DIVISION:
      //alert("DIVISION");
      return{
        ...newState,
        operator: '/'
      }
      break;   
      case MULTIPLICATION:
        //alert("MULTIPLICATION");
        return{
          ...newState,
          operator: '*'
        }
        break;
     case SUBTRACTION:
      //alert("SUBTRACTION");
      return{
        ...newState,
        operator: '-'
      }
       break;   
       case ADDITION:
        //alert("ADDITION");
        return{
          ...newState,
          operator:"+"
        }
        break;
     case RESULT:
     // alert("RESULT");
      switch(newState.operator){
        case '+':
          return{
            ...newState,
            result: parseFloat(newState.leftvalue) + parseFloat(newState.rightvalue)
          }
          break;
          case '-':
            return{
              ...newState,
              result: parseFloat(newState.leftvalue) - parseFloat(newState.rightvalue)
            }
             break;
           case '*':
            return{
              ...newState,
              result: parseFloat(newState.leftvalue) * parseFloat(newState.rightvalue)
            }
            break;  
           case '/':
              return{
                ...newState,
                result: parseFloat(newState.leftvalue) / parseFloat(newState.rightvalue)
              }
             break; 
      }
       break;  
       case NUMBER:
        if(newState.operator === ""){
          return{
            ...newState,
            leftvalue: newState.leftvalue+ action.payload
          }
        }else{
          return{
            ...newState,
            rightvalue: newState.rightvalue+ action.payload
          }
        }
      
        break; 
        case " ":
          break;  
       default:
        return newState;
 }
  return newState;
  
}


//2.defination area
function App() {

  //2.1 hook area

  const [newState, dispatch] = useReducer(reducerFunction,oldState)



  //2.2 function defination area



  //2.3 return statement
  return (
    <>
       
      <div className="container">
        <form action="true" name="calc" className="calculator">
          <input type="text" className="value" value={newState.result === 0?newState.leftvalue+newState.operator+newState.rightvalue:newState.result} readOnly name="txt" />
          <span className="num clear" onClick={()=>{dispatch({type:CLEAR})}}><i>C</i></span>
          <span className="num"  onClick={()=>{dispatch({type:DIVISION})}}><i>/</i></span>
          <span className="num"  onClick={()=>{dispatch({type:MULTIPLICATION})}}><i>*</i></span>
          <span className="num"  onClick={()=>{dispatch({type:NUMBER,payload:7})}} ><i>7</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:8})}}><i>8</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:9})}}><i>9</i></span>
          <span className="num"  onClick={()=>{dispatch({type:SUBTRACTION})}}><i>-</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:4})}}><i>4</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:5})}}><i>5</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:6})}}><i>6</i></span>
          <span className="num plus"  onClick={()=>{dispatch({type:ADDITION})}}><i>+</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:1})}}><i>1</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:2})}}><i>2</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:3})}}><i>3</i></span>
          <span className="num"onClick={()=>{dispatch({type:NUMBER,payload:0})}}><i>0</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:'00'})}}><i>00</i></span>
          <span className="num" onClick={()=>{dispatch({type:NUMBER,payload:'.'})}}><i>.</i></span>
          <span className="num equal"  onClick={()=>{dispatch({type:RESULT})}}><i>=</i></span>
        </form>
      </div>
    </>
    );
}


//3.export area
export default App;
