import React, { Component } from 'react';

class FutureDay extends Component{
    render(){
        return(
        <div>
            <h4 className="gridItemSmallHeader">{this.props.header}</h4>
                <div className="gridItemContent">
                    <p>Lo:{this.props.minTemp}</p>
                    <p>Hi:{this.props.maxTemp}</p>
                </div>
        </div>
        )
    }
}

export default FutureDay;