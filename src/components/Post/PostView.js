// PostView.js 컴포넌트
import React from "react";
import { Editor } from "react-draft-wysiwyg";
// 제목 입력을 위한 Input, 데이터 저장을 위한 Button import
import { Container, Input, Button } from "reactstrap";
import PropTypes from "prop-types";

// editorState, handleChange, handleSubmit prop 추가
// editorState는 리액트드래프트위지윅에 입력된 내용을 저장하기 위한 prop
// handleChange는 제목을 정보를 저장하기 위한 함수
// handleSubmit는 제목, 입력 내용을 서버로 전송할 함수
const PostView = ({
    editorState, handleChange, handleSubmit, handleEditorStateChange,
}) => (
    <Container>
        <p />
        {/* 제목을 입력할 Input, 값이 변경되면 이를 저장하기 위한 onChagen 속성에 handleChange 설정 */}
        <Input type="text" name="title" id="title" placeholder="제목" onChange={handleChange} />
        <p />
        <div className="demo-section">
            <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                // 에디터에 저장된 값을 관리하는 editorState prop 설정
                editorState={editorState}
                localization={{
                    locale: "ko",
                }}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                }}
                onEditorStateChange={handleEditorStateChange}
            />
        </div>
        <p />
        {/* 입력된 제목, 내용을 서버로 전송할 Button 설정, 클릭 시 (onClick) handleSubmit 호출 */}
        <Button onClick={handleSubmit}>저장</Button>
    </Container>
);

PostView.propTypes = {
    editorState: PropTypes.shape({

    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleEditorStateChange: PropTypes.func.isRequired,
};


export default PostView;