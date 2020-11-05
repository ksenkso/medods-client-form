export default {
    methods: {
        getErrors() {
            return this.$v;
        }
    },
    props: {
        active: {
            type: Boolean,
        }
    },

}
