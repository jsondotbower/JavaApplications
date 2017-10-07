package com.company;

import java.util.Scanner;

public class Main {
    // Function to determine String value is a palindrome
    public static boolean isPalindrome(String value) {
        int min = 0;
        int max = value.length() - 1;

        while (true) {
            if (min > max) {
                return true;
            }

            // Check for letters from left to right
            while (!Character.isLetter(value.charAt(min))) {
                min++;
            }

            // Check for letters from right to left
            while (!Character.isLetter(value.charAt(max))) {
                max--;
            }

            char a = Character.toLowerCase(value.charAt(min));
            char b = Character.toLowerCase(value.charAt(max));

            if (a != b) {
                // Returns false if letters are not equal
                return false;
            }

            min++;
            max--;
        }
    }

    public static void main(String[] args) {
        // Variables
        Scanner keyboard = new Scanner(System.in);
        String line;

        // Gather user input
        System.out.print("Enter a string: ");
        line = keyboard.nextLine();

        // Test if input entered is a palindrome
        if (isPalindrome(line)) {
            System.out.println(line + " is a palindrome.");
        } else {
            System.out.println(line + " is not a palindrome.");
        }
    }
}