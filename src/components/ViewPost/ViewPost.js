import React, { Component } from 'react'
import ViewPostNums from './ViewPostNums'
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

    constructor(props){
        super(props)
        
        this.state = {
            subCatNumber: 1,
            subCatSubject: "서브 카테고리 제목",
            postTotalCount: 100,
            postNumber: 2,
            postSubject: "포스트 제목",
            postDate: "2021/01/06",
            postBody: "ㅋㅋㅋ<br>ㅠㅠㅠㅠ<br>ㅎㅎㅎㅎ",
        }
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
            <ViewPostNums/>
        </div>
    }
}