# 🔥 Smokin' Good BBQ Blog

A dynamic BBQ blog that automatically loads and displays blog posts from HTML files in the `posts` folder.

## 📁 Project Structure

```
bbq-blog/
├── index.html              # Main blog page
├── posts/                  # Blog posts folder
│   ├── brisket-basics.html
│   ├── perfect-ribs.html
│   ├── smoker-setup.html
│   ├── bbq-sauces.html
│   └── pulled-pork.html
└── README.md
```

## ✨ Features

- **Dynamic Post Loading**: Automatically discovers and loads HTML files from the `posts` folder
- **Responsive Design**: Beautiful, mobile-friendly layout with BBQ-themed styling
- **Modal Post Viewer**: Click any post to read the full content in a popup modal
- **Automatic Post Parsing**: Extracts title, excerpt, date, and author from post HTML
- **Modern Animations**: Smooth hover effects and transitions throughout
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required

## 🚀 Getting Started

1. **Clone/Download** the project files
2. **Add your posts** as HTML files in the `posts/` folder
3. **Open** `index.html` in a web browser
4. **Enjoy** your dynamic BBQ blog!

## 📝 Adding New Posts

To add a new blog post:

1. Create a new HTML file in the `posts/` folder (e.g., `my-new-post.html`)
2. Follow this structure for best results:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Post Title</title>
  </head>
  <body>
    <article>
      <header>
        <h1 class="post-title">Your Amazing Post Title</h1>
        <div class="post-meta">
          <span class="author">Your Name</span>
          <span class="date">2024-03-20</span>
        </div>
      </header>

      <div class="excerpt">
        A brief description of your post that will appear on the main page...
      </div>

      <main>
        <h2>Your Content Here</h2>
        <p>Write your amazing BBQ content here!</p>
        <!-- Add more content as needed -->
      </main>
    </article>
  </body>
</html>
```

3. **Refresh** your blog homepage - the new post will automatically appear!

## 🎨 Customization

### Styling

- Edit the CSS in `index.html` to change colors, fonts, and layout
- The design uses CSS custom properties (variables) for easy theming
- BBQ-themed color palette with warm oranges and deep browns

### Post Layout

- Posts automatically extract titles from `<h1 class="post-title">` elements
- Excerpts are pulled from `<div class="excerpt">` sections
- Author and date info comes from `.post-meta` spans
- Full content is displayed in the modal from the `<main>` section

## 🔧 Technical Details

### How It Works

1. **File Discovery**: JavaScript scans a predefined list of post filenames
2. **Dynamic Loading**: Each post HTML is fetched asynchronously
3. **Content Parsing**: Post metadata is extracted using DOM manipulation
4. **Card Generation**: Post cards are dynamically created and inserted into the grid
5. **Modal Display**: Full post content is shown in an overlay when clicked

### Browser Compatibility

- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Uses ES6+ features like `fetch()` and template literals
- Responsive design works on desktop, tablet, and mobile devices

### Performance Notes

- Posts are loaded asynchronously for better performance
- Images and content are only loaded when needed
- Lightweight vanilla JavaScript keeps the site fast

## 📋 Post Management Tips

### Best Practices

- Use descriptive filenames (e.g., `texas-style-brisket.html` instead of `post1.html`)
- Keep excerpts under 150 characters for best display
- Use high-quality images and optimize them for web
- Include relevant BBQ keywords in your titles and content

### Content Ideas

- Equipment reviews and recommendations
- Step-by-step cooking guides
- Regional BBQ style comparisons
- Seasonal grilling tips
- Sauce and rub recipes
- Competition BBQ strategies

## 🛠️ Troubleshooting

### Common Issues

**Posts not appearing?**

- Check that HTML files are in the `posts/` folder
- Ensure filenames match the list in the JavaScript code
- Verify HTML structure follows the recommended format

**Styling looks wrong?**

- Clear your browser cache
- Check for any CSS syntax errors
- Ensure all required CSS classes are present

**Modal not opening?**

- Check browser console for JavaScript errors
- Verify post HTML is properly formatted
- Ensure all posts have the required elements

## 🤝 Contributing

Feel free to:

- Add new BBQ posts to the collection
- Improve the styling and design
- Enhance the JavaScript functionality
- Fix any bugs you encounter
- Share your BBQ knowledge with the community!

## 📄 License

This project is open source. Feel free to use, modify, and distribute as needed.

---

**Happy Grilling! 🔥🥩**

_May your brisket be tender and your smoke rings be perfect!_
