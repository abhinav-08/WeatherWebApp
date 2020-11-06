import React, { Component } from 'react'
import WeatherCard from "./WeatherCard"

export default class WeatherInfo extends Component {
    render() {
        return (
            <div>
                <section className="contact bg-success">
                <br/><br/>
                    <div className="container">
                        <h2 className="text-white">
                            Please refer below to know the Weather Details 
                        </h2>
                        <br/>
                        <div className="card-group">
                            <WeatherCard day="monday" weatherType="fds" minTemp="afs" maxTemp="ssdas"/>
                            <WeatherCard day="monday" weatherType="fds" minTemp="afs" maxTemp="ssdas"/>
                            <WeatherCard day="monday" weatherType="fds" minTemp="afs" maxTemp="ssdas"/>
                            <WeatherCard day="monday" weatherType="fds" minTemp="afs" maxTemp="ssdas"/>
                            <WeatherCard day="monday" weatherType="fds" minTemp="afs" maxTemp="ssdas"/>
                        </div>
                    </div>
                    <br/><br/>
                </section>
            </div>
        )
    }
}
