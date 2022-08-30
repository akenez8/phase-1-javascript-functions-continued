function saturdayFun(value) {
    if (value == null) {
        return `This Saturday, I want to roller-skate!`;
    }
    else if (value !== null) {
        return `This Saturday, I want to bathe my dog!`;
    }
}

function mondayWork(arg) {
    if (arg == null) {
        return `This Monday, I will go to the office.`;
    }
    else if (arg == `work from home`) {
        return "This Monday, I will work from home.";
    }
}


function wrapAdjective(emphatic){
    return function (emphText) {
        return `You are ${emphatic}${emphText}${emphatic}!`;
    }
}