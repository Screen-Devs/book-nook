import { Container, Tab, Tabs, Box, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TabPanel } from '../NYTModal/TabPanel.jsx';
import MostClubbed from './MostClubbed.jsx';
import MostCompleted from './MostCompleted.jsx';
import { getLeaderboardData } from '../../../requests/index.js';

const containerStyle = {
  height: '100%',
  width: '100%',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const Content = styled.div`
  width: 100%
`;

const Leaderboard = ({currentUserData}) => {
  const [value, setValue] = useState(0);
  const [leaderboardData, setLeaderboardData] = useState([]);

  const fetchLeaderboards = (username) => {
    //if (username) {
      getLeaderboardData(username)
       .then((leaderboardData) => {
         setLeaderboardData(leaderboardData);
       })
       .catch((err) => {
         console.log(err);
       });
   // }
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchLeaderboards(currentUserData);
  }, []);

  return (
    <Container style={containerStyle}>
      <Content>
        <Tabs value={value} onChange={handleChange} style={{width: '100%'}} center>
          <Tab label='Top Readers' style={{fontSize: 10, minWidth:'50%'}} wrapped/>
          <Tab label='Most Clubs' style={{fontSize: 10, minWidth:'50%'}} wrapped/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <MostCompleted leaderboardData={leaderboardData}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MostClubbed leaderboardData={leaderboardData}/>
        </TabPanel>
      </Content>
    </Container>
  );
};

export default Leaderboard;
