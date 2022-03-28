<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form one - Contact us</h3>
                <p>Fill this form to contact us</p>
            </div>

            <div slot="form-field">
                <input type="text" placeholder="name" required />
                <label>Your message:</label>
                <textarea></textarea>
            </div>

            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>        
        </form-helper>
    </div>
</template>

<script>
import formHelper from './formHelper.vue';

export default {
    components: {
        'form-helper': formHelper,
     },
    data() {
        return {
        }
    },
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
