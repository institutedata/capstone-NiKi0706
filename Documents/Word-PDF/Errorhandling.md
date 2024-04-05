# User Sign-In Error Handling

## Introduction

This document outlines the various types of errors that can occur during the user sign-in process and how to handle them.

## Common Errors

### Invalid Username

If the username entered does not exist in our database, return an error message indicating that the username is invalid.

```javascript
if (!user) {
  throw new Error('Invalid username');
}

### Invalid Password

If the password entered does not exist in our database, return an error message indicating that the password is incorrect.

``
if (password !== user.password) {
  throw new Error('Incorrect password');
}

## Conlusion
Proper error handling is crucial for a smooth and secure user sign-in process. 
By anticipating the most common errors and providing clear, informative error messages, we can improve the user experience and maintain the security of our system.

# Post Error Handling

## Introduction

This document outlines the various types of errors that can occur during the post creation and retrieval process and how to handle them.

## Common Errors

### Post Not Found

If the post ID provided does not exist in our database, return an error message indicating that the post was not found.

``
if (!post) {
  throw new Error('Post not found');
}

Make sure to add the userId when creating the post otherwise it will not create a post and it not reflect in the database.