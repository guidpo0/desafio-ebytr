import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import getClimates from '../services/getClimates';
import getDistricts from '../services/getDistricts';
import getDates from '../services/getDates';

function DataProvider({ children }) {
  const [dates, setDates] = useState([{ dateId: 1, dateName: '', districtId: 1 }]);
  const [districts, setDistricts] = useState([{ districtId: 1, districtName: '', state: '' }]);
  const [climates, setClimates] = useState([{
    climateId: 1, climateHour: 0, climateRain: 0, dateId: 0,
  }]);

  useEffect(() => {
    getClimates.getAll().then((climatesData) => setClimates(climatesData));
    getDistricts.getAll().then((districtsData) => setDistricts(districtsData));
    getDates.getAll().then((datesData) => setDates(datesData));
  }, []);

  const contextValue = {
    dates,
    setDates,
    districts,
    setDistricts,
    climates,
    setClimates,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DataProvider;
