

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
        ></Input>
        <Input
          number="2"
          label="Age"
          placeholder="XX"
          name="email"
          type="number"
        ></Input>
        <Select
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
          number="4"
          label="Medecin demandeur"
          placeholder="XXXX"
          name="name"
          :options="['UROLOGUE', 'GENRALISTE', 'AUTRES']"
        ></Select>
        <Input
          number="5"
          label="Année"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Title></Title>
      </span>
      <span class="flex flex-col w-full gap-6 my-0 mx-auto">
        <Title label="INDICATIONS CLINIQUE"></Title>
        <Select
          number="1"
          label="TR"
          placeholder="XXXX"
          name="name"
          :options="['PROSTATE SUPECTÉ', 'PROSTATE D ASPECT NORMAL']"
        ></Select>
        <Checkbox number="2" label="SBAU"></Checkbox>
        <Checkbox number="3" label="Algie Osseuse"></Checkbox>
        <Checkbox number="4" label="Compression médullaire"></Checkbox>
        <Textarea
          number="5"
          label="Autres"
          placeholder="Type here also..."
          name="feedback"
          type="text"
        ></Textarea>
        <Title></Title>
        <Title label="Indications Paraclinique"></Title>

        <Input
          number="1"
          label="PSA Total"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Title label="Echographie"></Title>
        <Select
          number="1"
          label="Aspect de la prostate"
          placeholder="XXXX"
          name="name"
          :options="['HÉTÉROGENE', 'HOMOGÉNE']"
        ></Select>
        <Checkbox number="2" label="CALCIFICATION"></Checkbox>
        <Select
          number="3"
          label="Aspect de la prostate"
          placeholder="XXXX"
          name="name"
          :options="['RÉGULIER', 'IRRÉGULIER']"
        ></Select>
        <Input
          number="4"
          label="Volume de la prostate"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Select
          number="5"
          label="Aspect de la prostate"
          placeholder="XXXX"
          name="name"
          :options="['PRÉSENT', 'ABSENT']"
        ></Select>
        <Title></Title>
        <Title label="TDM"></Title>

        <Input
          number="1"
          label="Volume de la prostate"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Input
          number="2"
          label="Densité de la prostate"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Checkbox number="3" label="ENVAHISSEMNT LOCAL"></Checkbox>
        <Checkbox number="4" label="ENVAHISSEMNT LOCOREGIONAL"></Checkbox>
        <Checkbox number="5" label="ENVAHISSEMNT A DISTANCE"></Checkbox>
        <Select
          number="6"
          label="PRESENCE DE L ADENOPATHIE"
          placeholder="XXXX"
          name="name"
          :options="['ILIAQUE', 'ILIO OBTURATEUR', 'MEDIASTONAL']"
        ></Select>
        <Title></Title>
        <Title label="IRM"></Title>

        <Input
          number="1"
          label="Volume de la prostate"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Checkbox number="2" label="LESION SUSPECTES"></Checkbox>
        <Input
          number="3"
          label="SIEGE"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Input
          number="4"
          label="TAILLE"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Input
          number="5"
          label="PIRADS"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Input
          number="6"
          label="EXTENSION"
          placeholder="XXXX"
          name="name"
          type="number"
        ></Input>
        <Checkbox number="7" label="EFFRACTION CAPSULAIRE"></Checkbox>
        <Checkbox number="8" label="ATTEINTE DES VS"></Checkbox>
        <Checkbox
          number="9"
          label="Présence des adénopathies pelviennes"
        ></Checkbox>
        <Title></Title>
      </span>
    </ul>
    <span class="flex w-full justify-end gap-4">
      <button
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
        Annuler
      </button>
      <button
        disabled
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
</script>
