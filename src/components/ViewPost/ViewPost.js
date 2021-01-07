import React, { Component } from 'react'

export default class ViewPost extends Component{
    state = {
        subCatNumber : null,
        subCatSubject : null,
        postTotalCount : null,
        postNumber : null,
        postSubject : null,
        postDate : null,
        postBody : null,
    }

    render() {

        this.state.subCatNumber = 1
        this.state.subCatSubject = "서브 카테고리 제목"
        this.state.postTotalCount = 100
        this.state.postNumber = 2
        this.state.postSubject = "포스트 제목"
        this.state.postDate = "2021/01/06"
        this.state.postBody = "ㅋㅋㅋ<br>ㅠㅠㅠㅠ<br>ㅎㅎㅎㅎ"
        
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
        </div>
    }
}