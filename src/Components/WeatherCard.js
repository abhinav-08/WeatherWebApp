import React, { Component } from 'react'

export default class WeatherCard extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body" ml-2>
                        <h5 className="card-title">{this.props.day}</h5>
                        <p className="card-text">{this.props.weatherType}</p>
                        <p className="card-text">{this.props.minTemp}</p>
                        <p className="card-text">{this.props.maxTemp}</p>
                    </div>
                </div>
            </div>
 
            
        )
    }
}
WeatherCard.defaultProps={
    day:"NoDayProvided",
    weatherType :"NoWeatherconditionProvided",
    minTemp:"Can't Tell",
    maxTemp:"Can't Tell",

};