setMessageListener(function(type, data) {

    //console.log(data.others)

    postGame('command', {
        engine: {
            left: 0,
            right: 0
        },
        tower: 0,
        fire: 0
    })

})
