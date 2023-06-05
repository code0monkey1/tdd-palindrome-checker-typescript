
export const palindromeChecker=()=>{

      return {
         isPalindrome:(str:string)=>{
                
              const reversed= reverseString(str)
              
              return removeSpaces(reversed.toLowerCase())===removeSpaces(str.toLowerCase());
            
         }
      }
}

const removeSpaces=(str:string):string=>{
    
  return str.split(' ').join('')
}

const reverseString=(str:string):string=>{
                return  str.split('')
                                  .reverse()
                                  .join('')
            
}