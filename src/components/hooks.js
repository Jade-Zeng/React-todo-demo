import React, { useReducer } from 'react';

export default function ComponentTwo() {
    // 声明一个叫 “count” 的 state 变量。
    const initialState = {count: 0}
    function reducer (state, action) {
        switch (action.type) {
            case 'increment':
                return {count: state.count+1}
            case 'decrement':
                return {count: state.count-1}
            default:
                return {count: 0}
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick={() =>dispatch({type: 'increment'})}>
                增加
            </button>
            <button onClick={() =>dispatch({type: 'decrement'})}>
                减少
            </button>
        </div>
    );
}
// export default function ComponentTwo () {
//     const [count, setCount ] = useState(0)
//     // const initialState = {count: 0};
//
//     // function reducer(state, action) {
//     //     switch (action.type) {
//     //         case 'increment':
//     //             return {count: state.count + 1};
//     //         case 'decrement':
//     //             return {count: state.count - 1};
//     //         default:
//     //             throw new Error();
//     //     }
//     // }
//
//     // const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             Count: {count}
//             <button onClick={() => setCount(count + 1)}>-</button>
//             {/*<button onClick={() => dispatch({type: 'increment'})}>+</button>*/}
//         </div>
//     );
// }