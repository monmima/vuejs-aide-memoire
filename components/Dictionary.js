Vue.component("dictionary", {
    props: ["name", "link"],
    data() {
        return {
            completeLink: this.link + "suffix"
        }
    },

    created() {
        console.log("Dictionary created!");
    },

    methods: {

    },
    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template: `
        <div class="m-3">
            <div>{{ this.name }}</div>
            <a :href="completeLink">link</a>
        </div>`
    

});