import React, {Component} from 'react';
import axios from 'axios';

class Dahsboard extends Component{
    state = {
        petName: '',
        petColor: '',
        petBreed: '',
        petOwner: '',
    }

    handleChange = (event, propertyName)=>{
        this.setState({
            [propertyName]: event.target.value,
        })
    }

    handleSubmit = ()=>{
        console.log('submit was clicked!');
        console.log(this.state);
    }

    render(){
        return(
            <div>Dahsboard Here
            
                <div className="petInput">
                    <h2>Add Pet</h2>
                    <input value={this.state.petName} 
                            placeholder="Pet Name" 
                            onChange={(event)=>{this.handleChange(event, 'petName')}}>
                    </input>

                    <input value={this.state.petColor} 
                            placeholder="Pet Color" 
                            onChange={(event)=>{this.handleChange(event, 'petColor')}}>  
                    </input>

                    <input value={this.state.petBreed} 
                            placeholder="Pet Breed" 
                            onChange={(event)=>{this.handleChange(event, 'petBreed')}}>
                    </input>

                    <select value={this.state.petOwner} onChange={(event)=>{this.handleChange(event, 'petOwner')}}>
                        <option value="">--OwnerName--</option>
    
                    </select>

                    <button onClick={this.handleSubmit}>Submit</button>
                </div>

                <div className="history">
                    <h2>History</h2>
                    <table>

                    </table>
                </div>
            </div>
        )
    }
}

export default Dahsboard;