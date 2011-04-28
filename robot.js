setMessageListener(function(type, data) {

    //console.log(data.others)

    postGame('command', {
        status: 'Searching opponent',
        engine: {
            left: 5,
            right: 0
        },
        tower: 0,
        fire: 5
    })

})
