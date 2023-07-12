<template>
  <div>CREATEAD</div>

  <div v-for="field in fields">
    <div v-if="field.type == 'text'">
      <label class="block" :for="field.title">{{ field.title }}</label>

      <input
        :name="field.title"
        :id="field.title"
        :type="field.type"
        v-model="field.value"
      />
      {{ field.value }}
    </div>

    <div v-if="field.type == 'number'">
      <label class="block" :for="field.title">{{ field.title }}</label>

      <input
        :name="field.title"
        :id="field.title"
        :type="field.type"
        v-model="field.value"
      />
      {{ field.value }}
    </div>

    <div v-if="field.type == 'textarea'">
      <label class="block" :for="field.title">{{ field.title }}</label>

      <textarea
        :name="field.title"
        :id="field.title"
        :type="field.type"
        v-model="field.value"
      ></textarea>
      {{ field.value }}
    </div>

    <div v-if="field.type == 'checkbox'">
      <input
        :name="field.title"
        :id="field.title"
        :type="field.type"
        v-model="field.value"
      />

      <label :for="field.title">{{ field.title }}</label>

      {{ field.value }}
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = ref([
  { title: 'title', type: 'text', value: '' },
  { title: 'description', type: 'textarea', value: '' },
  { title: 'type', type: 'text', value: '' },
  { title: 'propertyType', type: 'text', value: '' },
  { title: 'propertySubType', type: 'text', value: '' },
  { title: 'availability', type: 'text', value: '' },
  { title: 'address', type: 'text', value: '' },
  { title: 'photos', type: 'text', value: '' },
  { title: 'cadastralIncome', type: 'text', value: '' },
  { title: 'isInvestment', type: 'checkbox', value: '' },
  { title: 'isNew', type: 'checkbox', value: '' },
  { title: 'facadeCount', type: 'number', value: '' },
  { title: 'floorArea', type: 'number', value: '' },
  { title: 'floorCount', type: 'number', value: '' },
  { title: 'buildYear', type: 'number', value: '' },
  { title: 'propertyState', type: 'text', value: '' },
  { title: 'hasGasWaterElectricity', type: 'checkbox', value: '' },
  { title: 'hasSewerConnection', type: 'checkbox', value: '' },
  { title: 'bedroomsCount', type: 'number', value: '' },
  { title: 'roomCount', type: 'number', value: '' },
  { title: 'bathroomCount', type: 'number', value: '' },
  { title: 'showerroomCount', type: 'number', value: '' },
  { title: 'toiletCount', type: 'number', value: '' },
  { title: 'kitchenCount', type: 'number', value: '' },
  { title: 'hasLivingroom', type: 'checkbox', value: '' },
  { title: 'livingroomArea', type: 'number', value: '' },
  { title: 'hasDiningroom', type: 'checkbox', value: '' },
  { title: 'diningroomArea', type: 'number', value: '' },
  { title: 'hasCellar', type: 'checkbox', value: '' },
  { title: 'cellaArea', type: 'number', value: '' },
  { title: 'hasLaudryroom', type: 'checkbox', value: '' },
  { title: 'laudryroomArea', type: 'number', value: '' },
  { title: 'hasAttic', type: 'checkbox', value: '' },
  { title: 'atticArea', type: 'number', value: '' },
  { title: 'hasOffice', type: 'checkbox', value: '' },
  { title: 'officeArea', type: 'number', value: '' },
  { title: 'hasWorkspace', type: 'checkbox', value: '' },
  { title: 'workspaceArea', type: 'number', value: '' },
  { title: 'landArea', type: 'number', value: '' },
  { title: 'isLandFacingStreet', type: 'checkbox', value: '' },
  { title: 'isLandFlat', type: 'checkbox', value: '' },
  { title: 'isLandRear', type: 'checkbox', value: '' },
  { title: 'isLandWooded', type: 'checkbox', value: '' },
  { title: 'hasGarden', type: 'checkbox', value: '' },
  { title: 'gardenArea', type: 'number', value: '' },
  { title: 'hasTerrace', type: 'checkbox', value: '' },
  { title: 'terraceArea', type: 'number', value: '' },
  { title: 'hasPool', type: 'checkbox', value: '' },
  { title: 'poolArea', type: 'number', value: '' },
  { title: 'heatingType', type: 'text', value: '' },
  { title: 'hasHeatPump', type: 'checkbox', value: '' },
  { title: 'hasPhotovoltaicPanels', type: 'checkbox', value: '' },
  { title: 'hasSolarPanels', type: 'checkbox', value: '' },
  { title: 'hasDoubleGlazing', type: 'checkbox', value: '' },
  { title: 'hasWaterHeater', type: 'checkbox', value: '' },
  { title: 'hasAirConditioning', type: 'checkbox', value: '' },
  { title: 'pebScore', type: 'text', value: '' },
  { title: 'pebReportNumber', type: 'text', value: '' },
  { title: 'pebEnergyConsumption', type: 'text', value: '' },
  { title: 'pebCO2Emission', type: 'text', value: '' },
  { title: 'pebPrimaryConsumption', type: 'text', value: '' },
  { title: 'hasPlanningPermission', type: 'checkbox', value: '' },
  { title: 'isBreachingUrbanPlanning', type: 'checkbox', value: '' },
  { title: 'floodZone', type: 'text', value: '' },
  { title: 'contactEmail', type: 'text', value: '' },
  { title: 'contactPhone', type: 'text', value: '' },
  { title: 'contactMobile', type: 'text', value: '' },
  { title: 'contactCallingTime', type: 'text', value: '' },
])
</script>
