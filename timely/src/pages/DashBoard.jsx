import React from 'react';
import ChartComponent from '../Components/ChartComponent';
import data from '../Data/interndata.js';


const DashBoard = () => {
    

    return (
        <div>
            <h1>Your React Chart</h1>
            <ChartComponent data={data} />
        </div>
    );
};

export default DashBoard;
