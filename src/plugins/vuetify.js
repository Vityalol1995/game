/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VApp, VAppBar, VBtn, VCard, VContainer, VForm, VRow, VCol, VTextField } from 'vuetify/components';

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  components: {
    VApp,
    VAppBar,
    VBtn,
    VCard,
    VContainer,
    VForm,
    VRow,
    VCol,
    VTextField
  }
})
