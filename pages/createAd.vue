<template>
  <div>CREATEAD</div>

  <div>
    <label>Email</label>
    <input name="email" id="email" type="email" />
  </div>

  <div>
    <label>Password</label>
    <input name="password" id="password" type="password" />
  </div>
</template>

<script setup lang="ts">
const title = ref<string>()
const description = ref<string>()
const type = ref<string>()
const propertyType = ref<string>()
const propertySubType = ref<string>()
const availability = ref<string>()
const address = ref<string>()
const photos = ref<[]>()
const cadastralIncome = ref<string>()
const isInvestment = ref<boolean>()
const isNew = ref<boolean>()
const facadeCount = ref<number>()
const floorArea = ref<number>()
const floorCount = ref<number>()
const buildYear = ref<number>()
const propertyState = ref<string>()
const hasGasWaterElectricity = ref<boolean>()
const hasSewerConnection = ref<boolean>()
const bedroomsCount = ref<number>()
const roomCount = ref<number>()
const bathroomCount = ref<number>()
const showerroomCount = ref<number>()
const toiletCount = ref<number>()
const kitchenCount = ref<number>()
const hasLivingroom = ref<boolean>()
const livingroomArea = ref<number>()
const hasDiningroom = ref<boolean>()
const diningroomArea = ref<number>()
const hasCellar = ref<boolean>()
const cellaArea = ref<number>()
const hasLaudryroom = ref<boolean>()
const laudryroomArea = ref<number>()
const hasAttic = ref<boolean>()
const atticArea = ref<number>()
const hasOffice = ref<boolean>()
const officeArea = ref<number>()
const hasWorkspace = ref<boolean>()
const workspaceArea = ref<number>()
const landArea = ref<number>()
const isLandFacingStreet = ref<boolean>()
const isLandFlat = ref<boolean>()
const isLandRear = ref<boolean>()
const isLandWooded = ref<boolean>()
const hasGarden = ref<boolean>()
const gardenArea = ref<number>()
const hasTerrace = ref<boolean>()
const terraceArea = ref<number>()
const hasPool = ref<boolean>()
const poolArea = ref<number>()
const heatingType = ref<string>()
const hasHeatPump = ref<boolean>()
const hasPhotovoltaicPanels = ref<boolean>()
const hasSolarPanels = ref<boolean>()
const hasDoubleGlazing = ref<boolean>()
const hasWaterHeater = ref<boolean>()
const hasAirConditioning = ref<boolean>()
const pebScore = ref<string>()
const pebReportNumber = ref<string>()
const pebEnergyConsumption = ref<string>()
const pebCO2Emission = ref<string>()
const pebPrimaryConsumption = ref<string>()
const hasPlanningPermission = ref<boolean>()
const isBreachingUrbanPlanning = ref<boolean>()
const floodZone = ref<string>()
const contactEmail = ref<string>()
const contactPhone = ref<string>()
const contactMobile = ref<string>()
const contactCallingTime = ref<string>()
</script>
