import {validationMixin} from "vuelidate/src";

export default {
    mixins: [validationMixin],
    methods: {
        getValidator() {
            return this.$v;
        },
        getData() {
            return Object.keys(this.$v)
                .filter(key => !key.startsWith('$'))
                .reduce((acc, key) => {
                    const name = this.labels && this.labels[key] ? this.labels[key] : key;
                    acc[name] = this.$v[key].$model;
                    return acc;
                }, {});
        },
        reset() {
            Object.assign(this.$data, this.$options.data.call(this));
        }
    },
    props: {
        active: {
            type: Boolean,
        },
    },

}
