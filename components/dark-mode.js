const DarkMode = {
  setup() {
    const isDarkMode = Vue.ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    const dark = () => {
      isDarkMode.value = true;
    };

    const light = () => {
      isDarkMode.value = false;
    };

    Vue.watch(isDarkMode, (value) => {
      if (value) document.querySelector("html").classList.add("dark");
      else document.querySelector("html").classList.remove("dark");
    });

    Vue.onMounted(() => {
      if (!matchMedia("(prefers-color-scheme: light)").matches) {
        dark();
      }
    });

    return { isDarkMode, toggleDarkMode, dark, light };
  },
  template: `
  <a class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4 my-0" href="#" @click.prevent="toggleDarkMode">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" v-if="isDarkMode">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" v-else>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </a>`,
};
