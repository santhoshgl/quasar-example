<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
 <div class="q-pa-md" style="max-width: 400px">

    <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ></q-input>
      <q-input
        filled
        v-model="email"
        label="Please enter email"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ></q-input>

    

      <q-toggle v-model="accept" label="I accept the license and terms"></q-toggle>

      <div>
        <q-btn label="Submit" type="submit" color="primary"></q-btn>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
      </div>
    </q-form>

  </div>
    </q-page-container>
  </q-layout>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'ManiLayout',
  data: () => ({
    email:"",
    accept: "",
    name:""
  }),

  methods: {
    ...mapActions([
      'getTodos'
    ]),
  },
  computed: {
    ...mapGetters([])
  },
  created() {
    this.getTodos()
  },
  mounted() {
  }
}
</script>

