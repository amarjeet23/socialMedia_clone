import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import Logo from '../logo.png'
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import axios from "axios"
import Container from "@material-ui/core/Container";


const Login = ()=>{
 const [email,setEmail] =useState('')
 const [password,setPassword] =useState('')
 const [field,setField] =useState('')

 const history = useHistory()

  const Submit = (e) => {
   
      e.preventDefault();
      axios({
        method: 'post',
        url: 'http://localhost:8080/signin',
        headers:{
          "Content-Type":"application/json"
        },
        data:{
          email,
          password
        }
    })
    .then(data =>{
      if(data.data.error){
        console.log(data.data)
        setField(data.data.error)
        return
      }
      else{
        console.log(data)
        localStorage.setItem("jwt",data.data.token)
        localStorage.setItem("user",JSON.stringify(data.data.user))
        history.push("/home")

        
      }
    })
    .catch(error=>{
      console.log(error);
      alert("something went wrong")
    })
  };
  const showSignup=()=>{
      history.push("/signup")
  }
    
    return (
      <div>
        <Container maxWidth="sm" style={{ marginTop: "150px" }}>
        <Card style={{ height: "500px",border:"2px solid #eee" ,borderRadius:"10px",width: "fit-content"}}>
          <CardContent>
            
          
            <img src={Logo} alt="logo" style={{width:"20%"}}/>
            <form
              noValidate
              autoComplete="off"
              style={{ margin: "50px" }}
              
            >
              <p style={{fontSize:"13px",color:"red"}}>{field}</p>
              <TextField
                style={{ margin: "10px" }}
                id="email"
                label="E-mail"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <br />
              <TextField
                id="password"
                label="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <br />

              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: "40px", marginLeft: "-20px" }}
                onClick={(e)=>Submit(e)}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginTop: "40px", marginLeft: "30px" }}
                onClick={()=>showSignup()}
              >
                Signup
              </Button>
            </form>
          </CardContent>
          <CardActions></CardActions>
        
        </Card>
        </Container>
        </div>
        
    );
  
}

export default Login;
