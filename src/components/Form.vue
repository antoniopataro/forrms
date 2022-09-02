

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
            'HPD',
            'HALD',
            'HOGIP',
            'CHAN',
            'CHPK',
            'PRIVE',
            'CENTRE DE SANTE',
            'REGION',
          ]"
        ></Select>
        <Select
          v-model="mri.requesting_doctor"
          number="4"
          label="Medecin demandeur"
          placeholder="XXXX"
          name="name"
          :options="['UROLOGUE', 'GENRALISTE', 'AUTRES']"
        ></Select>
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
          :options="['PROSTATE SUPECTÉ', 'PROSTATE D ASPECT NORMAL']"
        ></Select>
        <Checkbox v-model="mri.sbau" number="2" label="SBAU"></Checkbox>
        <Checkbox
          v-model="mri.algi_osseurse_diffuse"
          number="3"
          label="Algie Osseuse Diffuse"
        ></Checkbox>
        <Checkbox
          v-model="mri.compression_medullaire"
          number="4"
          label="Compression médullaire"
        ></Checkbox>
        <Textarea
          v-model="mri.others"
          number="5"
          label="Autres"
          placeholder="Type here also..."
          name="feedback"
          type="text"
        ></Textarea>
        <Title></Title>
        <Title label="Indications Paracliniques"></Title>

        <Input
          v-model="mri.psa_total"
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
          :options="['HÉTÉROGENE', 'HOMOGÉNE']"
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
          :options="['RÉGULIER', 'IRRÉGULIER']"
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
          :options="['PRÉSENT', 'ABSENT']"
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
          :options="['ILIAQUE', 'ILIO OBTURATEUR', 'MEDIASTONAL']"
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
        disabled
        class="
          px-4
          py-2
          rounded
          bg-fg
          font-semibold
          text-sm
          cursor-pointer
          transition-colors
          hover:bg-fgVar
        "
      >
        Réinitialiser
      </button>
      <button

        @click.prevent="submitMri"
        :disabled="!mri.isValid"
        class="
          px-4
          py-2
          rounded
          bg-primary
          font-semibold
          text-sm
          cursor-pointer
          transition-colors
          hover:bg-primaryVar
        "
      >
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
import { computed, ref,watch } from "vue";
import { useStore } from "vuex";

const mri = ref(new MRI());
const strore = useStore()


watch
  (mri,
  (val) => {
    console.log("change",val)
    /* ... */
  },{deep:true})
  const initMri = () =>{
    mri.value = new MRI()
  }
  const submitMri  = async() =>{
    await strore.dispatch('addMri',mri.value)
    initMri()
  }

</script>
