<template>
  <div class="text-center text-3xl mt-3">{{ _local(['createAd']) }}</div>

  <div class="flex my-6 justify-center flex-wrap">
    <div v-for="(category, i) in categories" class="flex items-center">
      <div
        :class="{
          'border-b-2 border-black': selectedCategory == category.name,
        }"
        class="mx-6 py-2 cursor-pointer hover:opacity-80"
        @click="selectedCategory = category.name"
      >
        {{ _local(['ad', category.name]) }}
      </div>

      <ClientOnly v-if="i < categories.length - 1">
        <icon icon="chevron-right" size="xl" class="mr-3" />
      </ClientOnly>
    </div>
  </div>

  <form>
    <div v-for="(category, i) in categories" class="flex justify-center">
      <div v-if="category.name == selectedCategory">
        <div v-for="(field, i) in category.fields" class="mb-3">
          <div
            v-if="
              field.type == 'select' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue
                ))
            "
          >
            <label class="block" :for="field.title">
              {{ _local(['ad', field.title]) }}

              <span v-if="!field.required" class="text-sm text-gray-500">
                ({{ _local(['common', 'optional']) }})
              </span>
            </label>

            <select
              :name="field.title"
              :id="field.title"
              v-model="field.value"
              class="w-96 rounded"
            >
              <option value="" disabled selected>
                {{ _local(['common', 'selectAnOption']) }}
              </option>

              <option v-for="option in field.options" :value="option">
                {{ _local(['ad', option]) }}
              </option>
            </select>
          </div>

          <div
            v-if="
              field.type == 'text' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue
                ))
            "
          >
            <label class="block" :for="field.title">
              {{ _local(['ad', field.title]) }}

              <span v-if="!field.required" class="text-sm text-gray-500">
                ({{ _local(['common', 'optional']) }})
              </span>
            </label>

            <input
              :name="field.title"
              :id="field.title"
              :type="field.type"
              v-model="field.value"
              class="w-96 rounded"
            />
          </div>

          <div
            v-if="
              field.type == 'number' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue
                ))
            "
          >
            <label class="block" :for="field.title">
              {{ _local(['ad', field.title]) }}

              <span v-if="!field.required" class="text-sm text-gray-500">
                ({{ _local(['common', 'optional']) }})
              </span>
            </label>

            <input
              :name="field.title"
              :id="field.title"
              :type="field.type"
              v-model="field.value"
              class="w-96 rounded"
            />
          </div>

          <div
            v-if="
              field.type == 'textarea' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue
                ))
            "
          >
            <label class="block" :for="field.title">
              {{ _local(['ad', field.title]) }}

              <span v-if="!field.required" class="text-sm text-gray-500">
                ({{ _local(['common', 'optional']) }})
              </span>
            </label>

            <textarea
              :name="field.title"
              :id="field.title"
              :type="field.type"
              v-model="field.value"
              class="w-96 rounded"
              rows="8"
            ></textarea>
          </div>

          <div
            v-if="
              field.type == 'checkbox' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue
                ))
            "
          >
            <input
              :name="field.title"
              :id="field.title"
              :type="field.type"
              v-model="field.value"
              class="mr-2"
            />

            <label :for="field.title">
              {{ _local(['ad', field.title]) }}

              <span v-if="!field.required" class="text-sm text-gray-500">
                ({{ _local(['common', 'optional']) }})
              </span>
            </label>
          </div>

          <div v-if="field.type == 'title'">
            <div class="text-2xl mb-6" :class="{ 'mt-6': i > 0 }">
              {{ _local(['ad', field.title]) }}
            </div>
          </div>

          <div
            v-if="
              field.type == 'spacer' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue
                ))
            "
            class="w-100 h-2"
          ></div>
        </div>

        <div class="flex justify-between mt-10 mb-14">
          <div v-if="i == 0"></div>

          <div
            class="cursor-pointer"
            v-if="i > 0"
            @click="selectedCategory = navigateToCategory(-1)"
          >
            {{ _local(['common', 'previous']) }}
          </div>

          <div
            class="cursor-pointer"
            v-if="i < categories.length - 1"
            @click="selectedCategory = navigateToCategory(1)"
          >
            {{ _local(['common', 'next']) }}
          </div>

          <div class="cursor-pointer" v-if="i == categories.length - 1">
            {{ _local(['common', 'done']) }}
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import createAdFields from '@/misc/createAdFields.json'

const selectedCategory = ref('general')

const categoryNames = [
  'general',
  'photos',
  'composition',
  'land',
  'technical',
  'contact',
]

const categories = ref(createAdFields)

function getHideCondition(
  category: any,
  hideConditionTitle: any,
  hideConditionValue: any
) {
  const hideConditionField = category.fields.find(
    (f: any) => f.title == hideConditionTitle
  )

  return hideConditionField?.value == hideConditionValue
}

function navigateToCategory(direction: number) {
  const i = categoryNames.indexOf(selectedCategory.value)

  return categoryNames[i + direction]
}
</script>
