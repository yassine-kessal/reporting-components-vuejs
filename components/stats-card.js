const StatsCard = {
  template: `
  <div
  class="px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 w-full mb flex gap-8 items-center">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <div class="flex gap-2 justify-between flex-col">
      <span class="font-bold text-gray-400 dark:text-gray-400">
        Emails envoyés
      </span>
      <div class="text-3xl font-semibold dark:text-gray-200">
        12 562
      </div>
    </div>
  </div>
  `,
};
