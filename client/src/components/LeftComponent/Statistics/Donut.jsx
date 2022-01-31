import React from 'react';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@material-ui/core'

ChartJS.register(ArcElement, Tooltip, Legend);

const boxStyle = {
  height: '100%',
  width: '100%',
  marginBottom: 5,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Donut = ({completed, current, queue, bookClub}) => {
  return (
    <Box style={boxStyle}>
      <Doughnut
        data={{
          labels: [`   Completed: ${completed + bookClub}`, `       Reading: ${current}`, `Plan to Read: ${queue}`],
          datasets: [
            {
              label: 'Books Statistics',
              data:[completed, current, queue],
              backgroundColor: ['#fdc57b', '#7fa99b', '#394a51'],
              hoverOffset: 4
            }
          ]
        }}
        width={215}
        height={215}
        options={{
          maintainAspectRatio: false,
          responsive: false,
        }}
      />
    </Box>
  )
};

export default Donut;
