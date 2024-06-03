<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <v-text-field
                class="mb-2"
                v-model="form.email"
                label="Email"
                :error-messages="v$.email.$errors.map(e => e.$message)"
                required
              ></v-text-field>
              <v-text-field
                class="mb-2"
                v-model="form.password"
                label="Password"
                type="password"
                :error-messages="v$.password.$errors.map(e => e.$message)"
                required
              ></v-text-field>
              <v-btn class="button" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {useVuelidate} from '@vuelidate/core';
import {required, email, minLength} from '@vuelidate/validators';
import {reactive, computed} from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();

const form = reactive({
  email: '',
  password: ''
});

const rules = computed(() => ({
  email: {
    required,
    email
  },
  password: {
    required,
    minLength: minLength(6)
  }
}));

const v$ = useVuelidate(rules, form);

async function handleSubmit() {
  v$.value.$touch();
  const result = await v$.value.$validate();
  if (!result) {
    return;
  }

  router.push('/game')
}
</script>

<style scoped>
.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.button {
  margin-top: 10px;
}
</style>
