<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <label for="firstname">First Name</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="firstname"
          v-model="firstname"
          outlined
          dense
          placeholder="First Name"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="email">Email</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="email"
          v-model="email"
          outlined
          dense
          placeholder="Email"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="mobile">Mobile</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="mobile"
          v-model="mobile"
          type="number"
          outlined
          dense
          placeholder="Number"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="password">Password</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="password"
          v-model="password"
          type="password"
          outlined
          dense
          placeholder="Password"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        offset-md="3"
        cols="12"
      >
        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          class="mt-0"
          hide-details
        ></v-checkbox>
      </v-col>

      <v-col
        offset-md="3"
        cols="12"
      >
        <v-btn color="primary">
          Submit
        </v-btn>
        <v-btn
          type="reset"
          class="mx-2"
          outlined
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,
    }
  },
}
</script>
