import React from 'react';
import { Component } from 'react';

class Spinner extends  React.Component { 
  
  render() {
    return (
      <div id="spinner">
      	<div className="basicOuter">
      		<div className="basicInner">
        		<div>Cargando...</div>
        	</div>
        </div>
      </div>
    );
  }
}


export default Spinner