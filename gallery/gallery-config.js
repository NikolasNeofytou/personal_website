// Gallery Configuration
// Copy this structure to update the gallery data in pages/projects.html

const galleryConfig = {
  'web-projects': [
    {
      name: 'Portfolio Website',
      image: '../gallery/web-projects/portfolio.jpg',
      description: 'A responsive personal portfolio website built with HTML, CSS, and JavaScript.',
      link: 'https://github.com/yourusername/portfolio',
      video: '' // Optional: add video URL if available
    },
    {
      name: 'E-commerce Site',
      image: '../gallery/web-projects/ecommerce.jpg',
      description: 'A full-stack e-commerce application with payment integration.',
      link: 'https://github.com/yourusername/ecommerce'
    },
    // Add more web projects here...
  ],
  
  'mobile-apps': [
    {
      name: 'Task Manager App',
      image: '../gallery/mobile-apps/taskmanager.jpg',
      description: 'A React Native mobile app for task management and productivity.',
      link: 'https://github.com/yourusername/taskmanager'
    },
    // Add more mobile app projects here...
  ],
  
  'data-science': [
    {
      name: 'Weather Prediction Model',
      image: '../gallery/data-science/weather.jpg',
      description: 'Machine learning model for weather prediction using Python and TensorFlow.',
      link: 'https://github.com/yourusername/weather-prediction'
    },
    // Add more data science projects here...
  ],
  
  'other': [
    {
      name: 'Arduino IoT Project',
      image: '../gallery/other/arduino.jpg',
      description: 'IoT project using Arduino for home automation.',
      link: 'https://github.com/yourusername/arduino-iot'
    },
    // Add more miscellaneous projects here...
  ]
};

/*
HOW TO ADD A NEW PROJECT:

1. Add your project image to the appropriate gallery folder
2. Copy the object structure above
3. Update the values:
   - name: Your project title
   - image: Path to your image file
   - description: Brief description of your project
   - link: GitHub repository or demo link
   - video: (optional) Link to demo video

4. Paste the new object into the appropriate array in pages/projects.html

EXAMPLE:
{
  name: 'My New Project',
  image: '../gallery/web-projects/my-new-project.jpg',
  description: 'Description of what this project does and technologies used.',
  link: 'https://github.com/yourusername/my-new-project',
  video: 'https://example.com/demo-video.mp4'
}
*/
