Functionality Overview:
The app calculates the total bill based on the number of units used, applying different rates for each range of usage (e.g., 0-100 units, 101-200 units, etc.).
Validation:
Ensures the user inputs a valid number for the units (i.e., the input should be a non-negative number).
Rate Calculation:
Each range of units is billed at a different rate, with the function calculating the total based on these thresholds:
700+ units are charged at the highest rate.
600-700 units are charged at a slightly lower rate, and so on.
User Feedback:
If the input is invalid (empty, non-numeric, or negative), the user is prompted with an error message.

Output:
The total bill amount is displayed dynamically on the page, updating immediately as the user inputs data.

