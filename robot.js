setMessageListener(function(type, data) {

    //console.log(data.turn)

    postGame('command', {
        engine: {
            left: 0,
            right: 0
        },
        tower: 0,
        fire: 0
    })

})