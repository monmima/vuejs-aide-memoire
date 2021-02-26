Vue.component("dictionary", {
    props: ["id", "name", "link"],
    data() {
        return {
            fullQuery: this.link
        }
    },

    created() {
        console.log("Dictionary created!");
    },

    methods: {
        handleDictionaryLink() {
            const myInput = document.querySelector(`input.${this.id}`);

            document.querySelector(`#${this.id}`).setAttribute("href", this.link + myInput.value);
            return;
        }
    },
    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template: `
        <div class="m-3">
            <input :class="this.id" v-on:keyup="handleDictionaryLink" />

            <p><a :id="this.id" :href="fullQuery" class="btn btn-warning" :title="this.name">Search {{ this.name }}</a></p>
        </div>`
});