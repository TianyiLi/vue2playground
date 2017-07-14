import Vue from 'vue'

let app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue nothing better then this  !',
        status: false
    }
})

setInterval(()=>{
    app.status = !app.status
}, 2000)