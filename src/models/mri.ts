export  class MRI{
  years: string = '2019';
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

  isValid(){
    return Object.entries(this).every(([key,value]) =>{
      return !!value
    })
  }
  initAllValues(){
    Object.keys(this).forEach((key) =>{
      this[key] = (Math.random() * 5) + '';
    })

  }
  }