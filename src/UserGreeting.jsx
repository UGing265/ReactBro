import PropTypes from 'prop-types'

function UserGreeting(props){
    /*method 1 (bad idea)
        if(props.isLoggingIn){
            return <h2>Welcome {props.username}</h2>
        }//can use else but cut still better
            return <h2>Failed! please try again</h2> 
    */
  
    //method 2 (better)
    const Success = <h2 className="Welcome-name">Welcome {props.username}</h2>
    const Failed = <h2 className="login-prompt">Failed! please try again</h2>

    return(props.isLoggingIn ? Success : Failed)
}

UserGreeting.proptypes = {
    isLoggingIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggingIn: false,
    username: "Guest",
}

export default UserGreeting
