// We use logical operators to make decisions based on multiple conditions.

// In Javascript we have 3 types of logical operators.


// Logical And
// Logical Or
// Logical Not


// Logical And is indicated by 2 ampersands (&&).

// The basic rule of thumb is that the logical and returns true if both operands are TRUE.

console.log(true && true);

// So the result of evaluating this expression will be true and the console displays true.

// If either of this is falde the result will be false.

console.log(false && true); // we get false on the console.

// Let's imagine we want to build an application for approving loans.In a real world application.

// We want to see if the applicant has high income and good credit sore.then they will be eligible for loans.

// Let's declare a couple of variables that is high income and good credit score.

let highIncome = true;
let goodCreditScore = true;

// We are dealling with two conditions, we want to amke sure that has both this conditions right.

// We can declare another variable called eligibleForLoan and this is where we use the logical And operator.


let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);
 
// We should get true on the console.




// Let's take a look at the Logical Or.


// The Logical Or is indicated by two vertical lines,||.

// And this returns true if one od the operands is true, it doesn't matter which one ,whether the one on the left or on the right or both of them , as long as we ahve one that is true.

// We are going to replace the logical and with the logical Or in the above expression.


let highIncome1 = true;
let goodCreditScore1 = true;
let eligibleForLoan1 = highIncome1 || goodCreditScore1;

console.log(eligibleForLoan1);


// In this case  both oprands are true so the result of this expression will be true.

// If we change one of these to false we still get true because as long as one operand is true the result will be true,
// let highIncome1 = false;

// This is how we use the Logical Or operator.


      //Logical Not

// Let's look at the Logical Not which is indicated by an exclamation mark !.

// Let's imagine if the applicant is not elible for loan, you want to consider the application as refudsed.

// So we can declare another variable applicationRefused.

// Here we use the NOT operator , we apply it on eligibleForLoan.

// If eligibleForLoan is true the NOT operator will convert back to false.

// Whatever we give it ,it will give us the opposite ,in this case if eligibleForLoan id true,it will convert thwt to false.

// And applicationRefused will be false because if someone is eligible for loan we don't wantto refuse their application.


let highIncome2 = false;
let goodCreditScore2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;
console.log('Eligible', eligibleForLoan2);


let applicationRefused = !eligibleForLoan2
console.log('Apllication Refused' , applicationRefused);


// We are dealing with someone that has low income and bad credit score,obviously they are not eligible for loan.


