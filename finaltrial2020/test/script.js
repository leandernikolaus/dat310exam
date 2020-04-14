Vue.component('my-comp', {
    template: `
    <div class="blue" v-bind:class="{red: isred, green: isgreen}"></div>
    `,
    data: function(){
        return {
            red: false,
            isred: true,
            isgreen: false
        }
    }
})



