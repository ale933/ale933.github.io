function n() {
    Notification.requestPermission(function() {
        if (Notification.permission === 'granted') {
            var a = new Notification('Wassup!', { body: "Don't worry, I won't spam anything ;)", icon: '../alarm-clockck.svg' })
        
        }
    })
}
