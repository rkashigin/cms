"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core10 = require("@keystone-6/core");
var dotenv = __toESM(require("dotenv"));

// lists/User.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var User = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields.text)({ label: "\u0418\u043C\u044F", validation: { isRequired: true } }),
    avatar: (0, import_fields.image)({ label: "\u0410\u0432\u0430\u0442\u0430\u0440", storage: "s3_images" }),
    email: (0, import_fields.text)({
      label: "Email",
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    password: (0, import_fields.password)({ label: "\u041F\u0430\u0440\u043E\u043B\u044C", validation: { isRequired: true } }),
    createdAt: (0, import_fields.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
      defaultValue: { kind: "now" }
    })
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      return resolvedData;
    }
  },
  ui: {
    label: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"
  }
});

// lists/File.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var File = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    name: (0, import_fields2.text)({ label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430" }),
    description: (0, import_fields2.text)({ label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430" }),
    file: (0, import_fields2.file)({
      label: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442",
      storage: "s3_files"
    }),
    updatedAt: (0, import_fields2.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"
    }),
    createdAt: (0, import_fields2.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"
    })
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      return resolvedData;
    }
  },
  ui: {
    label: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"
  }
});

// lists/Image.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var Image = (0, import_core3.list)({
  access: import_access3.allowAll,
  fields: {
    name: (0, import_fields3.text)({ label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F" }),
    description: (0, import_fields3.text)({ label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F" }),
    image: (0, import_fields3.image)({
      label: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
      storage: "s3_images"
    }),
    updatedAt: (0, import_fields3.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"
    }),
    createdAt: (0, import_fields3.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"
    })
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      return resolvedData;
    }
  },
  ui: {
    label: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"
  }
});

// lists/BuildingMaterial.ts
var import_core4 = require("@keystone-6/core");
var import_fields4 = require("@keystone-6/core/fields");
var import_access4 = require("@keystone-6/core/access");
var BuildingMaterial = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    materialName: (0, import_fields4.text)({
      label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430",
      validation: { isRequired: true }
    }),
    materialType: (0, import_fields4.select)({
      label: "\u0422\u0438\u043F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430",
      options: [
        { label: "\u041C\u0435\u0442\u0430\u043B\u043B", value: "metal" },
        { label: "\u0414\u0435\u0440\u0435\u0432\u043E", value: "wood" },
        { label: "\u041A\u0430\u043C\u0435\u043D\u044C", value: "rock" },
        { label: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A", value: "plastic" }
      ],
      defaultValue: "contractor",
      validation: { isRequired: true }
    }),
    manufacturer: (0, import_fields4.text)({ label: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C" }),
    price: (0, import_fields4.integer)({ label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430" }),
    project: (0, import_fields4.relationship)({
      label: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
      ref: "BuildingProject.materialsRequired",
      ui: { labelField: "projectName", searchFields: ["projectName"] }
    }),
    createdAt: (0, import_fields4.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields4.timestamp)({ label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" })
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      return resolvedData;
    }
  },
  ui: {
    label: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"
  }
});

// lists/BuildingProject.ts
var import_core5 = require("@keystone-6/core");
var import_fields5 = require("@keystone-6/core/fields");
var import_access5 = require("@keystone-6/core/access");
var BuildingProject = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    projectName: (0, import_fields5.text)({
      label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
      validation: { isRequired: true }
    }),
    projectType: (0, import_fields5.select)({
      label: "\u0422\u0438\u043F \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
      options: [
        { label: "\u0416\u0438\u043B\u043E\u0435", value: "living" },
        { label: "\u041D\u0435\u0436\u0438\u043B\u043E\u0435", value: "non-living" },
        { label: "\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0435", value: "industrial" }
      ],
      defaultValue: "contractor",
      validation: { isRequired: true }
    }),
    location: (0, import_fields5.text)({ label: "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435" }),
    duration: (0, import_fields5.integer)({ label: "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C" }),
    materialsRequired: (0, import_fields5.relationship)({
      label: "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
      ref: "BuildingMaterial.project",
      many: true,
      ui: { labelField: "materialName", searchFields: ["materialName"] }
    }),
    servicesRequired: (0, import_fields5.relationship)({
      label: "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438",
      ref: "BuildingService.project",
      many: true,
      ui: { labelField: "serviceName", searchFields: ["serviceName"] }
    }),
    tender: (0, import_fields5.relationship)({
      label: "\u0422\u0435\u043D\u0434\u0435\u0440",
      ref: "Tender",
      ui: { labelField: "title", searchFields: ["title"] }
    }),
    createdAt: (0, import_fields5.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields5.timestamp)({ label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" })
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      return resolvedData;
    }
  },
  ui: {
    label: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"
  }
});

// lists/BuildingService.ts
var import_core6 = require("@keystone-6/core");
var import_fields6 = require("@keystone-6/core/fields");
var import_access6 = require("@keystone-6/core/access");
var BuildingService = (0, import_core6.list)({
  access: import_access6.allowAll,
  fields: {
    serviceName: (0, import_fields6.text)({
      label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438",
      validation: { isRequired: true }
    }),
    serviceDescription: (0, import_fields6.text)({ label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438" }),
    price: (0, import_fields6.integer)({ label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438" }),
    project: (0, import_fields6.relationship)({
      label: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
      ref: "BuildingProject.servicesRequired",
      ui: { labelField: "projectName", searchFields: ["projectName"] }
    }),
    createdAt: (0, import_fields6.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields6.timestamp)({ label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" })
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      return resolvedData;
    }
  },
  ui: {
    label: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438"
  }
});

// lists/ConstructionCompany.ts
var import_core7 = require("@keystone-6/core");
var import_fields7 = require("@keystone-6/core/fields");
var import_access7 = require("@keystone-6/core/access");
var ConstructionCompany = (0, import_core7.list)({
  access: import_access7.allowAll,
  fields: {
    name: (0, import_fields7.text)({ label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", validation: { isRequired: true } }),
    address: (0, import_fields7.text)({ label: "\u0410\u0434\u0440\u0435\u0441" }),
    type: (0, import_fields7.select)({
      label: "\u0422\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
      options: [
        { label: "\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A", value: "contractor" },
        { label: "\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A", value: "client" },
        { label: "\u041E\u0431\u0430", value: "both" }
      ],
      defaultValue: "contractor",
      validation: { isRequired: true }
    }),
    specialization: (0, import_fields7.text)({ label: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438" }),
    experience: (0, import_fields7.integer)({ label: "\u041E\u043F\u044B\u0442", validation: { min: 0 } }),
    rating: (0, import_fields7.integer)({ label: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433", validation: { min: 0 } }),
    certifications: (0, import_fields7.text)({ label: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438" }),
    reviews: (0, import_fields7.relationship)({
      label: "\u041E\u0442\u0437\u044B\u0432\u044B",
      ref: "Review.company",
      many: true
    }),
    tendersWon: (0, import_fields7.relationship)({
      label: "\u0412\u044B\u0438\u0433\u0440\u0430\u043D\u043D\u044B\u0435 \u0442\u0435\u043D\u0434\u0435\u0440\u044B",
      ref: "Tender.winner",
      many: true
    }),
    tendersParticipated: (0, import_fields7.relationship)({
      label: "\u0422\u0435\u043D\u0434\u0435\u0440\u044B, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u044B\u043B\u043E \u043F\u0440\u0438\u043D\u044F\u0442\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u0435",
      ref: "Tender.participants",
      many: true
    }),
    createdAt: (0, import_fields7.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields7.timestamp)({ label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" })
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      return resolvedData;
    }
  },
  ui: {
    label: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
  }
});

// lists/Tender.ts
var import_core8 = require("@keystone-6/core");
var import_fields8 = require("@keystone-6/core/fields");
var import_access8 = require("@keystone-6/core/access");
var Tender = (0, import_core8.list)({
  access: import_access8.allowAll,
  fields: {
    title: (0, import_fields8.text)({
      label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043D\u0434\u0435\u0440\u0430",
      validation: { isRequired: true }
    }),
    description: (0, import_fields8.text)({ label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u0435\u043D\u0434\u0435\u0440\u0430" }),
    budget: (0, import_fields8.integer)({ label: "\u0411\u044E\u0434\u0436\u0435\u0442", validation: { min: 0 } }),
    startDate: (0, import_fields8.timestamp)({ label: "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430" }),
    endDate: (0, import_fields8.timestamp)({ label: "\u0414\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F" }),
    servicesRequired: (0, import_fields8.text)({ label: "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438" }),
    projectType: (0, import_fields8.text)({ label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430" }),
    participants: (0, import_fields8.relationship)({
      label: "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",
      ref: "ConstructionCompany.tendersParticipated",
      many: true
    }),
    winner: (0, import_fields8.relationship)({
      label: "\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u0442\u0435\u0434\u0435\u0440\u0430",
      ref: "ConstructionCompany.tendersWon"
    }),
    createdAt: (0, import_fields8.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields8.timestamp)({ label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" })
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      return resolvedData;
    }
  },
  ui: {
    label: "\u0422\u0435\u043D\u0434\u0435\u0440\u044B"
  }
});

// lists/Review.ts
var import_fields9 = require("@keystone-6/core/fields");
var import_core9 = require("@keystone-6/core");
var import_access9 = require("@keystone-6/core/access");
var Review = (0, import_core9.list)({
  access: import_access9.allowAll,
  fields: {
    reviewText: (0, import_fields9.text)({ label: "\u041E\u0442\u0437\u044B\u0432", validation: { isRequired: true } }),
    rating: (0, import_fields9.integer)({ label: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433" }),
    company: (0, import_fields9.relationship)({ ref: "ConstructionCompany.reviews" }),
    createdAt: (0, import_fields9.timestamp)({
      label: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields9.timestamp)({ label: "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" })
  },
  hooks: {
    resolveInput: ({ resolvedData }) => {
      resolvedData.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      return resolvedData;
    }
  },
  ui: {
    label: " \u041E\u0442\u0437\u044B\u0432\u044B"
  }
});

// lists/index.ts
var lists = {
  User,
  File,
  Image,
  BuildingMaterial,
  BuildingProject,
  BuildingService,
  ConstructionCompany,
  Tender,
  Review
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var databaseUrls = {
  local: "postgres://postgres:postgres@localhost:5432/cms",
  remote: "postgres://rkashigin:B6RaPkAE5cpY@ep-wandering-water-697632.eu-central-1.aws.neon.tech/cms"
};
dotenv.config();
console.log("MY ENV", process.env.PORT, process.env.DATABASE_URL);
var keystone_default = withAuth(
  (0, import_core10.config)({
    server: {
      port: Number(process.env.PORT) || 5555
    },
    db: {
      provider: "postgresql",
      idField: {
        kind: "autoincrement"
      },
      onConnect: async () => {
        console.log("CONNECTED SUCCESSFULY");
      },
      url: process.env.DATABASE_URL || databaseUrls.local
    },
    storage: {
      s3_files: {
        kind: "s3",
        type: "file",
        bucketName: "rmn-bucket",
        endpoint: "https://s3.tebi.io",
        region: "eu",
        accessKeyId: "h9sunAXMvGzlxyNX",
        secretAccessKey: "6qFxYtNqfDHYw0aBOg1pPVmaXD2EapVIgOY259D3",
        signed: { expiry: 3600 }
      },
      s3_images: {
        kind: "s3",
        type: "image",
        bucketName: "rmn-bucket",
        endpoint: "https://s3.tebi.io",
        region: "eu",
        accessKeyId: "h9sunAXMvGzlxyNX",
        secretAccessKey: "6qFxYtNqfDHYw0aBOg1pPVmaXD2EapVIgOY259D3",
        signed: { expiry: 3600 }
      }
    },
    lists,
    session
  })
);
