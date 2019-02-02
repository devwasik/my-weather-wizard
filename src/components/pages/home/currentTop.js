import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Skycons from 'react-skycons'

class CurrentTop extends Component {
    render() {
        return (
            <div className="current" id="currentTop">
                <h3>Now</h3>
                <Col xs={12} sm={4}>
                    <Skycons
                        color='black'
                        icon={this.props.currentIcon}
                        autoplay={true}
                    />
                    <p>{this.props.currentSummary}</p>
                </Col>
                <Col xs={12} sm={8}>
                    <h3>{this.props.currentTemp}°</h3>
                    <p>Feels like {this.props.currentFeelsLike}</p>


                    <p>{this.props.currentSummaryDetail}</p>
                </Col>

            </div>
        )
    }
}

export default CurrentTop;