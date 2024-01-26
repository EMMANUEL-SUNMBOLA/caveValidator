function chechNet(phone){
    if(phone.value.length > 0){
        let mtn = document.querySelector('#mtn')
        let airtel = document.querySelector('#airtel')
        let glo = document.querySelector('#glo')
        let ninemobile = document.querySelector('#ninemobile')
    
        if(/^0?(80[36]|70[36]|81[0346]|90[36]|91[36])/.test(phone.value)){
          airtel.selected = false;
          glo.selected = false;
          ninemobile.selected = false;
    
          mtn.selected = true;
        }else if(/^0?(80[28]|812|070[18]|90[1247]|91[12])/.test(phone.value)){
          mtn.selected = false;
          glo.selected = false;
          ninemobile.selected = false;
    
          airtel.selected = true;
        }else if(/^0?(80[57]|81[15]|705|905|915)/.test(phone.value)){
          mtn.selected = false;
          airtel.selected = false;
          ninemobile.selected = false;
    
          glo.selected = true;
        }else if(/^0?(809|081[78]|090[89])/.test(phone.value)){
          mtn.selected = false;
          glo.selected = false;
          airtel.selected = false;
    
          ninemobile.selected = true;
        }
      }
}