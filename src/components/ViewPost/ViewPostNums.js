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
        
        //Todo - rest로 해당 서브카테고리의 포스트 갯수 가져오기
        const dataTotPostNum = 6
        const dataCurPostNum = 6

        if (dataTotPostNum === 0) {
            return null
        }
        else {
            this.state = {
                totPostNum: dataTotPostNum,
                curPostNum: dataCurPostNum,
                totRangeNum: this.floatToint(dataTotPostNum / 5) + (dataTotPostNum % 5 === 0 ? 0 : 1),
                curRangeNum: this.floatToint(dataCurPostNum / 5) + (dataCurPostNum % 5 === 0 ? 0 : 1),
            }
        }
    }

    floatToint(value) {
        return value | 0
    }

    makeRenderContext = () => {
        var renderContext = []
        if (this.state.curRangeNum !== this.state.totRangeNum) {
            renderContext.push(<img src={left_arrow} class="view-post-numbering-element" onClick={this.move_left} size="30px" alt="left" />)
        }

        var startNum = this.state.curRangeNum * 5;
        startNum = startNum > this.state.totPostNum ?this.state.totPostNum : startNum;

        if (this.state.totRangeNum === this.state.curRangeNum && startNum > this.state.totPostNum) {
            startNum = this.state.totPostNum;
        }

        var i = 0;
        while(1) {
            if((startNum - i) === (this.state.curRangeNum - 1) * 5) {
                break;
            }

            if ((startNum - i) === this.curPostNum)
                renderContext.push(<div class="view-post-numbering-element" alt="selected"><b>{startNum - i}</b></div>)
            else
                renderContext.push(<div class="view-post-numbering-element" onclick="">{startNum - i}</div>)
            i++;
        }

        if (this.state.curRangeNum !== 1)
            renderContext.push(<img src={right_arrow} class="view-post-numbering-element" onClick={this.move_right} size="30px" alt="right" />)

        return renderContext
    }

    move_left = () => {
        this.setState({
             curRangeNum: (this.state.totRangeNum > this.state.curRangeNum? this.state.curRangeNum + 1 : this.state.curRangeNum)
            })
    }


    move_right = () => {
        this.setState({
                curRangeNum: (1 < this.state.curRangeNum? this.state.curRangeNum - 1 : this.state.curRangeNum)
            })
    }


    render() {
        return <div className="view-post-numbering">
            {this.makeRenderContext()}
        </div>
    }
}