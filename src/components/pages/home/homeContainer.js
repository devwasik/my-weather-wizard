import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Current from './current';
import RightCol from './rightCol';
import FutureDay from './futureDay';
const axios = require('axios')
const moment = require('moment');
require('dotenv').config();
const weatherAPI = process.env.REACT_APP_DARKSKY_API_KEY


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTemp: '',
            currentFeelsLike: '',
            currentIcon: '',
            currentSummaryDetail: '',
            tomorrowMin: '',
            tomorrowMax: '',
            tomorrowForcast: '',
            dates: []
        }
    }
    

    getWeatherData = (dates) => {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + weatherAPI + '/42.9106,-87.8606')
        .then(resp => {
           let icon = resp.data.currently.icon.replace('-', '_');
           icon = icon.toUpperCase();
            this.setState({
                currentTemp: resp.data.currently.temperature,
                currentFeelsLike: resp.data.currently.apparentTemperature,
                currentIcon: icon,
                currentSummaryDetail: resp.data.currently.summary
                // currentTemp:resp.data.list[0].main.temp,
                // minTemp: resp.data.list[0].main.temp_min,
                // maxTemp: resp.data.list[0].main.temp_max,
                // tomorrowMin: resp.data.list[1].main.temp_min,
                // tomorrowMax: resp.data.list[1].main.temp_max,
                // tomorrowForcast: resp.data.list[1].weather[0].main,

            })
        })
        .catch(function (error) {
            alert(error);
        });

    }

    getFutureDates = () => {
        let dates = [];
        for( let i = 2 ; i < 8; i++ ) { 
            dates.push(moment(new Date()).add(i,'days').format('L'))
         }
         this.setState({
             dates: dates
         })
        }

    componentDidMount() {
        this.getFutureDates();
        this.getWeatherData(this.state.dates);
        this.interval = setInterval(() => this.getWeatherData(), 300000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render() {
        return (
            <div>
                <Grid>
                    <Row className="homeGridRow">
                        <Col xs={12} sm={6} className="homeGrid">
                            <div>
                                <Current 
                                    currentTemp={this.state.currentTemp} 
                                    currentFeelsLike={this.state.currentFeelsLike} 
                                    currentIcon={this.state.currentIcon} 
                                    currentSummary={this.state.currentSummary} 
                                    currentSummaryDetail={this.state.currentSummaryDetail} 
                                />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} className="homeGrid">
                            <div>
                                <RightCol dates={this.state.dates} />
                            </div>

                        </Col>
                    </Row>


                </Grid>
            </div>
        )
    }
}

export default Home;