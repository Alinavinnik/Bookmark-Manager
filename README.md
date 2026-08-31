🔖 Bookmark Manager

A simple and convenient bookmark manager that lets you save, view, and delete useful links right in your browser.

📋 Description

Bookmark Manager is a single-page application that helps you organize your favorite websites in one place. Just enter a link name and URL — and the bookmark will appear in your saved list.

✨ Features
➕ Add a new bookmark (name + URL)
📄 View the list of all saved bookmarks
🗑️ Delete unwanted bookmarks
💾 Persist data between sessions (localStorage)
🎨 Clean and responsive UI
🛠️ Tech Stack
HTML5 / CSS3
JavaScript (Vanilla JS)
Vite — build tool and dev server
glob — automatically discovers HTML pages for a multi-page build
vite-plugin-html-inject — includes shared HTML components (header, footer, etc.)
vite-plugin-full-reload — automatically reloads the page on HTML changes
postcss-sort-media-queries — sorts media queries in CSS
Prettier — code formatting
📁 Project Structure
Bookmark-Manager/
├── src/
│   ├── css/          # Project styles
│   ├── icons/         # SVG icons and images
│   ├── js/            # App logic (rendering, event handlers, etc.)
│   ├── index.html      # Main page
│   └── main.js        # Entry point
├── vite.config.js      # Vite configuration
├── package.json
└── README.md
🚀 Getting Started
Clone the repository:
bash
   git clone https://github.com/Alinavinnik/Bookmark-Manager.git
   cd Bookmark-Manager
Install dependencies:
bash
   npm install
Run the project in development mode:
bash
   npm run dev
Build the production version:
bash
   npm run build
Preview the production build locally:
bash
   npm run preview
📝 Usage
Enter the link name in the Link name field.
Enter the website address in the Url address field.
Click the Add button — the bookmark will appear in the list.
👩‍💻 Author

Created by Alinavinnik, based on the goit-js-hw-12 template.

📄 License

This project is freely distributed for educational purposes.

Content
