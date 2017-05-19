/**
 * This template is used as an entrypoint for Hypernova.
 * Notice the 'renderReact' method being used.
 */
const React = require('react');
const {renderReact} = require('hypernova-react');
const VideoCarousel = require('../components/VideoCarousel');
const VideoItem = require('../components/VideoItem');

class VideoPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {header, videos} = this.props;

        return (
            <div>
                <VideoCarousel
                    header={header}
                    videos={videos}
                />
            </div>
        );

    }
}

module.exports = renderReact('VideoCarousel', VideoPage);