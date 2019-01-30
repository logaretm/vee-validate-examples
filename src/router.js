import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Basic from "./components/Basic";
import Checkbox from "./components/Checkbox";
import Backend from "./components/Backend";
import Models from "./components/Models";
import Initial from "./components/Initial";
import Delay from "./components/Delay";
import Flags from "./components/Flags";
import Form from "./components/Form";
import Locale from "./components/Locale";
import Radio from "./components/Radio";
import Scopes from "./components/Scopes";
import Selectors from "./components/Selectors";
import Manual from "./components/Manual";
import Custom from "./components/Custom";
import Vuex from "./components/Vuex";
import Infer from "./components/Infer";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "VeeValidate Official Examples",
      description:
        "This is a collection of official examples to showcase the features of VeeValidate"
    }
  },
  {
    path: "/basic",
    component: Basic,
    meta: {
      title: "Basic Example",
      description: "This is the minimum code to get validation working."
    }
  },

  {
    path: "/checkboxes",
    component: Checkbox,
    meta: {
      title: "Checkboxes Validation",
      description: "Validating checkboxes with vee-validate"
    }
  },
  {
    path: "/backend",
    component: Backend,
    meta: {
      title: "Async Validation",
      description:
        "A simple backend validation example with unique email validator"
    }
  },
  {
    path: "/models",
    component: Models,
    meta: {
      title: "Validating Models",
      description: "VeeValidate tracks v-model instead of the input DOM values"
    }
  },
  {
    path: "/initial",
    component: Initial,
    meta: {
      title: "Validating Initial Values",
      description: "Validating pre-populated inputs"
    }
  },
  {
    path: "/debounce",
    component: Delay,
    meta: {
      title: "Delayed (Debounced) Validation",
      description: "Debounce the validation rate of vee-validate"
    }
  },
  {
    path: "/flags",
    component: Flags,
    meta: {
      title: "Flags Example",
      description: "The various flags provided by vee-valdiate"
    }
  },
  {
    path: "/custom",
    component: Custom,
    meta: {
      title: "Custom Component Example",
      description: "Validating custom vue components"
    }
  },
  {
    path: "/form",
    component: Form,
    meta: {
      title: "Validating Forms",
      description: "Validate forms before submission."
    }
  },
  {
    path: "/locale",
    component: Locale,
    meta: {
      title: "Localization",
      description: "Switching locales dynamically"
    }
  },
  {
    path: "/radio",
    component: Radio,
    meta: {
      title: "Radiobuttons",
      description: "Validating Radio Buttons"
    }
  },
  {
    path: "/scopes",
    component: Scopes,
    meta: {
      title: "Scoped Validation",
      description: "Limiting validation to specific scopes or groups of inputs"
    }
  },
  {
    path: "/selectors",
    component: Selectors,
    meta: {
      title: "Selecting Errors",
      description: "Selecting error messages based on error selector strings."
    }
  },
  {
    path: "/manual",
    component: Manual,
    meta: {
      title: "Programatic Validation",
      description:
        "Using validator instance without the directive to validate inputs."
    }
  },
  {
    path: "/vuex",
    component: Vuex,
    meta: {
      title: "Validating Vuex State",
      description: "Using setters on computed properties to validate vuex state"
    }
  },
  {
    path: "/infer",
    component: Infer,
    meta: {
      title: "Inferred Rules",
      description: "Using HTML5 Attributes to validate"
    }
  }
];

export const router = new VueRouter({
  routes
});

export default router;
