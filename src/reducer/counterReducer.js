import { INCREMENT, DECREMENT } from '../action/types';


const INITIAL_STATE = {
    count: 0,
    desc: 'Tôi chưa bấm gì cả!'
};

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log('increment');
            return {
                ...state, count: state.count + 1,
                desc: 'Tôi đã bấm vào nút tăng 1'
            };
        case DECREMENT:
            console.log('decrement');
            return {
                ...state, count: state.count - 1,
                desc: 'Tôi đã bấm vào nút giảm 1'
            };
        default: return state;
    }
};

export default counterReducer;