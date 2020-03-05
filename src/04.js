function leapyear (a) {
    if(a % 4 == 0 && a % 100 != 0 || a % 400 == 0){
        result = true;
    }else{
        result = false;
    }
    return result;
}

module.exports = leapyear;