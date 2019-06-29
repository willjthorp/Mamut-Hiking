import React from 'react';
import PageHeader from 'components/PageHeader/PageHeader.jsx';
import styled from 'styled-components';
import Instafeed from 'instafeed.js';

const Container = styled.div`
  padding: 1rem;
`;

// export default () => (
//   <Container>
//     <PageHeader>
//       Photos
//     </PageHeader>
//   </Container>
// )

class PhotosPage extends React.Component {
  // componentDidMount() {
  //   const options = {
  //     accessToken: '7425059647.1677ed0.ae59d0109f95400e8559f1ea626e7d5a',
  //     get: 'user', // popular, user
  //     locationId: null,
  //     resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  //     sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  //     userId: 7425059647,
  //   }

  //   var feed = new Instafeed(options);
  //   feed.run();
  // }

  render() {
    return (
      <Container>
        <PageHeader>Photos</PageHeader>

        <div id='instafeed' />
      </Container>
    );
  }
}

export default PhotosPage;
