const initialData = {
    name: "",
    city: "",
};

const MyReducer = (state = initialData, action)=>{

    if(action.type === "NAME"){
        state={
            ...state,
            name: action.nameComp,

        };

    }
    else if(action.type === "CITY"){
        state ={
            ...state,
            city: action.cityName,
        }
    }
    return state;
};

export default MyReducer;