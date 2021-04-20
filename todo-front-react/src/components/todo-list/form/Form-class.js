import React, {Component} from 'react';
import './Form.css';
import { addTodo } from "../../actions/todoActions";
import { connect } from "react-redux";

// Form 컴포넌트 component class 형태로 구현했을 때 (함수 형태로 구현했을 때와 기능은 완전히 동일)

// smart component + dumb component
// 액션 처리 및 화면 표시를 함께 담당
// 원래라면 화면 표시를 위한 dumb 컴포넌트를 별도로 분리해야 하지만, 이미 작은 컴포넌트이므로 화면 표시까지 smart component 내에서 처리
class Form extends Component {

    render() {
        const { dispatch } = this.props;
        let input;

        const onKeyPress = (e) => {
            if (e.key === 'Enter') {
                onCreate();
            }
        }
        // 액션 생성자의 addTodo() 함수를 호출하여 액션을 생성하고 dispatch() 함수로 스토어에 액션을 전달
        const onCreate = () => {
            dispatch(addTodo(input.value));
            input.value = '';
        }

        return (
            <div className="form">
                <input ref={node => { input = node }} onKeyPress={onKeyPress} />
                <div className="create-button" onClick={onCreate}>
                    추가
                </div>
            </div>
        );
    }

}

export default connect()(Form);