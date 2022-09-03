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
      years: "2019",
      age: "10",
      phoneNumber: "1212334",
      requesting_hospital: "HPD",
      requesting_doctor: "UROLOGUE",
      tr: "PROSTATE SUPECTÉ",
      sbau: "OUI",
      algie_osseuse_diffuse: "OUI",
      compression_medullaire: "OUI",
      Others: "12",
      PSA_total: "12",
      echographic_aspect_prostate: "HÉTÉROGENE",
      calcification: "OUI",
      contours: "RÉGULIER",
      echo_prostate_volume: "12",
      nodule: "PRÉSENT",
      tdm_prostate_volume: "12",
      density_prostate: "12",
      invasion_local: "OUI",
      invasion_locoregional: "OUI",
      invasion_distant: "OUI",
      adénopathie: "ILIAQUE",
      irm_prostate_volume: "12",
      suspected_leisure: "OUI",
      suspected_leisure_siege: "11",
      suspected_leisure_taille: "12",
      suspected_leisure_pirads: "12",
      suspected_leisure_effractioncapsulaire: "OUI",
      suspected_leisure_atteintevs: "OUI",
      suspected_leisure_adenopathies: "OUI",
      extension: "10"
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
    })
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