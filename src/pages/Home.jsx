import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID={1} title='Upcoming' fetchUrl={requests.requestUpcoming} />
      <Row rowID={2} title='Popular' fetchUrl={requests.requestPopular} />
      <Row rowID={3} title='Horror' fetchUrl={requests.requestHorror} />
      <Row rowID={4} title='Top Rate' fetchUrl={requests.requestTopRated} />
      <Row rowID={5} title='Trending' fetchUrl={requests.requestTrending} />
    </div>
  );
};

export default Home;
