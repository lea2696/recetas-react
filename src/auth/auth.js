import axios from "axios";

export const LoginUser = async (user) => {
      let  data = {
            email: user.email,
            password: user.password
        }
        console.log(data)
   return axios.post("https://recetas-node.herokuapp.com/login", data)
    .then(response=>{
        return response.data
    })
    .catch(err =>{
        return err;
    })
}
export const CheckToken = async (token) => {
    let headers = {
        header: {
            token
        }
    }
    return axios.post("https://recetas-node.herokuapp.com/login/check", null, {
        headers: {
            token
        }})
    .then(response => {
        return response.data.ok
    })
    .catch(err =>{
        console.log(err);
        return err;
    })
}

