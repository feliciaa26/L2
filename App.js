import React from 'react';
import {Text, StatusBar, ScrollView} from 'react-native';
import Movie from './components/Movie.js';

const AllMovies = () => {
    return (
        <ScrollView>
            <Movie title="Doctor Sleep" year={2019} icon="infocirlce" poster={require('./img/doctor-sleep.jpg')}/>
            <Movie title="Midway" year={2020} icon="infocirlce" poster={require('./img/midway.jpg')}/>
            <Movie title="Boat" year={2021} icon="infocirlce" poster={require('./img/flipper.jpg')}/>
        </ScrollView>
    );
};
export default AllMovies;