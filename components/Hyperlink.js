Vue.component("hyperlink", {
    data() {
        return {
            props: ["hyperlink", "title"],
            data: {
                randomValue: 'This is my random value.'
            }
        }
    },
    mounted() {
        console.log("Hyperlink instance was mounted!");
    },
    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template: `<li><a :href='this.hyperlink' :title='this.title'><slot></slot></a></li>`
});