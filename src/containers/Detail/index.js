import React from 'react';
import { useParams } from 'react-router';
import { Line } from 'react-chartjs-2';
import { HISTORY_ASSET_API } from '../../util/networkConfig';
import useFetch from '../../hooks/useFetch';
import './detail.css';

// eslint-disable-next-line consistent-return
const prettyPrintHour = hour => {
  if (hour === 24) {
    return '12 AM';
  }
  if (hour > 12) {
    return `${hour % 12} PM`;
  }
  if (hour <= 12) {
    return `${hour} AM`;
  }
};

const Detail = () => {
  const { currency } = useParams();
  const url = HISTORY_ASSET_API`${currency}`;

  const { response, error, loading } = useFetch(url);
  if (loading) {
    return (
      <p>Loading please wait</p>
    );
  }
  if (error) {
    return (
      <p>Error in loading</p>
    );
  }
  const labels = response.data.map(item => prettyPrintHour(new Date(item.time).getHours()));
  const dataPrice = response.data.map(item => parseFloat(item.priceUsd));
  const data = {
    labels,
    datasets: [
      {
        label: `${currency} dataset`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataPrice,
      },
    ],
  };

  return (
    <div className="detail-root">
      <div className="detail-responsive-container">
        <Line data={data} />
      </div>
    </div>
  );
};

export default Detail;
