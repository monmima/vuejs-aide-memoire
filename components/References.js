Vue.component("references", {
    data() {
        return {
            allTutorials: {
                freecodecamp: {
                    title: "freeCodeCamp.org / Gwendolyn Faraday's Tutorial",
                    smallLinks: [
                        { name: "YouTube", link: "https://www.youtube.com/watch?v=4deVCNJq3qc" }
                    ],
                    list: [
                        { name: "vue-001-hello-world.html", link: "vue-freecodecamp/vue-001-hello-world.html" },
                        { name: "vue-002-v-model-directive-and-data-binding.html", link: "vue-freecodecamp/vue-002-v-model-directive-and-data-binding.html" },
                        { name: "vue-003-v-if-directive.html", link: "vue-freecodecamp/vue-003-v-if-directive.html" },
                        { name: "vue-004-v-if-directive.html", link: "vue-freecodecamp/vue-004-v-if-directive.html" },
                        { name: "vue-005-v-if-v-else-if-directive.html", link: "vue-freecodecamp/vue-005-v-if-v-else-if-directive.html" },
                        { name: "vue-006-v-show-directive.html", link: "vue-freecodecamp/vue-006-v-show-directive.html" },
                        { name: "vue-007-v-bind-directive-ex-1.html", link: "vue-freecodecamp/vue-007-v-bind-directive-ex-1.html" },
                        { name: "vue-007-v-bind-directive-ex-2.html", link: "vue-freecodecamp/vue-007-v-bind-directive-ex-2.html" },
                        { name: "vue-007-v-bind-directive-ex-3.html", link: "vue-freecodecamp/vue-007-v-bind-directive-ex-3.html" },
                        { name: "vue-008-v-text-directive.html", link: "vue-freecodecamp/vue-008-v-text-directive.html" },
                        { name: "vue-009-v-html-directive.html", link: "vue-freecodecamp/vue-009-v-html-directive.html" },
                        { name: "vue-010-v-once-directive.html", link: "vue-freecodecamp/vue-010-v-once-directive.html" },
                        { name: "vue-011-v-for-directive-ex-1.html", link: "vue-freecodecamp/vue-011-v-for-directive-ex-1.html" },
                        { name: "vue-011-v-for-directive-ex-2.html", link: "vue-freecodecamp/vue-011-v-for-directive-ex-1.html" },
                        { name: "vue-011-v-for-directive-ex-3-methods.html", link: "vue-freecodecamp/vue-011-v-for-directive-ex-3-methods.html" },
                        { name: "vue-011-v-for-directive-ex-4-keyup-event.html", link: "vue-freecodecamp/vue-011-v-for-directive-ex-4-keyup-event.html" },
                        { name: "vue-011-v-for-directive-ex-5-enter-event.html", link: "vue-freecodecamp/vue-011-v-for-directive-ex-5-enter-event.html" },
                        { name: "vue-011-v-for-directive-ex-6-clear-input-box.html", link: "vue-freecodecamp/vue-011-v-for-directive-ex-6-clear-input-box.html" },
                        { name: "vue-012-filters-ex-1.html", link: "vue-freecodecamp/vue-012-filters-ex-1.html" },
                        { name: "vue-012-filters-ex-2.html", link: "vue-freecodecamp/vue-012-filters-ex-2.html" },
                        { name: "vue-013-computed.html", link: "vue-freecodecamp/vue-013-computed.html" },
                        { name: "vue-014-custom-components.html", link: "vue-freecodecamp/vue-014-custom-components.html" },
                        { name: "vue-015-custom-components-with-logic-and-variables.html", link: "vue-freecodecamp/vue-015-custom-components-with-logic-and-variables.html" },
                        { name: "vue-016-view-life-cycle-methods.html", link: "vue-freecodecamp/vue-016-view-life-cycle-methods.html" },
                    ]
                },

                other: {
                    title: "Coder's Tape Tutorial",
                    smallLinks: [
                        { name: "YouTube", link: "https://www.youtube.com/watch?v=UIm-YqYKutk" }
                    ],
                    list: [
                        { name: "vue-api-call.html", link: "vue-coders-tape/vue-api-call.html" }
                    ]
                },

            }
        }
    },
    mounted() {
        console.log("Hyperlinks instance was mounted!");
    },
    // the only difference with a CDN component instead of having the code directly in your HTML is the fact you need to create a template
    template: 
    `<section>
        <div v-for="(itemInAllTutorials, index) in allTutorials">
            <div>
                <h4>{{ itemInAllTutorials.title }}
                    <small>(
                        <span v-for="(item, index) in itemInAllTutorials.smallLinks" v-bind:key="index">
                        <a v-bind:href="item.link" v-bind:title="item.name">{{ item.name }}</a></span>
                    )</small>
                </h4>
                <ul>
                    <li v-for="(item, index) in itemInAllTutorials.list" v-bind:key="index">
                        <a v-bind:href="item.link" v-bind:title="itemInAllTutorials.title">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>`
});