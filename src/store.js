import { ref, reactive } from 'vue';

export const store = reactive({
    isNavOpen: ref(false),
    isProfileOpen: ref(false)
});


export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    },
    toggleProfile() {
        store.isProfileOpen = !store.isProfileOpen
    }
};
