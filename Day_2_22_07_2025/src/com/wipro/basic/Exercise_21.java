package com.wipro.basic;

public class Exercise_21 {

	public static void main(String[] args) 
	{
		String s="Chaitanya";
        int vowels=0;
        int consonants=0;
        
        s=s.toLowerCase();
        
        for(int i=0;i<s.length();i++)
        {
            char ch=s.charAt(i);
            if(ch >= 'a' && ch <= 'z')
            {
                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') 
                {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }
        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
    }

	}


