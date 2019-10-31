import React from "react";

export default function(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Enter Name:</label>
      <input value={props.player} name="player" onChange={props.onChange} />
      <input type="submit" />
    </form>
  );
}