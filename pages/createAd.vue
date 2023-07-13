<template>
  <div class="text-center text-3xl mt-3">{{ _local(['createAd']) }}</div>

  <div class="flex my-6 justify-center flex-wrap">
    <div v-for="category in categories">
      <div
        :class="{ 'bg-slate-300': selectedCategory == category.name }"
        class="rounded-lg mx-3 px-3 py-2 cursor-pointer hover:opacity-80"
        @click="selectedCategory = category.name"
      >
        {{ _local(['ad', category.name]) }}
      </div>
    </div>
  </div>

  <div v-for="category in categories">
    <div v-if="category.name == selectedCategory">
      <div v-for="field in category.fields" class="mb-3">
        <div v-if="field.type == 'select'">
          <label class="block" :for="field.title">
            {{ _local(['ad', field.title]) }}
          </label>

          <select :name="field.title" :id="field.title" v-model="field.value">
            <option v-for="option in field.options" :value="option">
              {{ _local(['ad', option]) }}
            </option>
          </select>
        </div>
        <div v-if="field.type == 'text'">
          <label class="block" :for="field.title">
            {{ _local(['ad', field.title]) }}
          </label>

          <input
            :name="field.title"
            :id="field.title"
            :type="field.type"
            v-model="field.value"
          />
        </div>

        <div v-if="field.type == 'number'">
          <label class="block" :for="field.title">
            {{ _local(['ad', field.title]) }}
          </label>

          <input
            :name="field.title"
            :id="field.title"
            :type="field.type"
            v-model="field.value"
          />
        </div>

        <div v-if="field.type == 'textarea'">
          <label class="block" :for="field.title">
            {{ _local(['ad', field.title]) }}
          </label>

          <textarea
            :name="field.title"
            :id="field.title"
            :type="field.type"
            v-model="field.value"
          ></textarea>
        </div>

        <div v-if="field.type == 'checkbox'">
          <input
            :name="field.title"
            :id="field.title"
            :type="field.type"
            v-model="field.value"
            class="mr-2"
          />

          <label :for="field.title">
            {{ _local(['ad', field.title]) }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedCategory = ref('general')

const categories = ref([
  {
    name: 'general',
    fields: [
      {
        title: 'type',
        type: 'select',
        value: '',
        required: false,
        options: ['sell', 'rent'],
      },
      {
        title: 'propertyType',
        type: 'select',
        value: '',
        required: false,
        options: [
          'house',
          'apartment',
          'land',
          'garage',
          'office',
          'industry',
          'commercial',
          'other',
        ],
      },
      { title: 'availability', type: 'text', value: '', required: false },
      { title: 'availabilityDate', type: 'text', value: '', required: false },
      { title: 'address', type: 'text', value: '', required: false },
      { title: 'price', type: 'number', value: '', required: false },
      { title: 'cadastralIncome', type: 'text', value: '', required: false },
      { title: 'isInvestment', type: 'checkbox', value: '', required: false },
      { title: 'isNew', type: 'checkbox', value: '', required: false },
      { title: 'description', type: 'textarea', value: '', required: false },
    ],
  },
  {
    name: 'photos',
    fields: [{ title: 'photos', type: 'text', value: '', required: false }],
  },
  {
    name: 'composition',
    fields: [
      { title: 'facadeCount', type: 'number', value: '', required: false },
      { title: 'floorArea', type: 'number', value: '', required: false },
      { title: 'floorCount', type: 'number', value: '', required: false },
      { title: 'buildYear', type: 'number', value: '', required: false },
      { title: 'propertyState', type: 'text', value: '', required: false },
      {
        title: 'hasGasWaterElectricity',
        type: 'checkbox',
        value: '',
        required: false,
      },
      {
        title: 'hasSewerConnection',
        type: 'checkbox',
        value: '',
        required: false,
      },
      { title: 'bedroomCount', type: 'number', value: '', required: false },
      { title: 'roomCount', type: 'number', value: '', required: false },
      { title: 'bathroomCount', type: 'number', value: '', required: false },
      { title: 'showerroomCount', type: 'number', value: '', required: false },
      { title: 'toiletCount', type: 'number', value: '', required: false },
      { title: 'hasKitchen', type: 'checkbox', value: '', required: false },
      { title: 'kitchenArea', type: 'number', value: '', required: false },
      { title: 'hasLivingroom', type: 'checkbox', value: '', required: false },
      { title: 'livingroomArea', type: 'number', value: '', required: false },
      { title: 'hasDiningroom', type: 'checkbox', value: '', required: false },
      { title: 'diningroomArea', type: 'number', value: '', required: false },
      { title: 'hasCellar', type: 'checkbox', value: '', required: false },
      { title: 'cellaArea', type: 'number', value: '', required: false },
      { title: 'hasLaudryroom', type: 'checkbox', value: '', required: false },
      { title: 'laudryroomArea', type: 'number', value: '', required: false },
      { title: 'hasAttic', type: 'checkbox', value: '', required: false },
      { title: 'atticArea', type: 'number', value: '', required: false },
      { title: 'hasOffice', type: 'checkbox', value: '', required: false },
      { title: 'officeArea', type: 'number', value: '', required: false },
      { title: 'hasWorkspace', type: 'checkbox', value: '', required: false },
      { title: 'workspaceArea', type: 'number', value: '', required: false },
    ],
  },
  {
    name: 'land',
    fields: [
      { title: 'landArea', type: 'number', value: '', required: false },
      {
        title: 'isLandFacingStreet',
        type: 'checkbox',
        value: '',
        required: false,
      },
      { title: 'isLandFlat', type: 'checkbox', value: '', required: false },
      { title: 'isLandRear', type: 'checkbox', value: '', required: false },
      { title: 'isLandWooded', type: 'checkbox', value: '', required: false },
      { title: 'hasGarden', type: 'checkbox', value: '', required: false },
      { title: 'gardenArea', type: 'number', value: '', required: false },
      { title: 'hasTerrace', type: 'checkbox', value: '', required: false },
      { title: 'terraceArea', type: 'number', value: '', required: false },
      { title: 'hasPool', type: 'checkbox', value: '', required: false },
      { title: 'poolArea', type: 'number', value: '', required: false },
    ],
  },
  {
    name: 'technical',
    fields: [
      { title: 'heatingType', type: 'text', value: '', required: false },
      { title: 'hasHeatPump', type: 'checkbox', value: '', required: false },
      {
        title: 'hasPhotovoltaicPanels',
        type: 'checkbox',
        value: '',
        required: false,
      },
      { title: 'hasSolarPanels', type: 'checkbox', value: '', required: false },
      {
        title: 'hasDoubleGlazing',
        type: 'checkbox',
        value: '',
        required: false,
      },
      { title: 'hasWaterHeater', type: 'checkbox', value: '', required: false },
      {
        title: 'hasAirConditioning',
        type: 'checkbox',
        value: '',
        required: false,
      },
      { title: 'pebScore', type: 'text', value: '', required: false },
      { title: 'pebReportNumber', type: 'text', value: '', required: false },
      {
        title: 'pebEnergyConsumption',
        type: 'text',
        value: '',
        required: false,
      },
      { title: 'pebCO2Emission', type: 'text', value: '', required: false },
      {
        title: 'pebPrimaryConsumption',
        type: 'text',
        value: '',
        required: false,
      },
      {
        title: 'hasPlanningPermission',
        type: 'checkbox',
        value: '',
        required: false,
      },
      {
        title: 'isBreachingUrbanPlanning',
        type: 'checkbox',
        value: '',
        required: false,
      },
      { title: 'floodZone', type: 'text', value: '', required: false },
    ],
  },
  {
    name: 'contact',
    fields: [
      { title: 'contactEmail', type: 'text', value: '', required: false },
      { title: 'contactPhone', type: 'text', value: '', required: false },
      { title: 'contactMobile', type: 'text', value: '', required: false },
      { title: 'contactCallingTime', type: 'text', value: '', required: false },
    ],
  },
])
</script>
