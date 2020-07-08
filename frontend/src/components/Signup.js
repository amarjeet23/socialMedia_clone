import React, { useState} from "react";
import Logo from "../logo.png";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom"

import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Container from "@material-ui/core/Container";


const Signup=()=> {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory()
  const [error,setError] = useState("")
 
 

  const Submit = (e) => {
    
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8080/signup",
      headers: {
        "Content-Type": "Application/json",
      },
      data: {
        name,
        email,
        password,
      },
    }).then((data) => {
      if (data.data.error) {
        console.log(data);
        setError(data.data.error)
        return 
      } else {
        console.log(data);
        history.push("/")
      }
    });
  };
  
  
    
    return (
      <div>
        <Container maxWidth="sm" style={{ marginTop: "150px"}}>
          <Card
            style={{
              height: "500px",
              border: "2px solid #eee",
              borderRadius: "10px",
              width: "fit-content",
            }}
          >
            <CardContent>
              <img src={Logo} alt="logo" style={{ width: "20%" }} />
              <p style={{fontSize:"13px",color:"red"}}>{error}</p>
              <form noValidate autoComplete="off" style={{ margin: "50px" }}>
                <TextField
                  style={{ margin: "10px" }}
                  id="standard-basic"
                  label="Name"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                <br />

                <TextField
                  style={{ margin: "10px" }}
                  id="standard-basic"
                  label="E-mail"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <br />
                <TextField
                  id="standard-basic"
                  label="password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <br />

                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginTop: "40px", marginLeft: "10px" }}
                  onClick={(e) => Submit(e)}
                >
                  SignUp
                </Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </div>
    );
  
}

export default Signup;
