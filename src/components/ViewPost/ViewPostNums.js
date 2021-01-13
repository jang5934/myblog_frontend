import React, { Component } from 'react'
import left_arrow from '../../assets/left_arrow_page.svg'
import right_arrow from '../../assets/right_arrow_page.svg'

export default class ViewPostNums extends Component {

    state = {
        totPostNum: null,
        curPostNum: null,
        totRangeNum: null,
        curRangeNum: null,
        navHandler: null,
        postNumMap: null,
    }

    constructor(props) {
        super(props)

        if (props.totPostNum === 0) {
            return null
        }
        else {
            this.state = {
                totPostNum: props.totPostNum,
                curPostNum: props.curPostNum,
                totRangeNum: this.floatToint(props.totPostNum / 5) + (props.totPostNum % 5 === 0 ? 0 : 1),
                curRangeNum: this.floatToint(props.curPostNum / 5) + (props.curPostNum % 5 === 0 ? 0 : 1),
                navHandler: props.navHandler,
                postNumMap: props.postNumMap,
            }
        }
    }

    floatToint(value) {
        return value | 0
    }

    makeRenderContext = () => {
        let renderContext = []
        if (this.state.curRangeNum !== this.state.totRangeNum) {
            renderContext.push(<img src={left_arrow} className="view-post-numbering-element" key="leftButton" onClick={this.move_left} alt="left" />)
        }

        let startNum = this.state.curRangeNum * 5;
        startNum = startNum > this.state.totPostNum ? this.state.totPostNum : startNum;

        if (this.state.totRangeNum === this.state.curRangeNum && startNum > this.state.totPostNum) {
            startNum = this.state.totPostNum;
        }

        for (let i = 0; (startNum - i) !== (this.state.curRangeNum - 1) * 5; i++) {
            if ((startNum - i) === this.state.curPostNum)
                renderContext.push(<div className="view-post-numbering-element" key={startNum - i} alt="selected"><b>{startNum - i}</b></div>)
            else {
                renderContext.push(<div className="view-post-numbering-element" key={startNum - i}
                    onClick={() => {
                        this.state.navHandler(startNum - i)
                    }
                    }>{startNum - i}</div>)
            }
        }

        if (this.state.curRangeNum !== 1)
            renderContext.push(<img src={right_arrow} className="view-post-numbering-element" key="rightButton" onClick={this.move_right} alt="right" />)

        return renderContext
    }

    move_left = () => {
        this.setState({
            curRangeNum: this.state.curRangeNum + 1
        })
    }


    move_right = () => {
        this.setState({
            curRangeNum: this.state.curRangeNum - 1
        })
    }


    render() {
        return <div className="view-post-numbering">
            {this.makeRenderContext()}
        </div>
    }
}