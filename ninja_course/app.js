new Vue({
    el: '#vue-app',
    data: {
        name: 'Clara',
        job: 'ninja',
        age: 18,
        x: 0,
        y: 0,
        website: 'https://www.google.fr',
        websiteTag: '<a href="https://www.google.fr">Ninja One</a>'
    },
    methods: {
        greet: function(str) {
            return str + this.name
        },
        add: function(val) {
            this.age += val
        },
        sub: function(val) {
            this.age -= val
        },
        updateXY: function(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
});