import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <>
      <h1>User Profile Page</h1>
      <h3>User id {id} </h3>
    </>
  );
}

export default User;
