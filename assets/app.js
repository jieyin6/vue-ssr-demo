(function () {
    var createApp = function () {
        return new Vue({
            template: '<div id="app">you have been here for {{counter}} seconds</div>',
            data: {
                counter: 0
            },
            created: function () {
                var vm = this
                setInterval(function () {
                    vm.counter += 1
                }, 1000)
            }
        })
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = createApp
    } else {
        this.app = createApp()
    }
}).call(this)