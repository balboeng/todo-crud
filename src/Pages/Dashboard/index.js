import React from 'react'
import { useAuthDispatch, logout, useAuthState } from '../../ContextUser'
 
function Dashboard(props) {
    const dispatch = useAuthDispatch() // read dispatch method from context
    const userDetails = useAuthState() //read user details from context
 
 
    const handleLogout = () => {
        logout(dispatch) //call the logout action
        
        props.history.push('/login') //navigate to logout page on logout
    }
    return (
        <section className='contentBasic'>
            <div >
                <h1>
                    Dashboard
                </h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <p>Welcome {userDetails.userDetails.email}</p>
        </section>
    )
}
 
export default Dashboard