new Vue({
    el: '#vue-app',
    data: {
        name: 'Clara',
        job: 'ninja',
        age: 18,
        website: 'https://www.google.fr',
        websiteTag: '<a href="https://www.google.fr">Ninja One</a>'
    },
    methods: {
        greet: function(str) {
            return str + this.name
        }
    }
});