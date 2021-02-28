Vue.component("dictionary-2", {
    props: ["id", "name", "link"],
    data() {
        return {
            fullQuery: this.link,
            dictionaries: [
                { name: "test1", link: "https://www.duckduckgo.com/" },
                { name: "test2", link: "https://www.startpage.com/" },
                { name: "test3", link: "https://www.duckduckgo.com/" }
            ]
        }
    },

    created() {
        console.log("Dictionary created!");
    },

    methods: {
        handleDictionaryLink() {
            const myInput = document.querySelector(`#${this.id} input`);

            // document.querySelector(`#${this.id} a`).setAttribute("href", this.link + myInput.value);

            // premier groupe de boutons
            const allButtons = document.querySelectorAll(`#${this.id} p a`);

            for (item of allButtons) {
                item.setAttribute("href", this.link + myInput.value);
            }

            // deuxième groupe de boutons
            const allButtons2 = document.querySelectorAll(`#${this.id} div a`);

            for (item of allButtons2) {
                const currentLink = item.getAttribute("href");
                // console.log(currentLink);
                item.setAttribute("href", this.link + myInput.value);
            }

            // console.log(allButtons2);

            return;
        }
    },
    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template:
        `<div class="m-3" :id="this.id">

            <input v-on:keyup="handleDictionaryLink" />

            <p><a :href="fullQuery" class="btn btn-warning" :title="this.name">Search {{ this.name }}</a></p>

            <p><a :href="fullQuery" class="btn btn-warning" :title="this.name">Search {{ this.name }}</a></p>


            <div v-for="dictionary in dictionaries">
                <a :href="dictionary.link" class="btn btn-warning" :title="dictionary.name">{{ dictionary.name }}</a>
            </div>


        </div>`
});