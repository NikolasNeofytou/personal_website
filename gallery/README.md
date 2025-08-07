# Gallery Folder Structure

This folder contains all images and media files for your portfolio website, organized by category.

## Folder Organization

### `/web-projects/`
Place images for your web development projects here. Examples:
- `portfolio.jpg` - Screenshot of your portfolio website
- `ecommerce.jpg` - Screenshot of an e-commerce project
- `blog-app.jpg` - Screenshot of a blog application

### `/mobile-apps/`
Place images for your mobile application projects here. Examples:
- `taskmanager.jpg` - Screenshot of a task manager app
- `weather-app.jpg` - Screenshot of a weather application
- `social-app.jpg` - Screenshot of a social media app

### `/data-science/`
Place images for your data science and machine learning projects here. Examples:
- `weather.jpg` - Visualization from weather prediction model
- `sales-analysis.jpg` - Chart from sales data analysis
- `ml-model.jpg` - Diagram of machine learning model

### `/other/`
Place images for miscellaneous projects here. Examples:
- `arduino.jpg` - Photo of Arduino IoT project
- `desktop-app.jpg` - Screenshot of desktop application
- `game.jpg` - Screenshot of a game you developed

### `/profile/`
Place your profile photo here:
- `profile-photo.jpg` - Your professional headshot for the About page

## Image Guidelines

1. **File Formats**: Use `.jpg`, `.png`, or `.webp` formats
2. **Image Size**: Recommended dimensions are 300x200 pixels for project images
3. **File Naming**: Use descriptive, lowercase names with hyphens (e.g., `my-project.jpg`)
4. **Quality**: Use high-quality images that represent your work well

## How to Add New Projects

1. Add your project image to the appropriate category folder
2. Update the gallery data in `/pages/projects.html`
3. Add a new object to the relevant gallery array with:
   - `name`: Project title
   - `image`: Path to your image (e.g., `../gallery/web-projects/my-project.jpg`)
   - `description`: Brief project description
   - `link`: GitHub or demo link
   - `video`: (optional) Link to project video

## Example Project Entry

```javascript
{
  name: 'My Awesome Project',
  image: '../gallery/web-projects/awesome-project.jpg',
  description: 'A full-stack web application built with React and Node.js.',
  link: 'https://github.com/yourusername/awesome-project',
  video: 'https://example.com/demo-video.mp4' // optional
}
```

Happy coding! 🚀
