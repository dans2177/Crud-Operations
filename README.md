
---

# React Contact Management Application

This application is built using React.js and provides basic functionalities of a contact management system. This includes creating, reading, updating, and deleting (CRUD) operations on contact information. 

The contact information that this application manages includes:
- Name
- Email
- Mobile

## Key Features

**1. Add Contact Information**: Users can enter new contact information into the system by clicking on the 'Add' button, which opens up a form for inputting the contact's Name, Email, and Mobile number. 

**2. View Contact Information**: The application displays all the existing contacts in a tabular format. If there are no contacts to display, a "No data found" message is shown. 

**3. Edit Contact Information**: Each row of contact information in the table contains an 'Edit' button, which, when clicked, populates the form with the respective contact's information for it to be edited. 

**4. Delete Contact Information**: Each row of contact information in the table also contains a 'Delete' button. When clicked, it removes the respective contact's information from the display. 

## Application Architecture

This application has two main components: 

1. `App.js`: This is the main component of the application, which controls the application's state, handles user interactions, and renders either the form for adding/editing contact information or the table for displaying the contact information. 

2. `Formtable.js`: This is a reusable form component that is used for both adding new contacts and editing existing ones. 

## Error Handling

The application provides basic error handling features. If there is an error while creating or updating the data, the error message will be displayed on the screen. 

## Back-End Connection

The application interacts with a server that runs on `http://localhost:8080`. Axios is used to handle HTTP requests and responses. The paths for the CRUD operations are as follows:

- Create: '/create'
- Read: '/'
- Update: '/update/:id'
- Delete: '/delete/:id'

Where ':id' is the unique identifier of each contact.

Note: The server-side implementation should handle these routes accordingly.

## Demonstration Video

A detailed walkthrough of the application can be found in the video below:

[![React Contact Management Application](http://img.youtube.com/vi/oxyam94Gs2A/0.jpg)](http://www.youtube.com/watch?v=oxyam94Gs2A)

---
