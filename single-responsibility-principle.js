/*
The Single Responsibility Principle (SRP) is one of the SOLID principles of object-oriented design, and it states that 
a class should have only one reason to change. In other words, a class should have only one primary responsibility. 
Let's analyze how the CalorieTracker and Logger classes follow the Single Responsibility Principle:

1. CalorieTracker Class:
The CalorieTracker class is responsible for tracking calories and enforcing the maximum calorie limit. It has the 
following responsibilities:

    Tracking Calories: 
        The class has a method trackCalories(calorieCount) that increments the currentCalories by the given calorieCount.
        It also logs the added calories and the current calorie count.

    Enforcing Maximum Calorie Limit: 
        The class checks if the sum of currentCalories exceeds the maxCalories. If it does, 
        it logs a message using the Logger class.
        The CalorieTracker class follows the SRP because it has a clear and single responsibility: tracking and managing calories 
        within the defined limits. It doesn't handle logging messages directly; instead, it delegates the logging responsibility to the Logger class.

2. Logger Class:

        The Logger class is responsible for logging messages. It has a single static method logMessage(message) that logs 
        the provided message to the console.
    
        The Logger class follows the SRP because it has a single responsibility: handling the logging of messages. It doesn't 
        have any other functionality or responsibilities, and it doesn't contain logic related to calorie tracking.
*/


class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        console.log(`${calorieCount} calories added`);
        console.log(`Current calorie: ${this.currentCalories}`);
        if (this.currentCalories > this.maxCalories) {
            Logger.logMessage("Max calories exceeded");
        }
    }
}

class Logger {
    static logMessage(message) {
        console.log(message);
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(3000)