setMessageListener(function(type, data) {

    //console.log(data.others)

    postGame('command', {
        engine: {
            left: 5,
            right: -5
        },
        tower: 0,
        fire: 0
    })

})
