import React, { useState } from "react";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const Post = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const Submit=(e)=>{
        e.preventDefault();
        console.log(title,body)
    }
  return (
    <div>
       <Container maxWidth="sm" style={{ marginTop: "150px"}}>
      <Card
        style={{
          height: "500px",
          border: "1px solid #eee",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <div style={{ margin: "40px", padding: "10px" }}>
            <form noValidate autoComplete="off">
              <TextField id="title"  label="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
              <br />
              <TextField id="content"  label="body" value={body} onChange={(e)=>setBody(e.target.value)}/>
              <br />
              <input
                type="file"
                style={{ margin: "30px", marginLeft: "120px" }}
              />
              <br />

              <Button variant="contained" color="primary" onClick={(e)=>Submit(e)}>
                Submit
              </Button>
            </form>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      </Container>
    </div>
  );
};
export default Post;
