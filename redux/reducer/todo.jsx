export default (state=[],action)=>{
    switch (action.type){

        case "ADD_TODO":
            //alert(23)
            console.log(action)
            return  [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
           // alert("TOGGLE_TODO===");
           // console.log(state)
           // console.log(action)
           // console.log(state[0])

            return state.map(item =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            )

        default:
            return state;


    }
};





