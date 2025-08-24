# PHM-LLM Template Setup Guide

This guide will help you quickly set up and customize the PHM-LLM template for your prognostic health management project.

## 📋 Prerequisites

- Python 3.6 or higher
- Modern web browser
- Basic knowledge of HTML/CSS (for advanced customization)
- Git (for version control)

## 🚀 Quick Start (5 Minutes)

### Step 1: Get the Template
```bash
# Option A: Use GitHub template (recommended)
# 1. Click "Use this template" on GitHub
# 2. Clone your new repository

# Option B: Clone directly
git clone https://github.com/YOUR-REPO/PHM-LLM-Template.git
cd PHM-LLM-Template
```

### Step 2: Configure Your Project
Edit the `config.json` file with your project details:

```json
{
  "project": {
    "name": "Your PHM Project Name",
    "short_name": "PHM-Project", 
    "type": "agent|benchmark|model|dataset",
    "description": "Brief description of your PHM work"
  },
  "authors": [
    {
      "name": "Your Name",
      "link": "https://your-website.com",
      "equal_contribution": true
    }
  ],
  "institution": {
    "name": "Your Institution",
    "conference": "Your Conference/Journal 2024"
  }
}
```

### Step 3: Apply Configuration
```bash
python setup.py --customize
```

### Step 4: Choose Project Variant (Optional)
```bash
# For PHM Agent projects
python setup.py --variant agent

# For PHM Benchmark projects
python setup.py --variant benchmark

# For PHM Model projects
python setup.py --variant model

# For PHM Dataset projects
python setup.py --variant dataset
```

### Step 5: Test Locally
Open `index.html` in your browser to preview your site.

## 🎯 Project-Specific Setup

### PHM Agent Projects
```bash
python setup.py --variant agent
```
**Includes:** API documentation, interactive demo, integration examples, case studies

**Content to customize:**
- Add API endpoint documentation
- Create interactive demo interface
- Include usage examples and integration guides
- Showcase real-world applications

### PHM Benchmark Projects
```bash
python setup.py --variant benchmark
```
**Includes:** Leaderboard tables, dataset information, evaluation protocols, submission guidelines

**Content to customize:**
- Update leaderboard with current results
- Add new datasets and evaluation metrics
- Create submission and evaluation protocols
- Include baseline implementations

### PHM Model Projects
```bash
python setup.py --variant model
```
**Includes:** Architecture diagrams, training procedures, ablation studies, performance comparisons

**Content to customize:**
- Add model architecture visualizations
- Include training and inference code
- Provide performance comparisons
- Add ablation study results

### PHM Dataset Projects
```bash
python setup.py --variant dataset
```
**Includes:** Dataset statistics, download instructions, usage examples, data visualization

**Content to customize:**
- Add dataset statistics and visualizations
- Provide download links and instructions
- Include usage examples and tutorials
- Show data quality and preprocessing steps

## 🖼️ Asset Management

### Required Images
Create and add these images to `static/images/`:

1. **Teaser Image/Video** (`banner_video.mp4` or `teaser_image.png`)
   - Showcases your PHM system in action
   - Recommended: 1920x1080, under 10MB for videos

2. **Results Visualizations**
   - `rul_prediction.png` - RUL prediction performance charts
   - `fault_classification.png` - Confusion matrices and metrics
   - `system_architecture.png` - System overview diagram
   - `health_dashboard.png` - Health monitoring interface

3. **Social Media Images**
   - `og_image.png` - Open Graph image (1200x630)
   - `twitter_banner.png` - Twitter card image (1200x600)

4. **Favicon**
   - Replace `favicon.ico` with your project icon

### PHM-Specific Assets Directory Structure
```
static/
├── images/
│   ├── phm/                    # PHM-specific images
│   │   ├── architecture/       # System diagrams
│   │   ├── results/           # Performance charts
│   │   ├── datasets/          # Dataset visualizations
│   │   └── demos/             # Demo screenshots
│   ├── og_image.png           # Social media preview
│   └── favicon.ico            # Site icon
├── videos/
│   ├── demo.mp4               # System demonstration
│   └── overview.mp4           # Project overview
└── pdfs/
    ├── paper.pdf              # Main paper
    └── supplementary.pdf      # Additional materials
```

## 🎨 Customization

### Theme Colors
Edit `config.json` to change the color scheme:
```json
{
  "theme": {
    "primary_color": "#2b6cb0",     # Main brand color
    "secondary_color": "#4a5568",   # Secondary elements
    "accent_color": "#38a169",      # Success/highlight color
    "background_color": "#f7fafc",  # Page background
    "text_color": "#2d3748"         # Main text color
  }
}
```

### Content Sections
Toggle sections on/off in `config.json`:
```json
{
  "features": {
    "show_problem_statement": true,
    "show_method_overview": true,
    "show_datasets": true,
    "show_performance_metrics": true,
    "show_api_docs": false,        # PHM Agent projects
    "show_demo": false,            # Interactive demos
    "show_leaderboard": false,     # Benchmark projects
    "show_case_studies": false     # Real-world applications
  }
}
```

### Dataset Information
Add your datasets in `config.json`:
```json
{
  "datasets": [
    {
      "name": "NASA C-MAPSS",
      "description": "Turbofan engine degradation simulation",
      "size": "20,631 samples",
      "task": "RUL Prediction",
      "metrics": ["RMSE", "Score", "MAE"]
    }
  ]
}
```

### Performance Results
Update benchmark results in `config.json`:
```json
{
  "performance": {
    "rul_prediction": {
      "methods": [
        {
          "name": "Your Method",
          "rmse": 12.4,
          "score": 245.8,
          "mae": 9.7,
          "highlight": true
        }
      ]
    }
  }
}
```

## 🔧 Advanced Customization

### Custom Styling
Edit `static/css/phm-theme.css` for advanced styling:
```css
:root {
  --phm-primary: #your-color;
  --phm-accent: #your-accent;
}

.your-custom-class {
  /* Your custom styles */
}
```

### Interactive Features
Modify `static/js/phm-functionality.js` to add custom interactions:
```javascript
// Add custom demo functionality
function yourCustomDemo() {
  // Implementation
}
```

### HTML Structure
For major changes, edit `index.html` directly:
- Each section is clearly marked with HTML comments
- Use Bulma CSS classes for consistent styling
- Add PHM-specific classes (`.phm-metric`, `.health-indicator`, etc.)

## 🚀 Deployment

### GitHub Pages
1. Push your customized template to GitHub
2. Go to Settings > Pages in your repository
3. Select source branch (main/master)
4. Your site will be available at `https://username.github.io/repository-name`

### Other Static Hosts
The template works with any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload files to S3 bucket with static hosting

## 🧪 Testing Checklist

Before going live, test these elements:

- [ ] All images load correctly
- [ ] Videos play without issues
- [ ] All links work (papers, code, demos)
- [ ] Social media previews display correctly
- [ ] Mobile responsiveness works
- [ ] Interactive features function properly
- [ ] Performance metrics display correctly
- [ ] Contact information is accurate

## 🛠️ Development Commands

```bash
# Full setup with all features
python setup.py --all

# Just apply current config
python setup.py --customize

# Create specific variant
python setup.py --variant [agent|benchmark|model|dataset]

# Generate example configurations
python setup.py --examples
```

## 📱 Mobile Optimization

The template is mobile-responsive by default, but test on various devices:
- Tables may scroll horizontally on small screens
- Videos should scale appropriately
- Interactive elements should work with touch
- Text should remain readable at all sizes

## 🔍 SEO Optimization

Update these elements for better search engine visibility:

1. **Meta Tags**: Automatically updated from `config.json`
2. **Alt Text**: Add descriptive alt text to all images
3. **Structured Data**: Consider adding JSON-LD for academic content
4. **Page Speed**: Compress images and videos
5. **Keywords**: Include PHM-relevant keywords naturally in content

## 🐛 Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths in HTML match actual file locations
- Ensure files are in the correct directories
- Verify image formats are supported (PNG, JPG, WebP)

**Styling not applying:**
- Clear browser cache
- Check CSS file paths in HTML
- Verify CSS syntax in custom styles

**JavaScript errors:**
- Open browser developer tools (F12)
- Check console for error messages
- Ensure all script files are loaded correctly

**Mobile layout issues:**
- Test on actual devices, not just browser dev tools
- Check Bulma responsive classes are applied correctly
- Verify custom CSS doesn't break mobile layouts

## 📞 Support

- **Examples**: Check `examples/` directory for sample configurations
- **Documentation**: Review `CLAUDE.md` for development guidelines
- **Issues**: Open GitHub issue for bugs or feature requests
- **Community**: Join PHM community discussions for domain-specific guidance

## 📄 License

This template is licensed under Creative Commons Attribution-ShareAlike 4.0 International License. You are free to use, modify, and distribute with attribution.