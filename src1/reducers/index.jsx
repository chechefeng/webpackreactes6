/**
 * Created by lpw on 2017/4/20.
 */


export default function (state=0,action) {
    console.log("action",action)
    switch (action.type){
        case "Increase":
            return state+1;
        case "decrease":
            return state-1;

    }
    return state
}




