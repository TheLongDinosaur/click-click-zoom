import React, { Component } from 'react';
import './App.css';
import cars from './cars.json'
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Title from './components/Title'
import Card from './components/Card'

class App extends Component {
    state = {
        message: "Click a car to start the game!",
        topScore: 0,
        curScore: 0,
        cars: cars,
        unselectedCars: cars
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectCar = make => {
        const findCar = this.state.unselectedCars.find(item => item.make === make);

        if(findCar === undefined) {
            this.setState({ 
                message: "Oh no! You already clicked that car!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                cars: cars,
                unselectedCars: cars
            });
        }
        else {
            const newCars = this.state.unselectedCars.filter(item => item.make !== make);
            
            this.setState({ 
                message: "Great job! Choose another!",
                curScore: this.state.curScore + 1,
                cars: cars,
                unselectedCars: newCars
            });
        }

        this.shuffleArray(cars);
    };

    render() {
        return (
            <Wrapper>
                <Nav
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.cars.map(car => (
                        <Card
                            make={car.make}
                            image={car.image}
                            selectCar={this.selectCar} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;