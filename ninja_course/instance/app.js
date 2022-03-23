// var data = {
//     name: 'Yoshi'
// }

Vue.component("greeting", {
    template: '<p>Reusable {{name}}<button v-on:click="changeName">CHANGE</button></p>',
    data: function() {
        return {
            name: 'component'
        }
        // return data;
    },
    methods: {
        changeName: function() {
            this.name = 'Changed'
        }
    }
})

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue app one'
    },
    methods: {
        
    },
    computed: {
        greet: function() {
            return "ONE"
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue app two'
    },
    methods: {
        changeTitle: function() {
            one.title = "CHANGED"
        }
    },
    computed: {
        greet: function() {
            return "TWO"
        }
    }
});
