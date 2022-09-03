

<template>
  <form class="flex flex-col w-1/3 gap-16 py-16 mx-auto my-0">
    <ul
      class="
        relative
        flex flex-col
        w-full
        gap-16
        before:absolute
        before:content-['']
        before:z-[-1]
        before:top-6
        before:left-3
        before:w-[1px]
        before:h-[calc(100%-24px)]
        before:mx-auto
        before:my-0
        before:bg-fg
      "
    >
      <span class="flex flex-col w-full gap-6 my-0 mx-auto">
        <Title label="Données Epidémiologiques"></Title>
        <Input
          number="1"
          label="Année"
          placeholder="XXXX"
          name="name"
          type="number"
          v-model="mri.years"
        ></Input>
        <Input
          number="2"
          label="Age"
          placeholder="XX"
          name="email"
          type="number"
          v-model="mri.age"
        ></Input>
        <Select
          v-model="mri.requesting_hospital"
          number="3"
          label="Clinique"
          placeholder="XXXX"
          name="name"
          :options="[
      'hpd' , 
      'hald' ,'hogip' , 'chan' , 'chpk' , 'privé' , 'centre de santé' , 'région'
    ]"
        ></Select>
        <Select
          v-model="mri.requesting_doctor"
          number="4"
          label="Medecin demandeur"
          placeholder="XXXX"
          name="name"
          :options="['UROLOGUE', 'GENERALISTE', 'AUTRES']"
        ></Select>
        <Input label="Numéro de téléphone" v-model="mri.phoneNumber"></Input>
        <Title></Title>
        
      </span>
      <span class="flex flex-col w-full gap-6 my-0 mx-auto">
        <Title label="INDICATIONS CLINIQUES"></Title>
        <Select
          v-model="mri.tr"
          number="1"
          label="TR"
          placeholder="XXXX"
          name="name"
          :options="[
      'prostate suspecté',
        'prostate aspect normal'
    ]"
        ></Select>
        <Checkbox v-model="mri.sbau" number="2" label="SBAU"></Checkbox>
        <Checkbox
          v-model="mri.algie_osseuse_diffuse"
          number="3"
          label="Algie Osseuse Diffuse"
        ></Checkbox>
        <Checkbox
          v-model="mri.compression_medullaire"
          number="4"
          label="Compression médullaire"
        ></Checkbox>
        <Textarea
          v-model="mri.Others"
          number="5"
          label="Autres"
          placeholder="Type here also..."
          name="feedback"
          type="text"
        ></Textarea>
        <Title></Title>
        <Title label="Indications Paracliniques"></Title>

        <Input
          v-model="mri.PSA_total"
          number="1"
          label="PSA Total"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Title label="Echographie"></Title>
        <Select
          v-model="mri.echographic_aspect_prostate"
          number="1"
          label="Aspect de la prostate"
          placeholder="XXXX"
          name="name"
          :options="[
      'hétérogéne', 'homogéne'
    ]"
        ></Select>
        <Checkbox
          v-model="mri.calcification"
          number="2"
          label="Calcification"
        ></Checkbox>
        <Select
          v-model="mri.contours"
          number="3"
          label="Aspect de la prostate"
          placeholder="XXXX"
          name="name"
          :options="[
      'regulier', 'irregulier'
    ]"
        ></Select>
        <Input
          v-model="mri.echo_prostate_volume"
          number="4"
          label="Volume de la prostate"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Select
          v-model="mri.nodule"
          number="5"
          label="Nodule"
          placeholder="XXXX"
          name="name"
          :options="[
      'present', 'absent'
    ]"
        ></Select>
        <Title></Title>
        <Title label="TDM"></Title>

        <Input
          v-model="mri.tdm_prostate_volume"
          number="1"
          label="Volume de la prostate"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Input
          v-model="mri.density_prostate"
          number="2"
          label="Densité de la prostate"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Checkbox
          v-model="mri.invasion_local"
          number="3"
          label="ENVAHISSEMNT LOCAL"
        ></Checkbox>
        <Checkbox
          v-model="mri.invasion_locoregional"
          number="4"
          label="ENVAHISSEMNT LOCOREGIONAL"
        ></Checkbox>
        <Checkbox
          v-model="mri.invasion_distant"
          number="5"
          label="ENVAHISSEMNT A DISTANCE"
        ></Checkbox>
        <Select
          v-model="mri.adénopathie"
          number="6"
          label="Présence de l'adénopathie"
          placeholder="XXXX"
          name="name"
          :options="[
        'iliaque' ,'ilio obturateur', 'médiastinal'
    ]"
        ></Select>
        <Title></Title>
        <Title label="IRM"></Title>

        <Input
          v-model="mri.irm_prostate_volume"
          number="1"
          label="Volume de la prostate"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Checkbox
          v-model="mri.suspected_leisure"
          number="2"
          label="Lésions suspectes"
        ></Checkbox>
        <Input
          v-model="mri.suspected_leisure_siege"
          number="3"
          label="Siège"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Input
          v-model="mri.suspected_leisure_taille"
          number="4"
          label="Taille"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Input
          v-model="mri.suspected_leisure_pirads"
          number="5"
          label="Pirads"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Input
          v-model="mri.extension"
          number="6"
          label="Extension"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Checkbox
          v-model="mri.suspected_leisure_effractioncapsulaire"
          number="7"
          label="Effraction capsulaire"
        ></Checkbox>
        <Checkbox
          v-model="mri.suspected_leisure_atteintevs"
          number="8"
          label="Atteinte des VS"
        ></Checkbox>
        <Checkbox
          v-model="mri.suspected_leisure_adenopathies"
          number="9"
          label="Présence des adénopathies pelviennes"
        ></Checkbox>
        <Title></Title>
      </span>
    </ul>
    <span class="flex w-full justify-end gap-4">
      <button
      @click.prevent="initMri"
        class="
          px-4
          py-2
          rounded
          bg-fg
          font-semibold
          text-sm
          transition-colors
          hover:bg-fgVar
        "
      >
        Réinitialiser
      </button>
      <button

        @click.prevent="submitMri"
        :disabled="!mri.isValid()"
        :class="{
          'px-4 py-2 rounded bg-primary font-semibold text-sm transition-colors hover:bg-primaryVar disabled' : mri.isValid()
        }"
      >
                    <svg
                v-if="submit"
                role="status"
                class="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
        Enregistrer
      </button>
    </span>
  </form>
</template>

<script setup lang="ts">
import Input from "./Input.vue";
import Range from "./Range.vue";
import Textarea from "./Textarea.vue";
import Checkbox from "./Checkbox.vue";
import Radio from "./Radio.vue";
import Select from "./Select.vue";
import Title from "./Title.vue";
import { MRI } from "../models/mri";
import { computed, inject, ref,watch } from "vue";
import { useStore } from "vuex";

const mri = ref(new MRI());
//mri.value.test()
const strore = useStore()
const toast = inject('toast')
const submit = ref(false)

watch
  (mri,
  (val) => {
    /* ... */
  },{deep:true})
  const initMri = () =>{
    mri.value = new MRI()
  }
  const submitMri  = async() =>{
    try{
      
      submit.value = true
      await strore.dispatch('addMri',mri.value.toLowerCase()).then(()=>{

            initMri()
            toast.success("Fiche enregistré avec succes")

      }).finally(()=>{
        submit.value = false
      })


    }
    catch(err){

    }

    
  }

</script>

<style scoped>

</style>
