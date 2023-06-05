import { palindromeChecker } from "../src/palindrome-checker"

describe("Palindrome Checker",()=>{
    
  describe('should be able to tell if a string is a palindrome',()=>{

       test('should have a function named palindrome checker defined',()=>{

                     expect(palindromeChecker).toBeDefined()
       })

       test('should be truthy for a single letter',()=>{

                  // Arrange
                  const sut = palindromeChecker()
                  const str = "a"

                  expect(sut.isPalindrome(str)).toBeTruthy()
                  
       })

         test.each([{word:"ab"},{word:"bill"}])('should be falsy for `$word`,  which is not a palindrome',({word})=>{

                  // Arrange
                  const sut = palindromeChecker()

                  // Apply / Assert
                  expect(sut.isPalindrome(word)).toBeFalsy()
       })


         test.each([{word:"malayalam"},{word:"oyo"}])('should be truthy for `$word`,  which is not a palindrome',({word})=>{

                  // Arrange
                  const sut = palindromeChecker()

                  // Apply / Assert
                  expect(sut.isPalindrome(word)).toBeTruthy()
       })

          test.each([{word:"malayalaM"},{word:"Oyo"}])('should be truthy if case ( lower / upper case) is different for  `$word`,  which is still a palindrome',({word})=>{

                  // Arrange
                  const sut = palindromeChecker()

                  // Apply / Assert
                  expect(sut.isPalindrome(word)).toBeTruthy()
       })

            test.each([{word:"Was It A Rat I Saw"},{word:"Never odd or even"}])('should be truthy if case is different for instances when it`s lower or upper case , and there are spaces between the `$word`,  which is still a palindrome',({word})=>{

                  // Arrange
                  const sut = palindromeChecker()

                  // Apply / Assert
                  expect(sut.isPalindrome(word)).toBeTruthy()
       })


       

  })

})