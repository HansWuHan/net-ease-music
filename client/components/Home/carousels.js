import React,{ Component } from 'react';
import { render } from 'react-dom';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import './carousels.less';

class Carousels extends Component {
    state = {
        data: ['', '', '', ''],
        initialHeight: 350,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['banner1', 'banner2', 'banner3', 'banner4','banner5','banner6'],
            });
        }, 100);
    }
    render() {
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (
            <Carousel
                className="my-carousel"
                autoplay={true}
                infinite={true}
                selectedIndex={0}
                swipeSpeed={500}
            >
                {this.state.data.map(ii => (
                    <a href="#" key={ii} style={hProp}>
                        <img
                            src={`/imgs/${ii || 'banner1'}.jpg`}
                            alt="icon"
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({
                                    initialHeight: null,
                                });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        );
    }
}

export default Carousels;
