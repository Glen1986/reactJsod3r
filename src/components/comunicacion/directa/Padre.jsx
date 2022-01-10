import React from 'react';
import Hijo from './Hijo';

export default props =>
  <div>
    <Hijo{...props}>Juan</Hijo>
    <Hijo apellido={props.apellido}>Maria</Hijo>
    <Hijo apellido="parra">Pedro</Hijo>
  </div>
