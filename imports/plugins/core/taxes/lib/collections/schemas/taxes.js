import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { shopIdAutoValue } from "/lib/collections/schemas/helpers";

/**
* Taxes Schema
*/

export const Taxes = new SimpleSchema({
  "shopId": {
    type: String,
    autoValue: shopIdAutoValue,
    index: 1,
    label: "Taxes shopId"
  },
  "taxCode": {
    type: String,
    label: "Tax Identifier",
    index: 1
  },
  "cartMethod": {
    label: "Calculation Method",
    type: String,
    allowedValues: ["unit", "row", "total"]
  },
  "taxLocale": {
    label: "Taxation Location",
    type: String,
    allowedValues: ["shipping", "billing", "origination", "destination"]
  },
  "taxShipping": {
    label: "Tax Shipping",
    type: Boolean,
    defaultValue: false
  },
  "taxIncluded": {
    label: "Taxes included in product prices",
    type: Boolean,
    defaultValue: false
  },
  "discountsIncluded": {
    label: "Tax before discounts",
    type: Boolean,
    defaultValue: false
  },
  "region": {
    label: "State/Province/Region",
    type: String,
    optional: true,
    index: 1
  },
  "postal": {
    label: "ZIP/Postal Code",
    type: String,
    optional: true,
    index: 1
  },
  "country": {
    type: String,
    label: "Country",
    optional: true,
    index: 1
  },
  "isCommercial": {
    label: "Commercial address.",
    type: Boolean,
    optional: true
  },
  "rate": {
    type: Number,
    decimal: true
  },
  "method": {
    type: Array,
    optional: true,
    label: "Tax Methods"
  },
  "method.$": {
    type: Object
  },
  "method.$.plugin": {
    type: String,
    label: "Plugin",
    defaultValue: "Custom",
    optional: true
  },
  "method.$.enabled": {
    type: Boolean,
    label: "Enabled",
    defaultValue: true,
    optional: true
  }
});