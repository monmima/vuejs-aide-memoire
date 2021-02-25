Vue.component("dictionary", {
    props: ["name", "link"],
    data() {
        return {
            dictionary: 'Am I truly an alligator?',
            fullQuery: this.link,
            partialQuery: ""
        }
    },

    created() {
        console.log("Dictionary created!");
    },

    methods: {
        someHandler() {
            const test = document.querySelector("input");
            const fullTest = this.link + test.value;
            console.log(fullTest);
            fullQuery = fullTest;
            document.querySelector("#linka").setAttribute("href", this.link + test.value);
            return fullQuery;
        }
    },
    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template: `
        <div class="m-3">

            <h2>My fullQuery: {{ fullQuery }}</h2>

            <input v-on:keydown="someHandler" />

            <p><a id="linka" :href="fullQuery">{{ this.name }}</a></p>
        </div>`
    

});