export  class MRI{
  years: string = '';
  age!: string;
  phoneNumber!: string;
  requesting_hospital!: string;
  requesting_doctor!: string;
  tr!: string;
  sbau!: string;
  algie_osseuse_diffuse!: string;
  compression_medullaire!: string;
  Others!: string;
  PSA_total!: string;
  echographic_aspect_prostate!: string;
  calcification!: string;
  contours!: string;
  echo_prostate_volume!: string;
  nodule!: string;
  tdm_prostate_volume!: string;
  density_prostate!: string;
  invasion_local!: string;
  invasion_locoregional!: string;
  invasion_distant!: string;
  adénopathie!: string;
  irm_prostate_volume!: string;
  suspected_leisure!: string;
  suspected_leisure_siege!: string;
  suspected_leisure_taille!: string;
  suspected_leisure_pirads!: string;
  suspected_leisure_effractioncapsulaire!: string;
  suspected_leisure_atteintevs!: string;
  suspected_leisure_adenopathies!: string;
  extension!: string;
  test()
  {
    this.parse({
      years: "4",
      age: "12",
      phoneNumber: "112",
      requesting_hospital: "chpk",
      requesting_doctor: "urologue",
      tr: "autres",
      sbau: "oui",
      algie_osseuse_diffuse: "oui",
      compression_medullaire: "oui",
      Others: "12",
      PSA_total: "11",
      echographic_aspect_prostate: "hétérogéne",
      calcification: "oui",
      contours: "regulier",
      echo_prostate_volume: "12",
      nodule: "absent",
      tdm_prostate_volume: "12",
      density_prostate: "12",
      invasion_local: "oui",
      invasion_locoregional: "oui",
      invasion_distant: "oui",
      adénopathie: "ilio obturateur",
      irm_prostate_volume: "12",
      suspected_leisure: "oui",
      suspected_leisure_siege: "12",
      suspected_leisure_taille: "12",
      suspected_leisure_pirads: "12",
      suspected_leisure_effractioncapsulaire: "oui",
      suspected_leisure_atteintevs: "oui",
      suspected_leisure_adenopathies: "oui",
      extension: "12"
    })
  }
  parse(object){
    Object.keys(object).forEach((key)=>{
      this[key] = object[key]
    })
  }
  isValid(){
    return Object.entries(this).every(([key,value]) =>{
      return !!value
    }) && this.phoneNumber.length === 9
  }
  toLowerCase(){
    const toRet = new MRI()
    Object.keys(this).forEach((key) =>{
      toRet[key] =this[key]?.toLowerCase();
      
    })
    return toRet
  }

  initAllValues(){
    Object.keys(this).forEach((key) =>{
      this[key] = (Math.random() * 5);
    })

  }
  }