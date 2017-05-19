/**
 * VideoCarousel
 * Renders a header and a list of VideoItems
 */
const React = require('react');
const {renderReact} = require('hypernova-react');

// Load child components
const VideoItem = require('./VideoItem');

class VideoCarousel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {header, videos} = this.props;
        let videoItems = this.renderVideoItems();

        return (
            <div>
                <h1>{header}</h1>
                <div>
                    {videoItems}
                </div>
            </div>
        );

    }

    /**
     * Creates list of VideoItems
     */
    renderVideoItems() {

        // Create video items for each video and pass object as props
        let videoItems = this.props.videos.map((video, i) => {
            return (
                <VideoItem key={i} {...video}></VideoItem>
            );
        });

        // If empty, add some other text
        if (!videoItems.length) {
            videoItems.push(<div>no videos!</div>);
        }

        return videoItems;
    }

}

VideoCarousel.defaultProps = {
    header: 'Default header',
    videos: []
};

module.exports = VideoCarousel;
