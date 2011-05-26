setMessageListener(function(type, data) {
    
    console.watch('Y', data.me.position.y)
    console.watch('X', data.me.position.x)
    console.watch('energy', data.me.energy)

    postGame('command', {
        status: data.me.energy < 50 ? 'Low energy' : 'Searching opponent',
        engine: {
            left: -5,
            right: 0
        },
        tower: 0,
        fire: data.me.energy < 50 ? 0 : 5
    })

})
