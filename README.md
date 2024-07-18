# Frontend-API-assessment
This project is a React application that fetches and displays posts from a public API. Users can view existing posts, add new posts, and the application handles errors gracefully.
## Technologies Used
- React
- Redux Toolkit
- Axios
- TypeScript
- CSS (for styling)

## Getting Started

### Installation

Clone the repository and install dependencies:
git clone <repository_url>
cd frontend-api-assessment
npm install

### Running the Application

To run the application locally:
npm start

## Usage

Once the application is running, navigate to http://localhost:3000 in your web browser to view the posts and add new posts.

## Project Structure
src
--app
   -hooks.ts
   -store.ts
--components
    -AddPostForm.tsx
    -PostsList.tsx
--features
   --posts
      -postsSlice.ts
App.css
App.tsx
index.tsx
package.json
tsconfig.json


## Explanation of Approach

- **Functionality:** Implemented fetching posts, adding new posts, and handling errors from the API. Ensured all features are complete and correct.
- **Code Quality:** Organized code into reusable components and Redux slices. Followed TypeScript best practices for type safety.
- **State Management:** Used Redux Toolkit for efficient state management, including async API calls.
- **Error Handling:** Properly handled API errors and displayed user-friendly error messages.
- **Assumptions:** Assumed the API endpoints (`https://jsonplaceholder.typicode.com/posts`) would always be available and used for demonstration purposes.


