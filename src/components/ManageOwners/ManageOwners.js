import React, {Component} from 'react';
import axios from 'axios';

class ManageOwners extends Component{
    state ={
        owners: []
    }
    componentDidMount(){
        this.getOwners();
    }
    getOwners = () =>{
        axios.get('/owners')
            .then((result)=>{
                this.setState({owners: result.data})
            }).catch((error)=>{
                console.log(error);
            })
    }
    render(){
        return(
            <>
            <div>Manage Owners Here</div>
            {this.state.owners.map((owner) =>{
                return(
                    <p>{owner.ownerName}</p>
                )
            })}
            </>
        )
    }
}

export default ManageOwners;