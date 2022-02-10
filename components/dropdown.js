const DropdownItem = {
  template: `
  <a href="#"
          class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          <slot></slot> 
  </a>
  `,
};

const Dropdown = {
  setup() {
    const isOpened = Vue.ref(false);

    const toggle = () => {
      isOpened.value = !isOpened.value;
    };

    const open = () => {
      isOpened.value = true;
    };

    const close = () => {
      isOpened.value = false;
    };

    return {
      isOpened,
      toggle,
    };
  },
  template: `
  <a class="block relative z-40 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4 my-0 flex gap-2"
  href="#" @click.prevent="toggle">
    <slot></slot>

    <div class="absolute w-auto py-2 mt-8 -ml-5 bg-white rounded-md shadow-xl dark:bg-gray-800 border" v-if="isOpened">
      <slot name='items'></slot>
    </div>
  </a>
  `,
};
