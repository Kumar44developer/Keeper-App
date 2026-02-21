import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
