import React, { Component } from 'react';
import { View, LinearGradient } from 'react-native';
import { Title } from '@shoutem/ui';
import Slideshow from 'react-native-slideshow';

export default class SlideshowTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
        };
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.props.dataSource.length ? 0 : this.state.position + 1
                });
            }, this.props.interval || 3000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <Slideshow
                onPress={this.props.onPress}
                dataSource={this.props.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })}
                {...this.props}
                />
        );
    }
}

const styles = {
    outerContainer: {
    }
}