import React from 'react';

import Week from './week.js'

class Main extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = { };
  }

  render() 
  {
    return (
        <div class="bordered-div">
          <p>Week Div</p>
          <Week />
        </div>
    );
  }
}

export default Main;