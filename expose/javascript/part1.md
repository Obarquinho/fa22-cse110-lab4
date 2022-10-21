1. "values added: 20"
2. "final resut: 20"
3. "values added: 20"
4. error. result is a variable related by let, which can only be accessible to the scope it is in (the if statement). At line 13, it is outside the scope, so trying to call the result would not work.
5. Error. At line 7, trying to change the value of a const is not allowed because it is constant. It would error before being able to print something.
6. Error. Similar reason to 5. Additionally, const has the same scope properties as the let in questions 3 and 4, thus line 13 wouldn't even be able to access it.
