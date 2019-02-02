import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import FutureDay from './futureDay'

class WeekBottom extends Component {

    render() {
        return (
            <div className="week" id="weekBottom">
                                         {this.props.dates.map(date=> 
                            <Col xs={12} sm={6} className="homeGrid">
                                <div className="rightColSmall">
                                    <FutureDay header={date} />
                                </div>
                        </Col>
                        )}
            </div>
        )
    }
}

export default WeekBottom;