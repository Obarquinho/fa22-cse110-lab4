1. It will print out "3". i is a var, whose scope is not limited to just its block, so it cna be accessed outside the for loop it is declared in. i's value is only chagned at line 6, which says once i is no longer less than the length of prices (3), its value can stop incrementing by 1. Thus, this would end once 3 is equal to 3.
2. It will print out "150". discountedPrice is a var, whose scope is not limited to just its block, so it can be accessed outside the for loop it is declared in. discountedPrice's value is always reassigned to prices[i] * (1 - discount) at line 7. Thus it's value at the end of the for loop, should be equivalent to that equation once i = 2, the last value i is for the for loopss in that instance (as stated in quesetion 1). Thus it will be prices[2] * (1 - 0.5), which is 300 * 0.5, or equivalently 15. 
3. It will print out "150". finalPrice is a var, whose cope is not limited to just its block (just the function), where it is declared at line 4. It will be modified by the for loop and at line 8 to the equation Math.round(discountedPrice * 100) / 100. This will be applied to the last discountedPrice, which was proven to be 150 in question 2. Doing such math will result in finalPrice being 150.
4. the function will return an array with the members [50, 100, 150]. discounted is a var, so it can be modified anywhere in the function, which it is at line 9. discounted gets the final price at each iteration of the loop pushed onto it, which is 50 pushed when i = 0, 100 pushed when i = 1, and 150 pushed when i = 2. This is then returned at line 16.
5. Error. i is outside its scope (the for loop) at line 12, thus cannot be called outside it because it is a let, which has a limited scope as described.
6. Error. same situation as question 5. disountedPrice is a let variable declared in the for loop, and line 13 is outside the scope of discountedPrice.
7. It will print out "150". This is because final prices' scope is the function block as that is where it is declared. The only other line modifying finalPrice is line 8, which is in a for loop in the function, which contains the same scope. This finalPrice follows the same iteration and equation as explained in line 3, so it will return the last final price, which is 150.
8. It will return [50, 100, 150]. This is because discounted's scope is the function block as that is where it is declared. The other line modifying it is line 9, which is still in the function block, where finalPrice is pushed onto it. This follows the same pattern as described in question 4, so it will return [50, 100, 150].
9. Code errors at line 8 as you cannot change the value of a const (discounted). 
10. same as 9 with the error. 
11. Same as 9 with the error.
12. A. student.name. B. student['Grad Year']. C. student.greeting(). D. student['Favorite Teaacher'].name. E. student.courseLoad[0]
13. A. 32, 2 is mapped to its string, thus appends to '3'. B. 1, - is an operation for integers, so '3' is mapped to the interger 3. C. 3. null becomes 0. D. 30. null becomes 0 and is added to string '3' like question A. E 4. true becomes 1 and is added to 3 F. 0. both become 0 and are added to each other. G 3undefined. Append undefined as string to string '3'. H. NaN, because undefined becomes NaN during arithmetic.
14. A. true. String of int is mapped to int, so 2 is greater than 1. B. false. 2 is less than 12 both with ints and strings. C. true, '2' is equivalent to int 2, so true. D. false, === is a strict equity check which counts types. E. false. True equals 1 as an int, which does not equal 2. True. Boolean of ints not equal to 0 would result int True, so they are strictly equal.
15. == is not as strict for types as ===. == will do type conversions such as making the string equivalent to its int value, whilst === will not.
16. 
``` 
for(let property in statistics){
    if(property[0] == 'r' || property/2 != 0){
        console.log(property);
    }
}
```

17. [2, 4, 6] is the result. The function doSomething is passed for the callback parameter for modifyArray, which will be called in line4, where callback(array[i]) will be pushed onto the newArray. This iterates through all values of inputted array [1,2,3], which would mean each value has doSomething done to it (multiplying by 2), thus would be the array. 
19. 1, 4, 3, 2
