module.exports = {    
    main: function (event, context) {
        if (!signInPassed(event.data)) {
            res = event.extensions.response;
            res.status(500)
            return
        }
        return "OK"
    }
}


function signInPassed(payload) {
    let passed = true;
    let max = parseInt(process.env['FUNCTION_MAX_INDEX'],10)
    for (let i = 0; i <= max; i++) {
        if(!payload.check_in[`fun${i}`]){
            console.log(`Fun${i} hasn't check in...`)
            return false
        }
        if(payload.fibo[`fun${i}`]==undefined){
            console.log(`Fun${i} hasn't calculated fibo...`)
            return false
        }
        console.log(`Check for Fun${i} passed!`)
    }
    return passed;
}
