import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../context/DataContext';
import Select from '../components/Select';
import ForeCast from '../components/ForecastCard';
import './LandingPage.css';

function LandingPage() {
  const { dates, climates, districts } = useContext(DataContext);
  const [selectedDistrictId, setSelectedDistrictId] = useState(districts[0].districtId);
  const [selectableDates, setSelectableDates] = useState(dates);
  const [selectedDateId, setSelectedDateId] = useState(dates[0].dateId);
  const [climateData, setClimateData] = useState(climates);

  const selectDistricData = districts.map(
    ({ districtName, state, districtId: id }) => ({ name: `${districtName}/${state}`, id }),
  );
  const { districtId: selectDistrictValue } = districts.find(
    ({ districtId }) => districtId === selectedDistrictId,
  ) || { districtId: 0 };
  const selectDateData = selectableDates.map(
    ({ dateName: name, dateId: id }) => ({ name, id }),
  );
  const { dateId: selectDateValue } = dates.find(
    ({ dateId }) => dateId === selectedDateId,
  ) || { dateId: 0 };
  const { dateName: foreCastDate } = dates.find(
    ({ dateId }) => dateId === selectedDateId,
  ) || { dateName: '' };

  useEffect(() => {
    const datesAvailable = dates.filter(
      (date) => date.districtId === selectedDistrictId,
    );
    const { dateId: firstDateAvailableId } = datesAvailable[0] || { dateId: 0 };
    const currentClimate = climates.filter(
      ({ dateId }) => dateId === firstDateAvailableId,
    );
    setSelectableDates(datesAvailable);
    setSelectedDateId(firstDateAvailableId);
    setClimateData(currentClimate);
  }, [selectedDistrictId, dates, climates]);

  useEffect(() => {
    setSelectedDistrictId(districts[0].districtId);
  }, [districts]);

  useEffect(() => {
    const currentClimate = climates.filter(({ dateId }) => dateId === selectedDateId);
    setClimateData(currentClimate);
  }, [selectedDateId]);

  return (
    <div className="landing-page-container">
      <h1 className="landing-page-title">Previsão de Chuva Horária</h1>
      <Select
        config={{
          htmlFor: 'district',
          labelText: 'Selecione o bairro',
          selectedValue: selectDistrictValue,
          setSelectedValue: setSelectedDistrictId,
          data: selectDistricData,
        }}
      />
      <Select
        config={{
          htmlFor: 'date',
          labelText: 'Selecione a data',
          selectedValue: selectDateValue,
          setSelectedValue: setSelectedDateId,
          data: selectDateData,
        }}
      />
      <div className="cards-container">
        {
          climateData.map((climate) => (
            <ForeCast
              forecast={climate}
              date={foreCastDate}
              key={climate.climateId}
            />
          ))
        }
      </div>
      <div className="subtitles-container">
        <h3 className="subtitles-title">Legenda</h3>
        <div>
          <p>
            <span style={{ color: 'green' }}>Sem Chuva</span>
            {' - < 0.2 mm'}
          </p>
          <p>
            <span style={{ color: 'blue' }}>Chuva Fraca</span>
            {' - 0.2 a 5.0 mm'}
          </p>
          <p>
            <span style={{ color: 'orange' }}>Chuva Moderada</span>
            {' - 5.1 a 25.0 mm'}
          </p>
          <p>
            <span style={{ color: 'red' }}>Chuva Forte</span>
            {' - > 25.0 mm'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
