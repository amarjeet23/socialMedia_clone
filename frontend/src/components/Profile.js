import React from "react";
// import Container from "@material-ui/core/Container";

const Profile = () => {
  return (
    <div>
     
      <div className="profilestatus">
        <div>
          <img
            style={{width: "219px", height: "216px", borderRadius: "108px" }} alt=""
            src="https://images.unsplash.com/photo-1587613755309-e8293efe70f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div style={{display:"flex"}}>
            <p>Amarjeet</p><br/>
            <p>40 follower</p>
            <p>40 folowing</p>
        </div>
      </div>
    
    </div>
  );
};

export default Profile;
