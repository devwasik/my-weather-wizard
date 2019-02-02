import React, { Component } from 'react';
import WeekTop from './weekTop'
import WeekBottom from './weekBottom'

class RightCol extends Component {

    render() {
        return (
            <div className="currentGrid">
               <WeekTop 
                    currentTemp={this.props.currentTemp} 
                    currentFeelsLike={this.props.currentFeelsLike} 
                    currentIcon={this.props.currentIcon} 
                    currentSummary={this.props.currentSummary}
                    currentSummaryDetail={this.props.currentSummaryDetail} 
                    />
                    
                {this.props.dates.length !== 0 &&
                <WeekBottom dates={this.props.dates} />
                }     
            
            </div>
        )
    }
}

export default RightCol;