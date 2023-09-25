import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const  Example= ()=> {
  const [chartData, setChartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [
        {
          breakpoint: 1180,
          options: {
            chart: {
              width: 800,

            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
    </div>
  );
}

export default Example;

