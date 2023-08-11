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
    <div
      :class="{ hidden: selectedCategory != 'photos' }"
      class="flex justify-center"
    >
      <ClientOnly>
        <div class="mt-6 pb-6 w-96">
          <file-pond
            ref="pond"
            allow-multiple="true"
            allow-reorder="true"
            accepted-file-types="image/jpeg, image/png"
            :label-idle="_local(['ad', 'dropPhotosHere'])"
          />
        </div>
      </ClientOnly>
    </div>

    <div v-for="(category, i) in categories" class="flex justify-center">
      <div v-if="category.name == selectedCategory">
        <div v-for="(field, i) in category.fields" class="mb-5">
          <div
            v-if="
              field.type == 'select' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue,
                ))
            "
          >
            <label
              class="block mb-1 font-bold text-gray-700"
              :for="field.title"
            >
              {{ _local(['ad', field.title]) }}

              <span
                v-if="!field.required"
                class="text-sm text-gray-500 font-normal"
              >
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
                  field.hideConditionValue,
                ))
            "
          >
            <label
              class="block mb-1 font-bold text-gray-700"
              :for="field.title"
            >
              {{ _local(['ad', field.title]) }}

              <span
                v-if="!field.required"
                class="text-sm text-gray-500 font-normal"
              >
                ({{ _local(['common', 'optional']) }})
              </span>
            </label>

            <div class="flex items-center w-96">
              <input
                :name="field.title"
                :id="field.title"
                :type="field.title == 'availabilityDate' ? 'date' : field.type"
                v-model="field.value"
                class="rounded w-full"
                :ref="field.title == 'address' ? 'addressinput' : ''"
              />

              <div
                v-if="field.unit"
                class="ml-3 border border-gray-400 rounded px-3 py-2"
              >
                {{ _local(['ad', field.unit]) }}
              </div>
            </div>
          </div>

          <div
            v-if="
              field.type == 'split' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue,
                ))
            "
            class="mb-9 flex flex-col items-center"
          >
            <div v-for="i in getSplitValue(category, field.hideConditionTitle)">
              <label
                class="block mb-1 font-bold text-gray-700"
                :for="field.title"
              >
                {{ _local(['ad', field.title]) }} {{ i }}

                <span
                  v-if="!field.required"
                  class="text-sm text-gray-500 font-normal"
                >
                  ({{ _local(['common', 'optional']) }})
                </span>
              </label>

              <div class="flex items-center w-80 mb-3">
                <input
                  v-if="typeof field.value == 'object'"
                  :name="field.title"
                  :id="field.title"
                  type="number"
                  v-model="field.value[i]"
                  class="rounded w-full"
                />

                <div
                  v-if="field.unit"
                  class="ml-3 border border-gray-400 rounded px-3 py-2"
                >
                  {{ _local(['ad', field.unit]) }}
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="
              field.type == 'number' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue,
                ))
            "
          >
            <label
              class="block mb-1 font-bold text-gray-700"
              :for="field.title"
            >
              {{ _local(['ad', field.title]) }}

              <span
                v-if="!field.required"
                class="text-sm text-gray-500 font-normal"
              >
                ({{ _local(['common', 'optional']) }})
              </span>
            </label>

            <div class="flex items-center w-96">
              <button
                v-if="field.slider"
                class="border border-gray-500 bg-white hover:bg-gray-100 rounded px-3 py-2 mr-2 cursor-pointer"
                @click.prevent="addToField(field, -1)"
                :class="[
                  { 'pointer-events-none': !field.value },
                  { 'bg-gray-200': !field.value },
                ]"
              >
                <ClientOnly>
                  <icon icon="minus" size="xl" />
                </ClientOnly>
              </button>

              <input
                :name="field.title"
                :id="field.title"
                :type="field.type"
                v-model="field.value"
                class="rounded w-full"
                :class="[
                  { 'text-center': field.slider },
                  { 'input-no-arrow-wk': field.slider },
                  { 'input-no-arrow-moz': field.slider },
                  { 'bg-gray-100': field.slider },
                ]"
                :disabled="field.slider"
              />

              <button
                v-if="field.slider"
                class="border border-gray-500 bg-white hover:bg-gray-100 rounded px-3 py-2 ml-2 cursor-pointer"
                @click.prevent="addToField(field, 1)"
              >
                <ClientOnly>
                  <icon icon="plus" size="xl" />
                </ClientOnly>
              </button>

              <div
                v-if="field.unit"
                class="ml-3 border border-gray-400 rounded px-3 py-2"
              >
                {{ _local(['ad', field.unit]) }}
              </div>
            </div>
          </div>

          <div v-if="field.type == 'photos'" class="w-96"></div>

          <div
            v-if="
              field.type == 'textarea' &&
              (!field.isHidden ||
                getHideCondition(
                  category,
                  field.hideConditionTitle,
                  field.hideConditionValue,
                ))
            "
          >
            <label
              class="block mb-1 font-bold text-gray-700"
              :for="field.title"
            >
              {{ _local(['ad', field.title]) }}

              <span
                v-if="!field.required"
                class="text-sm text-gray-500 font-normal"
              >
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
                  field.hideConditionValue,
                ))
            "
            class="hover:opacity-80"
          >
            <input
              :name="field.title"
              :id="field.title"
              :type="field.type"
              v-model="field.value"
              class="mr-2 cursor-pointer"
            />

            <label :for="field.title" class="cursor-pointer">
              {{ _local(['ad', field.title]) }}

              <span
                v-if="!field.required"
                class="text-sm text-gray-500 font-normal"
              >
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
                  field.hideConditionValue,
                ))
            "
            class="w-100 h-1"
          ></div>
        </div>

        <div class="flex justify-between mt-10 mb-14">
          <div v-if="i == 0"></div>

          <div
            class="cursor-pointer border border-gray-500 bg-white hover:bg-gray-100 rounded px-3 py-2"
            v-if="i > 0"
            @click="selectedCategory = navigateToCategory(-1)"
          >
            <ClientOnly>
              <icon icon="chevron-left" size="lg" class="mr-3" />
            </ClientOnly>

            {{ _local(['common', 'previous']) }}
          </div>

          <div
            class="cursor-pointer border border-gray-500 bg-white hover:bg-gray-100 rounded px-3 py-2"
            v-if="i < categories.length - 1"
            @click="selectedCategory = navigateToCategory(1)"
          >
            {{ _local(['common', 'next']) }}

            <ClientOnly>
              <icon icon="chevron-right" size="lg" class="ml-3" />
            </ClientOnly>
          </div>

          <div
            class="cursor-pointer border bg-blue-600 hover:bg-blue-500 text-white rounded px-3 py-2"
            v-if="i == categories.length - 1"
            @click="createAd()"
          >
            <ClientOnly>
              <icon icon="check" size="lg" class="mr-3" />
            </ClientOnly>

            {{ _local(['common', 'done']) }}
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import createAdSkeleton from '@/misc/createAdSkeleton.json'

const addressinput = ref(null)

onMounted(() => {
  //@ts-ignore
  new google.maps.places.Autocomplete(addressinput.value[0], {
    fields: ['formatted_address'],
    strictBounds: false,
    componentRestrictions: { country: 'be' },
  })
})

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
)

const selectedCategory = ref('general')

const categoryNames = createAdSkeleton.map((x) => x.name)

const categories = ref(createAdSkeleton)

const pond = ref(null)

function getHideCondition(
  category: any,
  hideConditionTitle: any,
  hideConditionValue: any,
) {
  const hideConditionField = category.fields.find(
    (f: any) => f.title == hideConditionTitle,
  )

  if (!isNaN(hideConditionField?.value)) {
    if (hideConditionField?.value > 0) {
      if (hideConditionValue) return true
    }
  }

  return hideConditionField?.value == hideConditionValue
}

function getSplitValue(category: any, hideConditionTitle: any) {
  const hideConditionField = category.fields.find(
    (f: any) => f.title == hideConditionTitle,
  )

  return hideConditionField?.value
}

function navigateToCategory(direction: number) {
  const i = categoryNames.indexOf(selectedCategory.value)

  return categoryNames[i + direction]
}

function addToField(field: any, value: number) {
  field.value += value

  if (field.value < 0) {
    field.value = 0
  }

  for (const cat of createAdSkeleton) {
    for (let f of cat.fields) {
      if (f.title == field.child) {
        if (typeof f.value == 'object') {
          if (value == -1) {
            f.value.pop()
          } else if (value == 1) {
            //@ts-ignore
            f.value.push('')
          }
        }

        break
      }
    }
  }
}

async function createAd() {
  let copy = JSON.parse(JSON.stringify(categories.value))

  for (const cat of copy) {
    for (let field of cat.fields) {
      if (field.type == 'split' && typeof field.value == 'object') {
        if (field.value.length > 1) {
          for (const item of field.value) {
            if (item) {
              field.value.shift()
              break
            }
          }
        }

        field.value = field.value.join('###')
      }
    }
  }

  console.log(copy)

  //@ts-ignore
  console.log(pond.value.getFiles())
}
</script>

<style>
.input-no-arrow-wk::-webkit-outer-spin-button,
.input-no-arrow-wk::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-no-arrow-moz {
  appearance: textfield;
  -moz-appearance: textfield;
}

.filepond--credits {
  display: none;
}

.filepond--drop-label {
  background-color: white;
  border-radius: 5px;
  border: 4px grey dashed;
  height: 150px;
  cursor: pointer;
}

.filepond--drop-label:hover {
  background-color: rgb(243, 243, 243);
}

.filepond--drop-label > label {
  cursor: pointer;
}

.filepond--list {
  margin-top: 20px !important;
}

.filepond--panel-root,
.filepond--panel-top,
.filepond--panel-center,
.filepond--panel-bottom {
  background-color: transparent !important;
}
</style>
