<template>
  <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
    <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
      Country
    </h2>

    <div class="mt-2 flex flex-col justify-stretch">
      <fieldset class="space-y-2">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              class="
                focus:ring-indigo-500
                h-4
                w-4
                text-indigo-600
                border-gray-300
                rounded
              "
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="comments" class="font-medium text-gray-700">All</label>
          </div>
        </div>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              class="
                focus:ring-indigo-500
                h-4
                w-4
                text-indigo-600
                border-gray-300
                rounded
              "
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="candidates" class="font-medium text-gray-700"
              >Portugal</label
            >
          </div>
        </div>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              class="
                focus:ring-indigo-500
                h-4
                w-4
                text-indigo-600
                border-gray-300
                rounded
              "
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="offers" class="font-medium text-gray-700">Spain</label>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
