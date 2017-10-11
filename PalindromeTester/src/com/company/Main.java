package com.company;

import java.util.Scanner;

public class Main {
    // Function to determine String value is a palindrome
    public static boolean isPalindrome(String str) {
        StringBuilder sb = new StringBuilder(str);
        return str.equals(sb.reverse().toString());
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
