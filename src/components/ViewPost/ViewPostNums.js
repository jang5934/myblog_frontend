import React, { Component } from 'react'
import left_arrow from '../../assets/left_arrow_page.svg'
import right_arrow from '../../assets/right_arrow_page.svg'

export default class ViewPostNums extends Component {

    state = {
        totPostNum: null,
        curPostNum: null,
        totRangeNum: null,
        curRangeNum: null,
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
            }
        }
    }

    floatToint(value) {
        return value | 0
    }

    makeRenderContext = () => {
        var renderContext = []
        if (this.state.curRangeNum !== this.state.totRangeNum) {
            renderContext.push(<img src={left_arrow} class="view-post-numbering-element" onClick={this.move_left} alt="left" />)
        }

        var startNum = this.state.curRangeNum * 5;
        startNum = startNum > this.state.totPostNum ? this.state.totPostNum : startNum;

        if (this.state.totRangeNum === this.state.curRangeNum && startNum > this.state.totPostNum) {
            startNum = this.state.totPostNum;
        }

        var i = 0;
        while (1) {
            if ((startNum - i) === (this.state.curRangeNum - 1) * 5) {
                break;
            }

            if ((startNum - i) === this.state.curPostNum)
                renderContext.push(<div class="view-post-numbering-element" alt="selected"><b>{startNum - i}</b></div>)
            else
                renderContext.push(<div class="view-post-numbering-element" onclick="">{startNum - i}</div>)
            i++;
        }

        if (this.state.curRangeNum !== 1)
            renderContext.push(<img src={right_arrow} class="view-post-numbering-element" onClick={this.move_right} alt="right" />)

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