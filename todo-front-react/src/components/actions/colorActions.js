// color 관련 액션 생성자
export const SELECT_COLOR = 'SELECT_COLOR';

export function selectColor(id) {
    return { type: SELECT_COLOR, id }
}