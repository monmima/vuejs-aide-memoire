Vue.component("metadata", {
    props: ["num"],
    data() {
        return {
            contentTitle: 0,
            contentTextarea: 0
        }
    },
    created() {
        console.log("Dice created!");
    },
    mounted() {
        this.updateLengthDesc();
    },
    methods: {
        updateLengthDesc() {
            const content = document.querySelector("textarea").value;
            console.log(content);
            let color;

            if (content.length >= 120 && content.length <= 158) {
                color = "green";
                console.log("true");
            } else {
                color = "red";
            }

            document.querySelector("textarea").style.borderColor = color;
            document.querySelector("span").innerHTML = content.length;
        }
    },
    // the only difference with a component instead of having the code directly in your HTML is the fact you need to create a template
    template: `
        <div class="m-3">
            <p>Meta Description (<span></span> characters)</p>
            <p><small>* Should remain between 120 and 158.</small></p>
            <p><textarea v-on:keyup="updateLengthDesc"></textarea></p>
        </div>`
});