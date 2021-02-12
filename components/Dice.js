Vue.component("dice", {
    props: ["format"],
    data() {
        return {
            message: "Hello, Vue!",
            now: new Date()
        }
    },
    created() {
        console.log("Dice created!");
    },
    methods: {
        updateDate() {
            const d = this.format === "short" ? new Date().toLocaleTimeString() : new Date();
            this.now = d;
        },
        test() {
            console.log("test");
        }
    },
    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template: `
        <div>
            <button class="btn btn-primary" @click="test">button</button>
        </div>`
});