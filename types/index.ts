interface User {
  id: number
  email: string
  password: string
  salt: string
  token: string
  isValidated: boolean
}

interface Ad {
  id: number
  description?: string
  type?: string
  propertyType?: string
  propertySubType?: string
  availability?: string
  availabilityDate?: string
  address?: string
  photos: Photo[]
  price?: number
  cadastralIncome?: string
  isInvestment: boolean
  isNew: boolean
  facadeCount?: number
  floorArea?: number
  floorCount?: number
  buildYear?: number
  propertyState?: string
  hasGasWaterElectricity: boolean
  hasSewerConnection: boolean
  bedroomCount?: number
  bedroomAreas?: string
  roomCount?: number
  bathroomCount?: number
  showerroomCount?: number
  toiletCount?: number
  hasKitchen: boolean
  kitchenArea?: number
  hasLivingroom: boolean
  livingroomArea?: number
  hasDiningroom: boolean
  diningroomArea?: number
  hasCellar: boolean
  cellaArea?: number
  hasLaudryroom: boolean
  laudryroomArea?: number
  hasAttic: boolean
  atticArea?: number
  hasOffice: boolean
  officeArea?: number
  hasWorkspace: boolean
  workspaceArea?: number
  landArea?: number
  isLandFacingStreet: boolean
  isLandFlat: boolean
  isLandRear: boolean
  isLandWooded: boolean
  hasGarden: boolean
  gardenArea?: number
  hasTerrace: boolean
  terraceArea?: number
  hasPool: boolean
  poolArea?: number
  heatingType?: string
  hasHeatPump: boolean
  hasPhotovoltaicPanels: boolean
  hasSolarPanels: boolean
  hasDoubleGlazing: boolean
  hasWaterHeater: boolean
  hasAirConditioning: boolean
  pebScore?: string
  pebReportNumber?: string
  pebEnergyConsumption?: string
  pebCO2Emission?: string
  pebPrimaryConsumption?: string
  hasPlanningPermission: boolean
  isBreachingUrbanPlanning: boolean
  floodZone?: string
  contactEmail?: string
  contactPhone?: string
  contactMobile?: string
  contactCallingTime?: string
}

interface Photo {
  id: number
  ad: Ad
  adId: number
}

interface CreateAdCategory {
  id: number
  name: string
  fields: CreateAdField[]
}

interface CreateAdField {
  id: number
  title?: string
  type: string
  slider: boolean
  value?: string
  required: boolean
  options?: string
  unit?: string
  isHidden: boolean
  hideConditionTitle?: string
  hideConditionValue?: string
  CreateAdCategory: CreateAdCategory
  createAdCategoryId: number
}
