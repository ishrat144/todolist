import React, {useState} from "react";
import TODOItem from "../TODOItem";

function App() {

const [inputText, setInputText] = useState("");
const [items, setItems] = useState([]);

function handleChange(event){
const newValue = event.target.value;
setInputText(newValue);
}

function addItem() {
  setItems(prevItems => {
    return[...prevItems, inputText];
  });
  setInputText("");
}

function deleteItem(id) {
  
  setItems((prevItems)=>{
return prevItems.filter(
  (item, index) => {
    return index !== id;
  }
);
  }
  );}


  return(
    <div className="main-div">
    <div className="child-div">
        <figure>
            <img src="./images/Fruits.jpg" alt="images" />
        <figcaption>Add Your List Here 💖🔥 </figcaption>
        </figure>
    <div className="form">
      <input onChange={handleChange} type="text" placeholder="😊 Add Item 👍"
        className="form-control"
 value={inputText} />
      <button onClick={addItem}>
        <span>➕</span>
      </button>
    </div>
    </div>
    <div>
    
      <ul>
        {items.map((todoItem, index) => (
          <TODOItem  
          key={index}
          id={index} 
          text={todoItem} 
          onChecked={deleteItem}  
            
          />
         ) )}
        
      </ul>
    </div>
  </div>
  );
}

export default App;
