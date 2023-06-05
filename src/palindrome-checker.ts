
export const palindromeChecker=()=>{

      return {
         isPalindrome:(original:string)=>{
                
              const reversed= original.split('')
                                  .reverse()
                                  .join('')
            
              
              return removeSpaces(reversed.toLowerCase())===removeSpaces(original.toLowerCase());
            
         }
      }
}

const removeSpaces=(word:string):string=>{
        
  return word.split('')
                .filter(c => c!==' ')
                .join('')

}