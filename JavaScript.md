# Recursion
- The solution to one big problem is dependent on the solution of each of the sub problem. 
- usually presents itself as a function that calls itself over and over until it reaches a stopping condition
- Two components:
    - base case: the stopping condition
    - recursive call to that same function, usually different arguments


## Recursion Example
Lets say that there are russian nesting dolls where one of them has chocolate inside

```
{
function processDoll(doll){
    //1. Base Case
    if(found the peice of chocolate)
        return "yum"
    //2. recursive call to itself
    else
        processDoll(the smaller doll)
}

}
```

## Variable Scope
- Scope
    - var: Function scoped. These are accessable within the function they are declared in. 
    - let/const: Block scoped. These are accessable within the block they are declared in. 
- Reassignment
    - var: Can be reassigned. 
    - let: can be reassigned. 
    - const: cannot be reassigned after initialization.
- Best practices
    - use const for variables that won't be reassigned. 
    - use let for variables that may be reassigned. 
    - avoid using var unless you need to support older browsers or require function scoped variables. 
