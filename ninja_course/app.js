new Vue({
    el: '#vue-app',
    data: {
        name: 'Clara',
        job: 'ninja',
        age: 18,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success:false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25},
            { name: 'Yoshi', age: 35},
            { name: 'Ken', age: 45}
        ],
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
        },
        click: function() {
            alert("NOP")
        },
        logName: function() {
            console.log('Your entered your name')
        },
        logAge: function() {
            console.log('you entered your age')
        }
    },
    computed: {
        addToA: function() {
            console.log('A')
            return this.a + this.age
        },
        addToB: function() {
            console.log('B')
            return this.b + this.age
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});