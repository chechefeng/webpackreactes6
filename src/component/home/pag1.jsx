import React, {PureComponent} from 'react';
import Tloader from 'react-touch-loader';
export default class pag1 extends PureComponent {
    constructor(props) {
        super(props)

    };

    handleRefresh=()=>{
        console.log(123)
    };
    handleLoadMore=()=>{

    }

    render() {
        console.log(this.props)
        return (
            <div>
                pag1
                <Tloader
                    //initializing={0}
                    onRefresh={this.handleRefresh}
                    //hasMore={true}
                    onLoadMore={this.handleLoadMore}
                    className="tloader">

                    <ul><li>some items</li></ul>
                </Tloader>
            </div>
        )
    }
}