import { Component } from "react";

export class GroceryList extends Component {

    state =  {
        userInput: "",
        groceryList: [],
    }

    onChangeEvent(e) {
        this.setState({userInput:e})
        //console.log (e)
    }

    addItim(input) {
        if (input === "") {alert('Внесите данные')}
        else{
        let ListArray = this.state.groceryList;
        ListArray.push(input);
        this.setState({groceryList: ListArray, userInput: ''});
        console.log(ListArray)
        }
    }

    crosseWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    deleteItem(e) {
        let ListArray = this.state.groceryList;
        ListArray = [];
        // ListArray.length = 0; 
        this.setState({groceryList: ListArray})
    }

    onFormSubmit(e){
        e.preventDefault();
    }
render() {
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="conteiner">
            <input
            type = 'text'
            placeholder="Что ты хочешь купить?"
            onChange= {(e) => { this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}
            />
            </div>
            <div className="conteiner">
                <button className="btn btn-add" onClick={() => this.addItim(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((iteam, index) =>
                 (<li onClick={this.crosseWord} key={index}>
                     {/*<img src={check} width= "40px"/> */}
                     {iteam}</li>))}
                
            </ul>
            <div className="conteiner">
                <button className="btn btn-delete" onClick={() => this.deleteItem()}>Del</button>
            </div>
            </form>
        </div>
    )
}



}
