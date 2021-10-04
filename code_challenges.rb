# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# declare a method named odd_even
# take  input number as num
# conditionals if and elsif to check numbers even or odd
# print the numbers using p command
# end statement to stop the if condition

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_even(num)
    if num % 2 == 0
    "#{num} is even"
    elsif num % 2 != 0 
    "#{num} is odd"
    end 
end
p odd_even(7)
p odd_even(42)
p odd_even(221)





# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete


# declare a method named str_vowels
# take  input string
# use .delete "aeiouAEIOU" to delete the vowels in the string 
# end to stop the method 
# print the output of each srting using 'p'


album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def str_vowels string
string = string.delete "aeiouAEIOU" 
end
p str_vowels 'Rubber Soul'
p str_vowels 'Sgt Pepper'
p str_vowels 'Abbey Road'


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

# declare a method named is_palindrome
# take  input string
# use conditionals if/elsif to check given string is palindrome or not
# end to stop the if conditionals and method 
# print the output of each srting using 'p'

is_palindrome1 = 'Racecar'
# # Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# # Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'

def is_palindrome string
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome."
    else
        "#{string} is not a palindrome."
    end
end

p is_palindrome 'Racecar'
p is_palindrome 'LEARN'
p is_palindrome 'Rotator'