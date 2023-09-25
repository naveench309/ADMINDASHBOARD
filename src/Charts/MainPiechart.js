import React from 'react';
import PieChart from '/PieChart';

const MainPiechart = () => {
  // Define your pie chart data here
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  };

  return (
    <div>
      <h1>Pie Chart Example</h1>
      <PieChart data={data} /> {/* Use the PieChart component */}
    </div>
  );
};

export default MainPiechart;