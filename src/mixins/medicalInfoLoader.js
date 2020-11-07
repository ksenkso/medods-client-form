import {getDoctors} from "@/api/doctors.js";
import {getGroups} from "@/api/groups.js";
const dict = (arr) => arr.reduce((acc, item) => {
    acc[item.value] = item.text;
    return acc;
}, {});
export default {
    data() {
        return {
            medical: {
                groupsLoaded: false,
                doctorsLoaded: false,
                groups: {},
                doctors: {}
            }
        }
    },
    mounted() {
        getGroups().then(groups => {
            this.medical.groupsLoaded = true;
            this.medical.groups = dict(groups);
        });
        getDoctors().then(doctors => {
            this.medical.doctorsLoaded = true;
            this.medical.doctors = dict(doctors);
        })
    },
}
