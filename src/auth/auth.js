import axios from "axios";
const url = "https://recetas-node.herokuapp.com";



export const Check = async(token) => {
    let auth = false;
    try {
      auth = await  CheckToken(token)
    } 
    catch {
        auth = false
    }
    return auth;
}

export const LoginUser = async (user) => {
      let  data = {
            email: user.email,
            password: user.password
        }
        console.log(data)
   return axios.post(`${url}/login`, data)
    .then(response=>{
        return response.data
    })
    .catch(err =>{
        return err;
    })
}
export const CheckToken = async (token) => {


 let response = await axios.post(`${url}/login/check`, null, {
        headers: {
            token
        }})
    .then(response => {
        return true
    })
    .catch(err =>{
        return false;
    });
    return response;
}
export const CreateUser = async (user) => {

    return  axios.post(`${url}/usuarios/crear-usuario`, user)
    .then(res=>{
        console.log(res);
       return  res;
    })
    .catch(err =>{
        console.log(err.response);
       return err.response;
    })

}

