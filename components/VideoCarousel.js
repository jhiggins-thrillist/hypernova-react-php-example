/**
 * VideoCarousel
 * Renders a header and a list of VideoItems
 */
import React from 'react';
import {Component} from 'react';
import {renderReact} from 'hypernova-react';

// Load child components
import VideoItem from './VideoItem';

class VideoCarousel extends Component {

    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        let {header, videos, count, onIncrement} = this.props;
        let videoItems = this.renderVideoItems();

        return (
            <div>
                <h1 onClick={(e) => onIncrement() }>
                    {header}
                </h1>
                <h2>
                    Count: {count}
                </h2>
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
        let {count} = this.props;
        var i = 0;

        // Create video items for each video and pass object as props
        let videoItems = this.props.videos.map((video) => {
            i++;
            return (
                <VideoItem {...video} key={Math.floor(Math.random() * 10000)}></VideoItem>
            );
        });

        // If empty, add some other text
        if (!videoItems.length) {
            videoItems.push(<div key={0}>no videos!</div>);
        }

        return videoItems;
    }

    onClick(e) {
        console.log('onclick');
    }

}

VideoCarousel.defaultProps = {
    header: 'Default header',
    videos: [],
    count: 1
};

module.exports = VideoCarousel;
