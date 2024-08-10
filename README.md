# E-Commerce Platform for Men's Clothing

Welcome to the E-Commerce Platform for Men's Clothing! This project is built using React.js and provides a seamless online shopping experience for men's clothing. Below you'll find an overview of the project, its features, and instructions on how to get started.

## Features

- **Home Page**: Displays a grid of men's clothing products.
- **Product Details**: Clicking on a product takes you to its detail page where:

  - You can select the size from a dropdown menu.
  - Add the product to your cart using the "Add to Cart" button.
  - Notifications are displayed using the `notistack` package:
    - Success message if the product is added to the cart.
    - Error message if the size is not selected.

- **Cart Page**:
  - Displays all products added to the cart.
  - Provides options to increase or decrease the quantity for each product.
  - Updates the total price based on quantity changes.
  - Shows the total order value.
  - Includes a "Checkout" button (currently disabled as integration with Stripe is pending).

## Future Enhancements

- **Stripe Payment Integration**: The checkout button will be enabled and linked to Stripe’s payment API for processing transactions.

Thank you for using our E-Commerce Platform for Men's Clothing! We hope you enjoy shopping for your favorite clothes.

### 🚀 [Launch Live Project]()
