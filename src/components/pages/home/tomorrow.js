import React, { Component } from 'react';

class Tomorrow extends Component{
    render(){
        return(
        <div>
            <h4 className="gridItemHeader">Tomorrow</h4>
                <div className="gridItemContent">
                    <p>Lo:{this.props.tomorrowMin}</p>
                    <p>Hi:{this.props.tomorrowMax}</p>
                    <p>{this.props.tomorrowForcast}</p>
                </div>
        </div>
        )
    }
}

export default Tomorrow;