
javascript:(function() {
  const weltMP = () => {
    const createLi = (val) => {
      let li = document.createElement('li');  
      let b = document.createElement('b'); 
      b.innerText = 'Eur/Mp'; 
      li.append(b); 
      li.append(' : '); 
      let price = document.createElement('span'); 
      price.classList.add('price');
      var priceVal = document.createElement('b'); 
      priceVal.innerText = val + ' €'; 
      price.append(priceVal); 
      li.append(price); 
      return li; 
    };  
    const getValueFromList =  (l, type, valueIndex) => {
      for(let i = 0; i < l.length; i++) {
        let elem = l[i]; 
        if(elem.children[0].innerText == type) {
          return elem.childNodes[valueIndex]; 
        }
      } 
    };
    const getSup = (l) => { 
      let value = getValueFromList(l, 'Suprafata', 1).wholeText.replace(/\D+/g, ''); 
      return Number.parseFloat(value); 
    }; 
    const getPrice = (l) => {
      let value = getValueFromList(l, 'Pret vanzare', 2).innerText.replace(/\D+/g, '');
      return Number.parseFloat(value);
    }; 
    const getMP = (l) => { 
      let sup = getSup(l); 
      let price = getPrice(l); 
      return Math.round(price/sup); 
    }; 

    let details = document.getElementsByClassName('details');
    for(let i=0; i < details.length; i++) {
      let ul = details[i];
      let children = ul.getElementsByTagName('li');  
      ul.append(createLi(getMP(children))); 
    }
  };
  weltMP();
} ());
