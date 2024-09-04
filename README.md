# Kobostore

## Overview
Kobostore is an e-commerce platform built with Next.js 13, leveraging the new App Router. It features a modern, responsive design for browsing and purchasing products. The project uses TypeScript for type safety and Tailwind CSS for styling.

## Setup and Local Development

1. Clone the repository:
git clone [https://github.com/Rinwaoluwa/kobostore.git](https://github.com/Rinwaoluwa/kobostore.git)cd kobostore


2. Install dependencies:
npm install


4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Design Decisions, Optimizations, and Trade-offs

1. **Next.js 13 App Router**: The project uses the new App Router for improved performance and easier implementation of nested layouts.

2. **Sanity CMS**: Content management is handled through Sanity, allowing for easy content updates and scalability.

3. **TypeScript**: Used throughout the project for improved type safety and developer experience.

4. **Tailwind CSS**: Chosen for rapid UI development and easy customization.

5. **Server Components**: Utilized where possible to reduce client-side JavaScript and improve initial page load times.

6. **Dynamic Imports**: Used for optimizing loading of components like the shopping cart.

7. **Responsive Design**: The UI is designed to be responsive across various device sizes.

8. **Trade-off**: The project uses client-side fetching for some data, which may impact initial load performance but provides a more dynamic user experience.

## SEO Handling

1. **Metadata API**: Next.js 13's metadata API is used to set page-specific metadata, including titles and descriptions.

2. **Semantic HTML**: Semantic HTML elements are used throughout the project to improve accessibility and SEO.

3. **Server-side Rendering**: Many pages use server-side rendering, ensuring that content is available for search engine crawlers.

5. **Sitemap**: A sitemap is generated to help search engines discover and index all pages of the site.

6. **Structured Data**: JSON-LD structured data is implemented for product pages to enhance rich snippets in search results.