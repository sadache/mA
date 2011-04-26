/**
 * Register an onmessage callback
 */
var setMessageListener = function(handler) {
    onmessage = function(event) {
        var message = JSON.parse(event.data)
        handler(message.type, message.data)
    }
}

/** 
 * Post a message to the game 
 */
var postGame = function(type, data) {
    postMessage(JSON.stringify({
        type: type,
        data: data
    }))
}

/**
 * Useful log utils
 */
var console = {

    log: function(msg) {
        postGame('console.log', msg)
    },

    error: function(e) {
        postGame('console.error', e)
    },

    watch: function(name, value) {
        postGame('console.watch', {
            name: name,
            value: value
        })
    }

}

