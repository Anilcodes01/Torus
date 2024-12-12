
# Dynamic and Analytics Dashboard

## Objective:

Build a Dynamic Dashboard Application using React.js, Redux, TypeScript, and API integration with Redux Thunk. The application should consist of two main sections: **User Management Dashboard** and **Analytics Dashboard**.

----------

## Tech Stack:

-   **Frontend**: React.js, TypeScript
-   **State Management**: Redux, Redux Thunk
-   **API Handling**: Mock API with Redux Thunk for data fetching
-   **Charting**: Chart.js, Recharts, or any other charting library
-   **Responsive Design**: Fully responsive and mobile-friendly layout

----------

## Task Requirements:

### 1. **User Management Dashboard**

#### Features:

-   **Login Page**:
    
    -   Implement a mock API to authenticate users.
-   **Dashboard**:
    
    -   Fetch and display a list of users in a table format.
    -   Each user should have action buttons: _View Details_ and _Delete_.
-   **Search and Filter**:
    
    -   Implement search and filter functionality for users by their name or email.
-   **Pagination**:
    
    -   Display the list of users with pagination (show 5 users per page).

----------

### 2. **Analytics Dashboard**

#### Features:

-   **Overview Cards**:
    
    -   Display key summary metrics such as:
        -   **Total Users**: Count of all fetched users.
        -   **Active Users**: A mock calculation based on a field like `status`.
        -   **Deleted Users**: Track the count of deleted users during the session.
-   **Charts Section**:
    
    -   Display the following visualizations:
        -   **User Registration Trend**: A line chart showing user registrations over the past 6 months (mock data).
        -   **Active vs Inactive Users**: A pie chart comparing active and inactive users.
        -   **Users by Region**: A bar chart or map displaying user distribution by regions (mock region data).
-   **Filters for Analytics**:
    
    -   Implement filters for analytics based on:
        -   **Date Range**.
        -   **Region**.

----------

### 3. **Responsive Design**

Ensure that the analytics dashboard is fully responsive and mobile-friendly. The layout should adapt to various screen sizes and orientations.



## Installation

### Prerequisites:

-   Node.js (v14 or later)
-   npm or yarn

### Steps:

1.  **Clone the repository**:
    
    `git clone <repository-url>
    cd <project-folder>` 
    
2.  **Install dependencies**:
    
   
    
    `npm install` 
    
    or
   
    
    `yarn install` 
    
3.  **Run the application**:
    
   
    
    `npm start` 
    
    or
    
 
    
    `yarn start` 
    
    The app will be available at `http://localhost:3000`.
    

----------

## Conclusion

This Dynamic and Analytics Dashboard provides a user-friendly and efficient interface for managing users and displaying analytics data. The app is built with React.js, Redux, TypeScript, and mock API integration, making it scalable and easily maintainable.`enter code here`