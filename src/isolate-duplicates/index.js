function isolateDuplicates(text) {
    
    const textSplit= text.split("")
    

    //checking for wrong input and converting all string to lower cases
     if( typeof text !='string'){
        return 'Please a valid string'
     }

     let originalString = text
     let str=''
     let count = 0
     for (let index = 0; index < originalString.length; index++) {
        let count = 0
        const cur = originalString[index];
        

        let init = text.charAt(index)
        let next = text.charAt(index+1)
       
        check = init==next
        if(check){
            count+=1
            str+=originalString[index]
            
        }else{
            count=0
            str+=init+'>'
        }

        let splitValue = str.split("<");

        let valueLength = 0;
      
      
      
        let stringCat = "";
      
      
      
        splitValue.forEach((item) => {
      
          if (item.length > 2) {
      
            valueLength += 1;
      
          }
      
          let exessCha = item.slice(2);
          //console.log(exessCha)
      
          if (exessCha.length > 0) {
      
           let singleDouble = item.slice(0, 2);
           return (stringCat += `${singleDouble}[${exessCha}]`);
      
          } else {
      
             return (stringCat += item);
      
          }
      
        });
        
     }

     let arrOfStrings = str.split('>')
     console.log(arrOfStrings, count )
   

     
}


isolateDuplicates("aaaabbcdefffffffg")

module.exports = isolateDuplicates;
