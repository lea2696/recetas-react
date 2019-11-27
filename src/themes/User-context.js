import React from "react";
export const UserContext = React.createContext();

export default class UserProvider extends React.Component {
    state = {
        token: null,
        user: null
    }
    componentDidMount () {
        let token = localStorage.getItem("token");
        if(token){
        let payload = this.parseJwt(token);
        if(this.checkToken(payload)){
           this.setState({
               token,
               payload
           })
        }
        console.log(payload);
    }
      

    }
    parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };

    checkToken = (payload) => {
       return  Date.now() >= payload.exp * 1000 ? false : true
           
    }
    render(){
        return (
        <UserContext.Provider value ={{
            state: this.state,
            getToken: () => this.state.token,
            addToken: (token) => {
                let payload = this.parseJwt(token);
                if(this.checkToken(payload)){
                    this.setState({
                        token, 
                        payload
                    })
                }
            } 
        }}>
        {this.props.children}
        </UserContext.Provider>
        )
    }
}