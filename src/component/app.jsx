import React from 'react'
import {BrowserRouter , Route, Link, Switch} from "react-router-dom"
import Home from "./home/home"
import Page1 from "./home/pag1"
import Page2 from "./home/pag2"
import {Button} from 'antd-mobile';
import Footer1 from "./footer/footer1"
import Footer from "./footer/footer"
import "./app.less"
export default class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.recalc();
    }

    //设置根字体大小
    recalc = () => {
        let docEl = document.documentElement;
        /* let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';*/
        //let cw = docEl.clientWidth;
        let cw = document.body.clientWidth

        if (325 <= cw <= 768) {
            docEl.style.fontSize = 50 * (cw / 375) + 'px';
            //console.log('body-fontSize', docEl.style.fontSize);

        }
        else if (cw > 768 && cw <= 1122) {
            docEl.style.fontSize = 25 * (cw / 375) + 'px';
            //console.log('body-fontSize', docEl.style.fontSize);

        }
        else {
            docEl.style.fontSize = 50 + 'px';
            //console.log('body-fontSize', docEl.style.fontSize);

        }
    };

    render() {
        return (
            <div>
                <Footer></Footer>
            </div>
        )
    }

}


// import React from 'react';
// import {render} from 'react-dom';
// import './app.less';
//
// import Tloader from 'react-touch-loader';
//
// export default class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             canRefreshResolve: 1,
//             listLen: 0,
//             hasMore: 0,
//             initializing: 1,
//             refreshedAt: Date.now()
//         }
//     }
//
//     refresh(resolve, reject) {
//         console.log(resolve)
//         console.log(reject)
//         setTimeout(() => {
//             if (!this.state.canRefreshResolve) return reject();
//
//             this.setState({
//                 listLen: 9,
//                 hasMore: 1,
//                 refreshedAt: Date.now()
//             });
//             resolve();
//         }, 2e3);
//     }
//
//     loadMore(resolve) {
//         console.log("123")
//         setTimeout(() => {
//             var l = this.state.listLen + 9;
//
//             this.setState({
//                 listLen: l,
//                 hasMore: l > 0 && l < 50
//             });
//
//             resolve();
//         }, 2e3);
//     }
//
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 listLen: 9,
//                 hasMore: 1,
//                 initializing: 2, // initialized
//             });
//         }, 2e3);
//     }
//
//     onRefresh=(resolve, reject)=>{
//         console.log(123)
//         this.setState({
//             hasMore: 1,
//         });
//         resolve()
//     }
//     render() {
//         var {listLen, hasMore, initializing, refreshedAt, canRefreshResolve} = this.state;
//         var {refresh, loadMore} = this;
//         var list = [];
//
//         if (listLen) {
//             for (var i = 0; i < 30; i++) {
//                 list.push(
//                     <li key={i}>
//                         <p>{i}</p>
//                     </li>
//                 );
//             }
//         }
//         return (
//             <div className="view">
//
//                 {/*<Tloader className="main"*/}
//                 {/*onRefresh={(resolve, reject) => this.refresh(resolve, reject)}*/}
//                 {/*onLoadMore={(resolve) => this.loadMore(resolve)}*/}
//                 {/*hasMore={hasMore}*/}
//                 {/*initializing={initializing}>*/}
//                 {/*<ul>{list}</ul>*/}
//                 {/*</Tloader>*/}
//                 <Tloader className="main"
//                          onRefresh={(resolve, reject) => this.onRefresh(resolve, reject)}
//                          onLoadMore={(resolve) => this.loadMore(resolve)}
//                          hasMore={hasMore}
//                          initializing={initializing}>
//                     <ul>{list}</ul>
//                 </Tloader>
//
//
//             </div>
//         );
//     }
// }
