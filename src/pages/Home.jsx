import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div>
      <Row rowID={6} title='Originals' fetchUrl={requests.requestOriginals} />
      <Row rowID={1} title='Trending' fetchUrl={requests.requestTrending} />
      <Row rowID={4} title='Top Rate' fetchUrl={requests.requestTopRated} />
      <Row rowID={2} title='Action' fetchUrl={requests.requestAction} />
      <Row rowID={5} title='Comedy' fetchUrl={requests.requestComedy} />
      <Row rowID={3} title='Horror' fetchUrl={requests.requestHorror} />
      <Row rowID={5} title='Romance' fetchUrl={requests.requestRomance} />
      <Row
        rowID={5}
        title='Documentary'
        fetchUrl={requests.requestDocumentaries}
      />
    </div>
  );
};

export default Home;
