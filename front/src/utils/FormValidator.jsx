import React from "react";
export const patterns = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
}

// export const checkError = (value, ShowName,otherInfo)=>{
//     let result = {}
//     for(const condition in otherInfo){
//         result = AllValidation(condition, otherInfo[condition],value, ShowName);
//         if(result.error)    
//             return (<p className="error-message-input">{result.message}</p>);
//     }
//     return '';
// }

// export const checkError = (conditionName, value, ShowName, conditions) => {

//     let ErrorMsg = '';
//     const conditionValue = conditions[conditionName];
//     switch (conditionName) {
//         case "required":
//             ErrorMsg = (value.length===0) ?  `${ShowName} is required` : '';
//             break;
//         case "minLength":
//             ErrorMsg = (value.length < conditionValue) ? `${ShowName} must be at least ${conditionValue} characters` : '';
//             break;
//         case "maxLength":
//             ErrorMsg = (value.length > conditionValue) ? `${ShowName} must be less than ${conditionValue} characters` : '';
//             break;
//         case "pattern":
//             ErrorMsg = conditionValue.test(value) ? '' : `${ShowName} is not valid`;
//             break;
//         case "ConfirmPassword":
//             ErrorMsg = "Password and Retype Password dosn't match";  
//             break;  
//     }
//     if(ErrorMsg!=''){
//         return (<p className="error-message-input">{ErrorMsg}</p>);
//     }

//     return '';    
// } 


export const checkError = (conditionName, ShowName, conditions) => {
    let ErrorMsg = '';
    const conditionValue = conditions[conditionName];
    switch (conditionName) {
        case "required":
            ErrorMsg = `پر کردن ${ShowName} الزامیست`;
            break;
        case "minLength":
            ErrorMsg = `${ShowName} باید حداقل ${conditionValue} کاراکتر باشد`;
            break;
        case "maxLength":
            ErrorMsg = `${ShowName} باید کمتر از  ${conditionValue} کاراکتر باشد`;
            break;
        case "pattern":
            ErrorMsg = `${ShowName} نامعتبر است`;
            break;
        case "ConfirmPassword":
            ErrorMsg = "پسورد و تکرار آن یکسان نمی باشد";
            break;
        case "min":
                ErrorMsg = `${ShowName} باید بزرگتر از ${conditionValue} باشد`;
                break;   
        case "max":
            ErrorMsg = `${ShowName} باید کوچکتر از ${conditionValue} باشد`;
            break;            
        default:
            ErrorMsg = '';       
    }
    if (ErrorMsg !== '') {
        return (<p className="error-message-input">{ErrorMsg}</p>);
    }

    return '';
}

