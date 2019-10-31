import React, {Component} from 'react';

class PetTR extends Component{

    render(){
        return(
            <tr >
                <td>{this.props.pet.p_owner_id}</td>
                <td>{this.props.pet.p_name}</td>
                <td>{this.props.pet.p_breed}</td>
                <td>{this.props.pet.p_color}</td>
                <td>{this.props.pet.p_checkIn}</td>
                <td><button>Delete</button> | <button>Check In</button></td>
            </tr>
        )
    }
}

export default PetTR;