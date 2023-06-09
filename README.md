# Atelier Product Detail Page

This is the front-end product detail page of a shopping application. It is designed to provide a user-friendly interface for displaying product details and related information.

## Technologies Used

- Node.js (version 12.22.9)
- npm (version 8.5.1)
- React (version 17.0.2)
- Express (version 4.17.1)
- Axios (version 0.21.1)
- Underscore (version 1.13.1)
- date-fns (version 2.22.1)
- dotenv (version 10.0.0)
- cors (version 2.8.5)
- Font Awesome (version 5)
- Babel (version 7)
- Webpack (version 5)
- Jest (version 29.5.0)
- styled-components (version 1.12.0)

## Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Development


To run the project in development mode, follow these steps:

1. Start the client development server:

   ```bash
   npm run client-dev
   ```

   This will launch the webpack-dev-server and automatically rebuild the client-side code whenever changes are made.

2. Start the server development server:

   ```bash
   npm run server-dev
   ```

   This will start the Express server and automatically restart it when changes are made to the server code.

3. Access the application in your browser:

   Open your browser and visit `http://localhost:3000` to see the Product Detail Page.

## Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will create an optimized production build of the project in the `dist` directory.

## Testing

To run the tests, execute the following command:

```bash
npm test
```

This will run the test suite using Jest.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize this README to suit your specific project requirements. Let me know if you need any further assistance!

# More details...

Let's take a closer look at the product detail page's 4 key components:

## Overview

The Overview component is the gateway to discovering products in a captivating manner. It presents users with high-quality images, detailed descriptions, and essential information about each product. The sleek and user-friendly design showcases the product's key features, enabling customers to quickly grasp its value proposition. With Overview, users can explore a wide range of products effortlessly.

## Related Products

The primary function of this component is to navigate through main products. Every time you click on a product card the page will display it as a focused item.
Each product card has a category, an item name and a conditionally rendered price depending on wether it’s on sale or not. It also features a Star-bar rating component that visually shows the rating of the product.
You can click on the product’s star button to compare it’s features against the main product. This list is a carousel that flows on horizontally and the buttons also render conditionally on wether there are more items to display.

## Ratings and Reviews

Ratings and Reviews play a vital role in the decision-making process for many customers. This component provides valuable insights from previous purchasers, allowing users to gauge the quality, durability, and overall satisfaction associated with a product. Users can browse through authentic and verified customer reviews, providing them with a well-rounded perspective on the item's pros, cons, and performance. The Ratings and Reviews component ensures transparency and builds trust among potential buyers.

## Questions and Answers

The Questions and Answers component encourages engagement and fosters a community around products. Users can ask questions about specific items, and knowledgeable community members or brand representatives can provide prompt and accurate responses. This interactive feature helps address concerns, clarify doubts, and build a sense of trust and camaraderie among users. With Questions and Answers, customers can make well-informed decisions and feel supported throughout their purchasing journey.

Product Atelier combines these four essential components to create an immersive and comprehensive shopping experience. It empowers users to explore products, discover alternatives, gather insights from real customers, and engage with a vibrant community. Whether users are seeking inspiration or making a purchase, Product Atelier is the ultimate destination for a seamless and rewarding shopping experience.
