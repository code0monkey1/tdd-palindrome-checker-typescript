
export const palindromeChecker=()=>{

      return {
         isPalindrome:(str:string)=>{
                
              const reversed= str.split('')
                                  .reverse()
                                  .join('')

              
              return removeSpaces(reversed.toLowerCase())===removeSpaces(str.toLowerCase());
            
         }
      }
}

const removeSpaces=(word:string):string=>{
        
  return word.split('')
                .filter(c => c!==' ')
                .join('')

}