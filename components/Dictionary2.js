Vue.component("dictionary-2", {
    props: ["id", "name", "link"],
    data() {
        return {
            fullQuery: this.link,
            dictionaries: [
                { name: "test1", link: "https://www.duckduckgo.com/zzzz" },
                { name: "test2", link: "https://www.startpage.com/zzzz" },
                { name: "test3", link: "https://www.duckduckgo.com/zzzz" }
            ]
        }
    },

    created() {
        console.log("Dictionary created!");
    },

    methods: {
        handleDictionaryLink() {
            const myInput = document.querySelector(`#${this.id} input`);

            //  groupe de boutons
            const allButtons2 = document.querySelectorAll(`#${this.id} div a`);

            for (item of allButtons2) {
                let currentLink = item.getAttribute("baselink");
                currentLink = currentLink.replace("zzzz", "");

                item.setAttribute("href", currentLink + myInput.value);
            }

            return;
        }
    },
    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template:
        `<div class="m-3" :id="this.id">

            <input v-on:keyup="handleDictionaryLink" />

            <div v-for="dictionary in dictionaries">
                <a :baselink="dictionary.link" :href="dictionary.link" class="btn btn-warning" :title="dictionary.name">{{ dictionary.name }}</a>
            </div>

        </div>`
});