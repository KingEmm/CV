let not = document.getElementById('not');
console.dir(body)
const func = () =>{
    Notification.requestPermission().then(perm => {
        if(perm === 'granted'){
            const notification = new Notification('Example', {
                body: "This is more text",
                data : {hello : "World" },
                icon : 'Image/logo.jpg',
                // tag : 'New notification',

            })
            notification.addEventListener('click', e => {
                alert(e)
            })
        }
        else{
            alert("Ok no problem")
        }
    })
}
not.addEventListener('click', func)

document.addEventListener('visibilitychange', () => {
    let notification;
    if(document.visibilityState === 'hidden'){
        notification = new Notification("Hello Dear",{
            body: "Come back to our page",
            data: {Hello: "Hi there"},
            // tag : 'New notification',
            icon : 'Image/logo.jpg'
        })
        notification.addEventListener('click', url =>{
            
        })
    }
    else{
        // notification.close();
    }
})

