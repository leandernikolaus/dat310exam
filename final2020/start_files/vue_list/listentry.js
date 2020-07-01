// implement your component hear
Vue.component("list-entry", {
    template: `
    <li>
        <span class="item">item</span>
        <span class="form"><input type="text"><button>Save</button><button>Cancel</button></span>
    </li>
    `
    // instead of "item" show one element from datalist (se index.html)
    // only show the first <span> element,
    // on doubleclick, show the second span element,
    // the input should be prefilled with the item
    // on cancel, show first span, with initial value
    // on save, emit event to main app (index.html), for changing value.
});