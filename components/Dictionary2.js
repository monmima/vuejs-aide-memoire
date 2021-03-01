Vue.component("dictionary-2", {
    props: ["id", "name", "link"],
    data() {
        return {
            fullQuery: this.link,
            dictionaries: [
                { name: "Wikipedia FR", baselink: "fr.wikipedia.org/wiki/zzzz" },
                { name: "Wikipedia IT", baselink: "it.wikipedia.org/wiki/zzzz" },
                { name: "Wikipedia EN", baselink: "en.wikipedia.org/wiki/zzzz" }
            ]
        }
    },

    mounted() {
        console.log("Dictionary created!");

        // to clean the href attribute from the start
        // how this works:
        // the method below is shared between the list of methods and the lifecycle hook thanks to the href keyword; it just wouldn't work without the this keyword
        this.handleDictionaryLink();
    },

    methods: {
        handleDictionaryLink() {
            // storing the input box as a variable
            const myInput = document.querySelector(`#${this.id} input`);

            // storing the buttons as an array
            const allButtons = document.querySelectorAll(`#${this.id} div a`);

            // replacing all of the placeholders with the input box value
            for (item of allButtons) {
                let currentLink = item.getAttribute("baselink");
                currentLink = currentLink.replace("zzzz", myInput.value);

                item.setAttribute("href", currentLink);
            }
        }
    },

    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template:
        `<div class="m-3" :id="this.id">

            <input v-on:keyup="handleDictionaryLink" />

            <div v-for="dictionary in dictionaries">
                <a :baselink="dictionary.baselink" :href="dictionary.baselink" class="btn btn-warning" :title="dictionary.name">{{ dictionary.name }}</a>
            </div>

        </div>`
});