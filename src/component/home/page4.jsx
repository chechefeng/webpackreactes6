import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import Page3 from "./pag3"
export default class Loadmore extends PureComponent {
    constructor(props,context) {
        super(props, context)
        this.state = {
            slides: ["111111111","222222222222","333333333333"]
        }

    };

    componentDidMount = () => {
           // console.log(this.refs.swipercontainer)
        var swipercontainer=this.refs.swipercontainer
        var mySwiper =new Swiper(swipercontainer,{
            initialSlide :0,
        });

    };
    //在组件挂载之前调用一次。如果在这个函数里面调用setState，
    // 本次的render函数可以看到更新后的state，并且只渲染一次。
    componentWillMount=()=>{
        // getAsyncSlideData()
        //     .then(slides => this.setState({ slides }))
    };
    //props是父组件传递给子组件的。父组件发生render的时候子组件就会调用componentWillReceiveProps（不管props有没有更新，也不管父子组件之间有没有数据交换）
    componentWillReceiveProps=(nextProps)=>{

    };
    //组件被卸载的时候调用
    componentWillUnmount=()=>{

    };

    render() {
        const { slides } = this.state
        return (
            <div>
                <Page3/>
                <div className="swiper-container" ref="swipercontainer">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            slider1
                            slider1
                            slider1
                            slider1
                        </div>
                        <div className="swiper-slide">slider2</div>
                        <div className="swiper-slide">slider3</div>
                    </div>
                </div>
            </div>
        )
    }
}

