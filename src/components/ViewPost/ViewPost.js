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

        let tempNummap = [0, 1, 2, 4, 5, 6, 10, 12, 14, 15, 16, 17, 18, 19, 22, 23, 24]

        //TODO - REST로 포스트 받아오는 부분 짜야함
        // 아래는 더미 데이터임
        this.state = {
            subCatNumber: props.match.params.scid,
            subCatSubject: "서브 카테고리 제목",
            postTotalCount: 16,
            postNumber: 16,
            postSubject: "포스트 제목",
            postDate: "2021/01/06",
            postBody: <div>ㅋㅋㅋ<br></br>ㅠㅠㅠㅠ<br></br>ㅎㅎㅎㅎ</div>,
            postNumMap: tempNummap,
        }
    }

    navHandler(postNum){
        // 이부분에서는 실제 포스트 번호에 해당하는 포스트의 전체 정보를 POST로 얻어온 뒤
        // 현 컴퍼넌트의 상태값을 얻어온 값으로 덮어써줘야함.
        // 일단 더미데이터 넣을것임.
        alert(postNum)
        console.log(this)
    }

    componentWillReceiveProps() {
        alert(this.props.match.params.scid)
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