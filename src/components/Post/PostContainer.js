// PostContainer.js 컴포넌트
// editorState, title을 관리한 withState import
import { compose, withState, withHandlers, } from "recompose";
// 에디터 상태를 초기화하거나 설정하는 EditorState import
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import PostView from "./PostView";

export default compose(
    // editorState state를 생성하고 초기값을 createEmpty() 즉, 빈값으로 설정
    withState("editorState", "setEditorState", EditorState.createEmpty()),
    // title state를 생성하고 초기값은 빈 문자열
    withState("title", "setTitle", ""),
    withHandlers({
        // 제목(title)이 변경되는 경우 setTitle로 title state 변경
        handleChange: (props) => (e) => {
            props.setTitle(e.target.value);
        },
        // 에디터 상태(editorState) 변경되는 경우 setEditorState로 editorState 변경
        handleEditorStateChange: (props) => (editorState) => {
            props.setEditorState(editorState);
        },
        // 저장 버튼을 클릭하는 경우, 콘솔에 제목과 editorState 정보 출력
        handleSubmit: (props) => () => {
            const newBlog = {
                title: props.title,
                content: draftToHtml(convertToRaw(props.editorState.getCurrentContent()))
            }
            console.log(newBlog);
        },
    }),
)(PostView);