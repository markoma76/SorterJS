Sorter.js is my personal framework, but of course if anyone needs it, it's completely free and open source. 
It serves to add two methods to the Array class in the prototype that can sort an array of arrays in descending and ascending order.
Of course, we have to do this with the built-in methods of the Array class, but I found it easier to do this.
The names of those methods are:
   Array.prototypes.NuSortAs()-for ASCENDING sort (NuSortAs -Numbers Sort Ascending) and,
Array.prototypes.NuSortDe()-for Descending Sort(NuSortDe - Number sort in descending order)
Example:
let arr = [23,45,67,1,666,5,48];

arr.NuSortAs() => [1, 5, 23, 45, 48, 67, 666]
arr.NuSortDe() => [666, 67, 48, 45, 23, 5, 1]

These methods work only with Array whose data is numbers, all other types will lead to an error !!!!

let arr2 = [89,65,false,'torpedo',,87,41,6]
arr2.NuSortAs() => Error:this Array does not contain only numbers

Well, I hope I helped someone, Greetings to all
