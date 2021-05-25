import React from 'react'
import UserService from '../services/UserService'

class UserComponents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

componentDidMount(){
    UserService.getUsers().then(( response ) =>{
        this.setState({ users:response.data})
    });
}

    render(){
        return(
            <div>
             <h1 > Players List</h1>
             <center><table>
             <thead>
             <tr>
             <td>PlayersId </td>
             <td> Name </td>
             <td>Type</td>
             <td> Country </td>
             </tr>
             </thead>
             <tbody>
             {
                 this.state.users.map(
                     user =>
                     <tr key = { user.id}>
                     <td> {user.id}</td>
                     <td>{user.name}</td>
                     <td>{user.type}</td>
                     <td>{user.country}</td></tr>
                 )
             }
             </tbody>
             </table></center>
            </div>
        )
          

    
    }
}
export default UserComponents