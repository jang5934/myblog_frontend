import React, { Component } from 'react'
import ViewPostNums from './ViewPostNums'
import Axios from 'axios'

export default class ViewPost extends Component {
    state = {
        subCatNumber: null,
        subCatSubject: null,
        postTotalCount: null,
        postNumber: null,
        postSubject: null,
        postDate: null,
        postBody: null,
        postNumMap: null,
    }

    /*
    constructor(props) {
        super(props)

        this.state = {
            subCatNumber: props.match.params.scid,
            subCatSubject: "서브 카테고리 제목",
            postTotalCount: 16,
            postNumber: 16,
            postSubject: "포스트 제목",
            postDate: "2021/01/06",
            postBody: <div>ㅋㅋㅋ<br></br>ㅠㅠㅠㅠ<br></br>ㅎㅎㅎㅎ</div>,
            postNumMap: null,
        }
    }
    */

    async componentDidMount() {
        this.setSubCatInfo(this.props.match)
        this.setPostData(this.state.postNumber)
    }

    async componentDidUpdate(prevProps) {
        let prev = prevProps.match
        let current = this.props.match

        // URL을 통해 새로 받아온 서브 카테고리의 id가 기존의 것과 다른 경우
        if (prev.params.scid !== current.params.scid) {
            this.setSubCatInfo(current)
        }
    }

    async setSubCatInfo(current) {
        const subCatInfoRetrievAddr = `/blog/subCatInfo${current.params.scid}`
        const instance = Axios.create({
            baseURL: `http://localhost:4000/`,
            timeout: 3000,
        })

        try {
            const response = await instance.get(subCatInfoRetrievAddr)
            var retPostNumMap = []
            // first index at '0' is dummy.
            retPostNumMap.push(0)

            for (var key in response.data.pages) {
                retPostNumMap.push(response.data.pages[key]['p_id'])
            }

            this.setState({
                subCatNumber: this.props.match.params.scid,
                subCatSubject: response.data.sc_subject,
                postTotalCount: retPostNumMap.length - 1,
                postNumber: retPostNumMap.length - 1,
                postNumMap: retPostNumMap,
            })

        } catch (error) {
            console.error(error)
        }
    }

    async setPostData(postId) {
        const postDataRetrievAddr = `/blog/postData${postId}`
        const instance = Axios.create({
            baseURL: `http://localhost:4000/`,
            timeout: 3000,
        })

        try {
            const response = await instance.get(postDataRetrievAddr)
            
            this.setState({
                postSubject: response.data.page_subject,
                postDate: response.data.create_date,
                postBody: response.data.page_body,
            })
        } catch (error) {
            console.error(error)
        }
    }

    navHandler = (postNum) => {
        this.setPostData(postNum)
    }

    render() {
        if (this.state.subCatNumber === this.props.match.params.scid) {
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
                        navHandler={this.navHandler} />
                </center>
            </div>;
        }
        else {
            return <div></div>
        }
    }
}