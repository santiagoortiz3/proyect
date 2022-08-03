import React from 'react';

export const Button = ( { event,text } ) => {
  return (<button onClick={event}>{text}</button>)
}