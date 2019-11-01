import React from "react";

export default function(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Enter Lobby ID:</label>
      <input value={props.values} name="lobbyId" onChange={props.onChange} />
      <input type="submit" />
    </form>
  );
}