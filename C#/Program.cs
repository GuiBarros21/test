using System;

class Program
{
    static void Main()
    {
        ContactsManager manager = new ContactsManager();
        bool running = true;

        while (running)
        {
            Console.WriteLine("\nContacts Management System");
            Console.WriteLine("1. Add Contact");
            Console.WriteLine("2. View Contacts");
            Console.WriteLine("3. Update Contact");
            Console.WriteLine("4. Delete Contact");
            Console.WriteLine("5. Exit");
            Console.Write("Choose an option: ");

            string choice = Console.ReadLine();
            Console.Clear();

            switch (choice)
            {
                case "1":
                    Console.Write("Enter Name: ");
                    string name = Console.ReadLine();
                    Console.Write("Enter Phone Number: ");
                    string phone = Console.ReadLine();
                    Console.Write("Enter Email: ");
                    string email = Console.ReadLine();
                    manager.AddContact(name, phone, email);
                    break;

                case "2":
                    manager.ViewContacts();
                    break;

                case "3":
                    manager.ViewContacts();
                    Console.Write("\nEnter contact number to update: ");
                    if (int.TryParse(Console.ReadLine(), out int updateIndex))
                    {
                        updateIndex--; // Adjust for zero-based index
                        Console.Write("Enter New Name: ");
                        string newName = Console.ReadLine();
                        Console.Write("Enter New Phone Number: ");
                        string newPhone = Console.ReadLine();
                        Console.Write("Enter New Email: ");
                        string newEmail = Console.ReadLine();
                        manager.UpdateContact(updateIndex, newName, newPhone, newEmail);
                    }
                    else
                    {
                        Console.WriteLine("\nInvalid input!\n");
                    }
                    break;

                case "4":
                    manager.ViewContacts();
                    Console.Write("\nEnter contact number to delete: ");
                    if (int.TryParse(Console.ReadLine(), out int deleteIndex))
                    {
                        manager.DeleteContact(deleteIndex - 1); // Adjust for zero-based index
                    }
                    else
                    {
                        Console.WriteLine("\nInvalid input!\n");
                    }
                    break;

                case "5":
                    running = false;
                    Console.WriteLine("\nExiting the program...\n");
                    break;

                default:
                    Console.WriteLine("\nInvalid option! Please try again.\n");
                    break;
            }
        }
    }
}
