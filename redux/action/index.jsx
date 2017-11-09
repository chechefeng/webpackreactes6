
import $ from "jquery"
let nextTodoId = 0;
const url = "http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000";
var obj ={
    type:"ADD_TODO"
}

export function addTodo (text){



    //alert(text)
    // fetch("./data.json",{
    //     method:"get"
    // }).then((res)=>{
    //     console.log(res)
    //
    // })
  return  (dispatch)=>{
      dispatch(
          {
              type:"ADD_TODO",
              id:nextTodoId++,
              text
          }
      );
      //var url = "http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000"
      // fetch(url,{
      //     method:"GET",
      //     mode: 'no-cors',
      // }).then((res)=>{
      //   // return  res.json()
      //     console.log(res)
      // }).then((res)=>{
      //     console.log(res)
      //
      // }).catch((res)=>{
      //     console.log(res)
      //
      // })

      // $.ajax({
      //     url:url,
      //     type:"GET",
      //     dataType:"jsonp",
      //     jsonpCallback:"cb",
      //     success:function (res) {
      //         console.log(res)
      //         function cb(res) {
      //             console.log(res)
      //
      //         }
      //         // dispatch({
      //         //         type:"ADD_TODO",
      //         //         id:nextTodoId++,
      //         //         text:res.As
      //         //     })
      //
      //
      //
      //     }
      // })
  };

// console.log(dispatch)
//     return {
//         type: 'ADD_TODO',
//         id: nextTodoId++,
//         text
//     }


};


export const setVisibilityFilter = (filter) => {
    alert(filter)
    return{
        type: 'SET_VISIBILITY_FILTER',
        filter
    }

}

export const toggleTodo= (id)=> {
    alert("TOGGLE_TODO")
    return{
        type: 'TOGGLE_TODO',
        id
    }

}
