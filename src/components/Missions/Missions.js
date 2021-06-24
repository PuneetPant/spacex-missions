import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Missions.scss';

const Missions = ({ yearValue, launchValue, landingValue }) => {
    const [missionData, setMissionData] = useState([]);

    useEffect(() => {
        const cardData = async () => {
            const { data } = await axios.get('https://api.spacexdata.com/v3/launches', {
                params: {
                    limit: 100,
                    launch_year: yearValue,
                    launch_success: launchValue,
                    land_success: landingValue

                }
            });
            // console.log(data);
            setMissionData(data);
        }
        cardData();
    },
        [yearValue, launchValue, landingValue]
    );

    const renderedResults = missionData.map((data, index) => {
        return (
            <div key={index} className="mission-card">
                <div className="mission-img-section">
                    <img src={data.links.mission_patch_small} alt="Not available"></img>
                </div>
                <div className="mission-info">
                    <p className="mission-name">{`${data.mission_name} #${data.flight_number}`}</p>
                    <p className="mission-spacing mission-ids">
                        {data.mission_id.length > 0 ? 'Mission Ids' : ''}
                        {
                            data.mission_id.map((missionId, index) => {
                                return <li key={index} className="mission-val">{missionId}</li>
                            })
                        }
                    </p>
                    <p className="mission-spacing  mission-launch-year">Launch Year:<span className="mission-val">{data.launch_year}</span></p>
                    <p className="mission-spacing  mission-launch">Successful Launch:<span className="mission-val">{`${data.launch_success}`}</span></p>
                    <p className="mission-spacing  mission-landing">Successful Landing:<span className="mission-val">{`${data.tbd}`}</span> </p>
                </div>
            </div>
        )
    })
    console.log('Missions.js');
    return (
        <div className="missions-wrapper">
            {
                missionData.length !== 0 ? renderedResults
                    :
                    missionData.length === 0 && yearValue === '' && launchValue === '' && landingValue === '' ? < div className="loading">Loading data...</div>
                        :
                        <div className="loading">No data available</div>
            }
        </div >
    )
}
export default Missions;