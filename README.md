
# DevLinks - Developer Link Sharing App

DevLinks is a platform for developers to create and share their personal profiles with customizable links to various platforms. This app provides an easy way to save, organize, and share links, along with a preview feature to ensure that profiles look professional and optimized across devices.

## Table of Contents

1. [Features](#features)
2. [Preview](#preview)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Video Demo](#video-demo)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)

## Features

- **Link Management:** Add, edit, and delete links to various platforms.
- **Profile Customization:** Update profile details like profile picture, name, and email.
- **Drag-and-Drop Reordering:** Rearrange links easily with a simple drag-and-drop interface.
- **Preview Mode:** View your DevLinks profile as it would appear to other users.
- **Validations:** Receive validation prompts for incorrect or missing URL formats.
- **Responsive Design:** Interface adapts for optimal viewing on both desktop and mobile.
- **Public Profile Sharing:** Share your profile via a public link, hiding logged-in features for external viewers.

### Bonus Features

- **Database Integration:** Save user data to a database for persistent profiles.
- **User Authentication:** Register, log in, and manage user accounts securely.

## Preview

Here's a quick look at DevLinks:

![devlinks-image](https://github.com/user-attachments/assets/ee202f29-644e-4859-82d6-373d9ee84535)


## Installation

To get started with DevLinks locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/4002-Nonye/devlinks.git
    cd devlinks
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    - Create a `.env` file at the root of the project with the required environment variables:
    
      ```plaintext
      REACT_APP_SUPABASE_URL=your_supabase_url
      REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
      ```

4. **Start the app:**

    ```bash
    npm start
    ```

5. **Build the app (optional):**

    For a production build:

    ```bash
    npm run build
    ```

## Usage

1. Sign up or log in to start adding links to your profile.
2. Click on "Add Link" to insert a new link.
3. Use the drag-and-drop feature to rearrange your links.
4. Customize your profile details in the "Profile" section.
5. Preview your profile to see how others will view it.
6. Copy and share your public profile link with others.


## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Supabase (for user authentication and data storage)
- **Others:** React Hook Form, React Icons, Context API, React Query

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Create a Pull Request.


