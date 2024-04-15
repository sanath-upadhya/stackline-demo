import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  data.map(item => {
    item.date = new Date(item.date);
  });

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const labels = data.map(item => item.date.toLocaleString('default', { month: 'long' }));
    const values = data.map(item => item.value);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Value',
          data: values,
          borderColor: 'blue',
          fill: false,
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });
  }, [data]);

  return (
    <canvas ref={chartRef} />
  );
};

export default LineChart;
