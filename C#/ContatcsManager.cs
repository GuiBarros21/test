using System;
using System.Collections.Generic;
using System.Linq;

public class ContactsManager
{
    private List<Contact> contacts = new List<Contact>();

    public void AddContact(string name, string phoneNumber, string email)
    {
        contacts.Add(new Contact(name, phoneNumber, email));
        Console.WriteLine("\nContact added successfully!\n");
    }

    public void ViewContacts()
    {
        if (contacts.Count == 0)
        {
            Console.WriteLine("\nNo contacts available.\n");
            return;
        }

        Console.WriteLine("\nContact List:");
        for (int i = 0; i < contacts.Count; i++)
        {
            Console.WriteLine($"{i + 1}. {contacts[i]}");
        }
    }

    public void UpdateContact(int index, string name, string phoneNumber, string email)
    {
        if (index < 0 || index >= contacts.Count)
        {
            Console.WriteLine("\nInvalid contact index!\n");
            return;
        }

        contacts[index].Name = name;
        contacts[index].PhoneNumber = phoneNumber;
        contacts[index].Email = email;
        Console.WriteLine("\nContact updated successfully!\n");
    }

    public void DeleteContact(int index)
    {
        if (index < 0 || index >= contacts.Count)
        {
            Console.WriteLine("\nInvalid contact index!\n");
            return;
        }

        contacts.RemoveAt(index);
        Console.WriteLine("\nContact deleted successfully!\n");
    }
}
