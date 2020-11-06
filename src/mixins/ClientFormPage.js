import {validationMixin} from "vuelidate/src";

export default {
    mixins: [validationMixin],
    methods: {
        getValidator() {
            return this.$v;
        },
        reset() {
            Object.assign(this.$data, this.$options.data.call(this));
        }
    },
    props: {
        active: {
            type: Boolean,
        }
    },

}
