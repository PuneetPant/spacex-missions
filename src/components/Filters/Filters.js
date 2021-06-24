import React from 'react';
import './Filters.scss';

const yearArray = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
const booleanArray = ['True', 'False'];

const Filters = ({ yearValue, onSelectYear, launchValue, onSelectLaunch, landingValue, onSelectLanding }) => {

    const handleYearClick = (e) => {
        onSelectYear(parseInt(e.target.innerText));
    }

    const handleLaunchClick = (e) => {
        onSelectLaunch(e.target.innerText);
    }

    const handleLandingClick = (e) => {
        onSelectLanding(e.target.innerText);
    }

    const yearValues = yearArray.map((val, index) => {
        return (
            <span key={index} className="button-outer">
                <button
                    className={yearValue === val ? "button-style active" : "button-style"}
                    onClick={(e) => handleYearClick(e)}
                >
                    {val}
                </button>
            </span>

        )
    })
    const launchValues = booleanArray.map((val, index) => {
        return (
            <span key={index} className="button-outer">
                <button
                    className={launchValue === val ? "button-style active" : "button-style"}
                    onClick={(e) => handleLaunchClick(e)}
                >
                    {val}
                </button>
            </span>
        )
    })
    const landingValues = booleanArray.map((val, index) => {
        return (
            <span key={index} className="button-outer">
                <button
                    className={landingValue === val ? "button-style active" : "button-style"}
                    onClick={(e) => handleLandingClick(e)}
                >
                    {val}
                </button>
            </span>
        )
    })

    console.log('Filter.js');
    return (
        <div className="filters-wrapper">
            <div className="filter-section">
                <h4 className="filter-heading">Filters</h4>

                <div className="filter-name filter-launch-year">
                    <p className="filter-section-heading"><span>Launch Year</span></p>
                    <div className="filter-space">
                        {yearValues}
                    </div>
                </div>
                <div className="filter-name filter-succ-launch">
                    <p className="filter-section-heading"><span>Successful Launch</span></p>
                    <div className="filter-space">
                        {launchValues}
                    </div>
                </div>
                <div className="filter-name filter-succ-landing">
                    <p className="filter-section-heading"><span>Successful Landing</span></p>
                    <div className="filter-space">
                        {landingValues}
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Filters;