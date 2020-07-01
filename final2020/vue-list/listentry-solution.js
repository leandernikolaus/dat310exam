Vue.component("list-entry",{
    props: ["text"],
    data: function(){
        return {
            textinput: this.text,
            editing: (this.text == "")
        }
    },
    template: `
    <li>
        <span v-if="!editing" v-on:dblclick="edit" >{{text}}</span>
        <span v-else>
            <input type="text" v-model="textinput">
            <button class="ok" v-on:click="save">Save</button><button class="undo" v-on:click="cancel">Cancel</button>
        </span>
    </li>
    `,
    methods: {
        save: function(){
            this.$emit('update', this.textinput);
            this.editing = false;
        },
        cancel: function(){
            this.editing = false;
            this.textinput = this.text;
        },
        edit: function(){
            this.editing = true;
        }
    }
})