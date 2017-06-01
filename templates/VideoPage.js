/**
 * This template is used as an entrypoint for Hypernova.
 * Notice the 'renderReact' method being used.
 */
// import { renderReactRedux } from 'hypernova-react-redux';
// import configureStore from '../stores/store.js';
// import VideoCarousel from '../components/VideoCarousel';

// const VideoPage = renderReactRedux('../components/VideoCarousel.js', VideoCarousel, configureStore);

// console.log(VideoPage);

// export default VideoPage;

import { renderReactRedux } from 'hypernova-react-redux';
import ConnectedComponent from '../containers/VideoPage';
import configureStore from '../stores/store';

export default renderReactRedux(
  'VideoPage',
  ConnectedComponent,
  configureStore
);