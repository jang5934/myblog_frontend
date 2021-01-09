import React, { Component } from 'react'
import ViewPostNums from './ViewPostNums'

export default class ViewPost extends Component {
    state = {
        subCatNumber: null,
        subCatSubject: null,
        postTotalCount: null,
        postNumber: null,
        postSubject: null,
        postDate: null,
        postBody: null,
    }

    constructor(props) {
        super(props)

        //TODO - REST로 포스트 받아오는 부분 짜야함

        this.state = {
            subCatNumber: 1,
            subCatSubject: "서브 카테고리 제목",
            postTotalCount: 10,
            postNumber: 2,
            postSubject: "포스트 제목",
            postDate: "2021/01/06",
            postBody: <div>ㅋㅋㅋ<br></br>ㅠㅠㅠㅠ<br></br>ㅎㅎㅎㅎ</div>,
        }
    }

    navHandler = () => {

    }

    render() {
        return <div className="view-post">
            <div className="view-post-sub-category-subject">
                {this.state.subCatSubject}
            </div>
            <div className="view-post-subject">
                {this.state.postSubject}
            </div>
            <div className="view-post-date">
                {this.state.postDate}
            </div>
            <div className="view-post-body">
                {this.state.postBody}
            </div>
            <center>
                <ViewPostNums
                totPostNum={this.state.postTotalCount}
                curPostNum={this.state.postNumber}
                postNumMap={this.state.postNumMap}
                navHandler={this.navHandler}/>
             </center>
        </div>
    }
}