import { Container, Tab, Tabs, Box, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TabPanel } from '../NYTModal/TabPanel.jsx';
import MostClubbed from './MostClubbed.jsx';
import MostCompleted from './MostCompleted.jsx';
import { getLeaderboardData } from '../../../requests/index.js';


const containerStyle = {
  height: '50px',
  width: '290px',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Leaderboard = ({currentUserData}) => {
  const [value, setValue] = useState(0);
  const [leaderboardData, setLeaderboardData] = useState([]);

  const fetchLeaderboards = (username) => {
    getLeaderboardData(username)
      .then((leaderboardData) => {
        setLeaderboardData(leaderboardData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchLeaderboards(currentUserData);
  }, []);

  return (
      <Content>
        <Tabs value={value} onChange={handleChange} style={{width: '100%'}} center>
          <Tab label='Top Readers' style={{fontSize: 14, minWidth:'50%', fontWeight: '800'}} wrapped/>
          <Tab label='Most Clubs' style={{fontSize: 14, minWidth:'50%', fontWeight: '800'}} wrapped/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <MostCompleted leaderboardData={leaderboardData}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MostClubbed leaderboardData={leaderboardData}/>
        </TabPanel>
      </Content>
  );
};

export default Leaderboard;
