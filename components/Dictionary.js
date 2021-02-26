Vue.component("dictionary", {
    props: ["name", "link"],
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
            const test = document.querySelector("input");

            document.querySelector("#linka").setAttribute("href", this.link + test.value);
            return;
        }
    },
    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template: `
        <div class="m-3">
            <input v-on:keydown="handleDictionaryLink" />

            <p><a id="linka" :href="fullQuery" class="btn btn-warning" :title="this.name">Search {{ this.name }}</a></p>
        </div>`
    

});