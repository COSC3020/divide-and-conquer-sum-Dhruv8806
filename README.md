[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11820298&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Explanation: 

$`T(n) = 3T(n/3)+ 3`$

$`T(n/3) = 3T(n/9) + 3`$

$` T(n) = 3(3T(n/9)+3 )+ 3 `$

$` T(n) =3^2 T(n/3^2)+9 + 3  `$

$` T(n) = 9T(n/9)+9+3 `$

$` T(n) = 9(3T(n/27)+3)+9+3 `$

$` T(n) =3^i T (n/3^i) `$

$` i = (lg_3 n) `$

$` T(n) = 3^(lg_3 n) T (n/3^(lg_3 n)) `$    

$` 3^(lg_3n) = n  `$

$` T (n/3^i) = 1 `$

$` 3^i=n `$ 

Based on the above explanation. The run time will be $\Theta$(n)

Sources used: 
Firstly, I was a bit lost so I had a look at this website https://www.geeksforgeeks.org/how-to-analyse-complexity-of-recurrence-relation/ to get a better understanding of the problem. Then after all that I solved the problem by looking at the mergesort example lecture notes. I was slightly off and got a bit confused at the end, so I talked with TA about it and TA helped me out in the lab time. I even discussed with one of our classmates Ziyu wang about the problem. Afterall, That I understood the concept and came to my conclusion answer. 
