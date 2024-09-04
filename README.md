# Kobostore

## Overview
Kobostore is an e-commerce platform built with Next.js 13, leveraging the new App Router. It features a modern, responsive design for browsing and purchasing products. The project uses TypeScript for type safety and Tailwind CSS for styling.

## Setup and Local Development

1. Clone the repository:
git clone [Kobo Store](https://github.com/Rinwaoluwa/kobostore.git)
cd kobostore


2. Install dependencies:
npm install


4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Design Decisions, Optimizations, and Trade-offs

**Meta-data Handling and SEO Considerations**

Initially, the product page was a server-side component, which allowed for the integration of meta-data crucial for SEO. However, to leverage Redux global state management, a significant architectural decision was made to refactor this page into a client-side component. This meant removing the server-rendered meta-data and creating a distinct client-side component specifically designed to handle state interactions efficiently. To mitigate the potential SEO drawbacks, other sections of the application were carefully optimized for search engines by embedding necessary meta-data within static or server-rendered components. This trade-off allows for dynamic client-side behavior without compromising the site's overall SEO integrity.

**Client-Side Component Isolation**
The shift to a client-side component was further refined by isolating it within a distinct module, utilizing the use client directive. This separation was necessary due to the constraints imposed by the root layout's server-side nature. By creating a dedicated client-side component, we ensured that the application could manage state globally without unnecessary re-renders or performance hits, maintaining a clean and efficient codebase.


