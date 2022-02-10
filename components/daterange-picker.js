const DaterangePicker = {
  components: {
    FormField,
  },
  setup() {
    const picker = Vue.ref(null);
    const uid = Vue.getCurrentInstance().uid;

    Vue.onMounted(() => {
      picker.value = new Litepicker({
        element: document.getElementById("start-date-" + uid),
        elementEnd: document.getElementById("end-date-" + uid),
        singleMode: false,
        plugins: ["ranges"],
        allowRepick: true,
        tooltipText: {
          one: "jour",
          other: "jours",
        },
        lang: "fr-FR",
      });
    });

    return {
      picker,
      uid,
    };
  },
  template: `
  <div class="relative mt-6">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </span>

    <form-field class="pl-10" :id="'start-date-'+uid" :name="'start-date-'+uid" required="true" autocomplete="off"
    placeholder="Date de début"></form-field>
  </div>

  <div class="relative">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </span>
    
    <form-field class="pl-10" :id="'end-date-'+uid" :name="'end-date-'+uid" required="true" autocomplete="off"
    placeholder="Date de fin"></form-field>
  </div>
  `,
};
