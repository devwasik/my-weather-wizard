import React, { Component } from 'react';
import CurrentTop from './currentTop'
import CurrentBottom from './currentBottom'

class LeftCol extends Component {
    render() {
        return (
            <div className="currentGrid">
               <CurrentTop 
                    currentTemp={this.props.currentTemp} 
                    currentFeelsLike={this.props.currentFeelsLike} 
                    currentIcon={this.props.currentIcon} 
                    currentSummary={this.props.currentSummary}
                    currentSummaryDetail={this.props.currentSummaryDetail} 
                    />
               <CurrentBottom />
            </div>
        )
    }
}

export default LeftCol;