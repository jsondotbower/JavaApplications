package com.company;

import java.util.Scanner;

public class Main {

    // Function to calculate Gross Profit
    public static double grossProfitCalculator(double cost, double retail) {
        double profit = retail - cost;
        return profit;
    }

    public static void main(String[] args) {
        // Variables
        double cost = 0, retailPrice = 0;
        String error = "Please enter a valid product price and product cost.";
        Scanner keyboard = new Scanner(System.in);

        try {
            // Get user input for retailPrice
            System.out.print("Enter your product price: ");
            retailPrice = Double.parseDouble(keyboard.next());

            // Get user input for cost
            System.out.print("Enter your product cost: ");
            cost = Double.parseDouble(keyboard.next());
        } catch (NumberFormatException bad) {
            System.out.println(error);
            System.exit(1);
        }

        // Call function and display result to user
        double profit = (grossProfitCalculator(cost, retailPrice));
        System.out.printf("Gross Profit: $" + "%.2f", profit);
    }
}
