# College Management System Documentation

This document outlines the updated College Management System project for Chhotubhai Gopalbhai Patel Institute of Technology (CKPCET). The project includes HTML, CSS, JavaScript, and PHP files to create a functional website with enhanced features for user interaction, form validation, and backend processing.

## Project Structure

The College Management System consists of the following main files, with updates to improve functionality and user experience:

### 1. `svnit_home.html`
The homepage remains unchanged, featuring:
- A navigation bar linking to Home, About Us, Time Table, Courses, and Contact Us.
- A hero section with a welcome message and apply button.
- News and departments sections, and a footer with copyright information.

### 2. `about_us.html`
The About Us page is unchanged, detailing:
- CKPCET’s overview, vision, mission, values, and reasons to choose the institute.

### 3. `courses.html`
The Courses page remains unchanged, listing:
- Programs with details on fees and duration in a table format.

### 4. `it_tt.html`
The Time Table page is unchanged, displaying:
- The IT department’s lecture schedule with course codes and locations.

### 5. `contact_us.html`
The Contact Us page remains unchanged, providing:
- Contact details (address, email, phone) and a message for inquiries.

### 6. `login_pro.html`
The Login page has been updated to include:
- **Form Validation**: JavaScript checks for valid email format and non-empty password.
- **Improved Styling**: Enhanced form layout with error messages and responsive design.
- **Form Submission**: Submits to `project.php` for backend authentication.
- A link to the signup page for new users.

### 7. `signup_pro.html`
The Signup page has been updated with:
- **Form Validation**: JavaScript validates email format, password strength (minimum 8 characters, including letters and numbers), and matching passwords.
- **Mobile Number Validation**: Ensures a valid 10-digit phone number.
- **Improved Styling**: Consistent with the login page, with error feedback.
- **Form Submission**: Submits to `project.php` for user registration.
- A link to the login page for existing users.

### 8. `project.php`
The PHP backend has been significantly enhanced:
- **User Registration**: Stores user data (email, password, mobile) in a simulated database (array, replaceable with a real database like MySQL).
- **User Authentication**: Validates login credentials against stored data.
- **Security**: Basic password hashing (using `password_hash`) for secure storage.
- **Output**: Returns success or error messages for login/signup attempts.

### 9. `svnit_css.css`
The CSS file has been updated to support new features:
- **Form Styling**: Added styles for input fields, error messages, and buttons.
- **Responsive Design**: Improved mobile responsiveness for forms and tables using media queries.
- **Visual Feedback**: Highlights invalid inputs with red borders and displays error messages.
- Retained existing styles for consistency across the site.

## Key Features
- **Enhanced User Authentication**:
  - Client-side validation ensures proper input before submission.
  - Server-side PHP handles secure registration and login.
- **Responsive Design**:
  - Forms and tables adapt to various screen sizes.
  - Improved spacing and alignment for mobile devices.
- **Interactive Forms**:
  - Real-time validation feedback for email, password, and mobile number.
  - Clear error messages guide users to correct inputs.
- **Consistent Navigation**: Unified navigation bar across all pages.
- **Scalable Backend**: PHP logic is ready for integration with a real database.

## Technologies Used
- **HTML5**: Structures the content of all pages.
- **CSS3**: Styles the site with Roboto font, custom colors, and responsive layouts.
- **JavaScript**: Handles client-side form validation.
- **PHP**: Processes form submissions and manages user data.
- **External Resources**: Uses a background image and Roboto font (via Google Fonts).

## Updated Features
- **Form Validation**:
  - Email: Must match a valid email format (e.g., `user@example.com`).
  - Password: Minimum 8 characters, with at least one letter and one number.
  - Signup: Passwords must match, and mobile numbers must be 10 digits.
- **Backend Processing**:
  - Simulated user database in PHP for registration and login.
  - Passwords are hashed for security.
- **UI Improvements**:
  - Forms have clear error messages and visual cues (e.g., red borders for invalid inputs).
  - Buttons and inputs scale properly on mobile devices.

## Setup Instructions
1. **Clone the Project**:
   - Download or clone the project files to a local or web server.
2. **Set Up Web Server**:
   - Use a server like Apache with PHP support (e.g., XAMPP, WAMP).
   - Place files in the server’s root directory (e.g., `htdocs`).
3. **Configure PHP**:
   - Ensure PHP is enabled to handle `project.php`.
   - For a real database, configure MySQL and update `project.php` with database connection details.
4. **Update CSS**:
   - Ensure the background image URL in `svnit_css.css` is accessible or replace it with a local image.
   - Include Google Fonts (`Roboto`) in the HTML or CSS if needed.
5. **Access the Site**:
   - Open `svnit_home.html` in a browser (e.g., `http://localhost/svnit_home.html`).
   - Test login and signup functionality via their respective pages.
6. **Testing**:
   - Try signing up with a valid email, strong password, and 10-digit mobile number.
   - Log in with the registered credentials to verify authentication.

## Future Enhancements
- **Database Integration**: Replace the array-based user storage with a MySQL database.
- **Session Management**: Implement PHP sessions for logged-in users.
- **Dynamic Timetables**: Allow timetable generation based on department or user role.
- **Accessibility**: Add ARIA labels and improve keyboard navigation.
- **Security**: Add CSRF protection and input sanitization for forms.

## Notes
- The project is now consistently referred to as the "College Management System" across all documentation.
- The timetable (`it_tt.html`) is specific to the IT department; additional timetables may be needed.
- The login and signup pages rely on `project.php` for processing; ensure PHP is configured.
- The CSS file assumes an external background image; verify its accessibility or use a local image.

This College Management System provides a robust foundation for CKPCET’s online presence, with enhanced user authentication and responsive design, ready for further development.
