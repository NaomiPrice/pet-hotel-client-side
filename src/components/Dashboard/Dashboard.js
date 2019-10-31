import React, {Component} from 'react';
import axios from 'axios';
import PetTR from '../PetTR/PetTR';
import {connect} from 'react-redux';

class Dahsboard extends Component{
    state = {
        petName: '',
        petColor: '',
        petBreed: '',
        petOwner: '',
    }

    getPets = ()=>{
        axios({
            method: 'GET',
            url: '/pets'
        }).then((response)=>{
            console.log(response.data)
            this.props.dispatch({type: 'SET_PETS', payload: response.data});
        }).catch((error)=>{
            console.log('error getting pets', error);
        })
    }

    getOwners = ()=>{
        axios({
            method: 'GET',
            url: '/owners'
        }).then((response)=>{
            console.log(response.data)
            this.props.dispatch({type: 'SET_OWNERS', payload: response.data});
        }).catch((error)=>{
            console.log('error getting owners', error);
        })
    }

    handleChange = (event, propertyName)=>{
        this.setState({
            [propertyName]: event.target.value,
        })
    }

    handleSubmit = ()=>{
        console.log('submit was clicked!');
        console.log(this.state);
        axios({
            method: 'POST',
            url: '/pets/addPet',
            data: this.state
        }).then((response)=>{
            this.getPets();
            this.setState({
                petName: '',
                petColor: '',
                petBreed: '',
                petOwner: '',
            })
        }).catch((error)=>{
            console.log('error posting new pet', error);
        })
    }

    componentDidMount = ()=>{
        this.getOwners();
        this.getPets();
    }


    render(){
        const options = this.props.reduxState.ownerReducer.map((owner)=>{
            return <option value={owner.Owner_name}
                            key={owner.id}> {owner.Owner_name}</option>
        })
        return(
            <div>Dahsboard Here
            
                <div className="petInput">
                    <h2>Add Pet</h2>
                    {JSON.stringify(this.props.reduxState.ownerReducer)}
                    <br></br>
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
                        {options}
                    </select>

                    <button onClick={this.handleSubmit}>Submit</button>
                </div>

                <div className="history">
                    <h2>History</h2>
                    {JSON.stringify(this.props.reduxState.petReducer)}
                    <table>
                        <thead>
                            <tr>
                                <th>Owner</th>
                                <th>Pet</th>
                                <th>Breed</th>
                                <th>Color</th>
                                <th>Checked In</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.reduxState.petReducer.map(pet =>{
                            return (<PetTR key={pet.id} pet={pet}/>)
                                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState)=>({
    reduxState
  })

export default connect(putReduxStateOnProps)(Dahsboard);