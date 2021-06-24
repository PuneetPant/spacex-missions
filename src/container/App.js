import React, { useState } from 'react';

import Filters from '../components/Filters/Filters';
import Missions from '../components/Missions/Missions';
import Footer from '../components/Footer/Footer';

import './App.scss';

const App = () => {
    const [year, setYear] = useState('');
    const [launch, setLaunch] = useState('');
    const [landing, setLanding] = useState('');

    const handleYearChange = (yearValueFromFilter) => {
        console.log('in handleYearChange', yearValueFromFilter);
        setYear(yearValueFromFilter);
    }
    const handleLaunchChange = (launchValueFromFilter) => {
        setLaunch(launchValueFromFilter);
    }
    const handleLandingChange = (landingValueFromFilter) => {
        setLanding(landingValueFromFilter);
    }
    console.log('App.js')
    return (
        <>
            <div className="page-wrapper">
                <h2 className="heading">SpacEX Launch Programs</h2>
                <div className="page-content">
                    <Filters
                        yearValue={year}
                        onSelectYear={handleYearChange}
                        launchValue={launch}
                        onSelectLaunch={handleLaunchChange}
                        landingValue={landing}
                        onSelectLanding={handleLandingChange}
                    />
                    <Missions yearValue={year} launchValue={launch} landingValue={landing} />
                </div>

            </div>
            <Footer />
        </>
    )
}
export default App;