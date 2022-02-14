const StatsCard = {
  template: `
  <div
  class="px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 w-full mb flex gap-8 items-center">
    <div>
      <slot name='icon'></slot>
    </div>
    <div class="flex gap-2 justify-between flex-col">
      <span class="font-bold text-gray-400 dark:text-gray-400">
        <slot name='title'></slot>
      </span>
      <div class="text-3xl font-semibold dark:text-gray-200">
        <slot name='value'></slot>
      </div>
    </div>
  </div>
  `,
};
