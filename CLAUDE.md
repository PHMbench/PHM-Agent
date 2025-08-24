# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an academic project page template for research papers, built with static HTML/CSS/JavaScript. It's designed to showcase academic work with multimedia content including videos, image carousels, and PDF integration.

## Architecture

The project follows a simple static website structure:

- **Frontend**: Pure HTML/CSS/JavaScript with Bulma CSS framework
- **Assets**: All media files (images, videos, PDFs) stored in `static/` directory
- **Styling**: Bulma framework + custom CSS in `static/css/index.css`
- **Interactivity**: jQuery + Bulma extensions for carousels and sliders

## Key Components

### Core Files
- `index.html` - Main page template with all content sections
- `static/css/index.css` - Custom styling and layout modifications
- `static/js/index.js` - JavaScript for carousel and slider functionality

### Content Sections (in order)
1. Hero section with paper title, authors, and links
2. Teaser video section
3. Abstract section
4. Image carousel
5. YouTube video embedding
6. Video carousel
7. PDF poster viewer
8. BibTeX citation

### Dependencies
- **Bulma CSS Framework**: Core styling and layout
- **Bulma Carousel**: Image/video carousel functionality  
- **Bulma Slider**: Slider components
- **FontAwesome**: Icons for buttons and links
- **Academicons**: Academic-specific icons
- **jQuery**: DOM manipulation and event handling
- **Adobe PDF Embed API**: PDF viewing functionality

## Development Workflow

### Testing Changes
- Open `index.html` directly in browser (no build process required)
- All assets are referenced relatively, so the site works locally

### Content Updates
- Edit `index.html` directly - it contains HTML comment instructions
- Replace placeholder content (titles, descriptions, links, media files)
- Update meta tags for social media sharing and SEO

### Asset Management
- Images: Place in `static/images/` (recommended resolution: 1920-2048px)
- Videos: Place in `static/videos/` (compress for web, <10MB preferred)
- PDFs: Place in `static/pdfs/`
- Compress all media for fast loading (use TinyPNG for images)

### GitHub Pages Deployment
- Repository includes `.nojekyll` file for GitHub Pages compatibility
- No build process required - push changes and site updates automatically

## Customization Points

### Meta Tags (lines 7-24 in index.html)
Update for proper SEO and social media sharing:
- Description, title, and URL metadata
- Open Graph tags for social platforms
- Twitter card configuration
- Keywords for search indexing

### Styling Customization
- Primary styles: `static/css/index.css`
- Uses CSS custom properties for easy theme modifications
- Responsive design with Bulma's grid system

## Commands for PHM Development

### Template Setup
```bash
# Apply configuration
python setup.py --customize

# Create project variant
python setup.py --variant agent|benchmark|model|dataset

# Generate examples
python setup.py --examples

# Complete setup
python setup.py --all
```

### Content Management
- **Edit config.json** for project details, features, datasets
- **Update static/images/phm/** with PHM-specific visuals
- **Modify variants/** for project-type specific templates
- **Test locally** by opening index.html in browser

### PHM Domain Guidelines
- **Datasets**: Use standard PHM datasets (NASA C-MAPSS, PHM08, IMS, FEMTO-ST)
- **Metrics**: Follow PHM conventions (RMSE for RUL, F1 for classification)
- **Terminology**: Use proper PHM terms (RUL, fault diagnosis, condition monitoring)
- **Visualizations**: Include degradation curves, confusion matrices, health indicators
- **Interactive Elements**: Provide demos for PHM agents and tools

## PHM Template Features

### Built-in PHM Components
- **Health Indicators**: Visual status displays (good/warning/critical)
- **Metric Counters**: Animated performance displays
- **Dataset Cards**: Interactive dataset information
- **Leaderboard Tables**: Sortable performance comparisons
- **Demo Interfaces**: Interactive PHM system demonstrations
- **API Documentation**: Structured endpoint documentation
- **Configuration Loader**: Dynamic content based on config.json

### Recommended PHM Content
- **Problem Context**: Industrial challenges, maintenance costs
- **Technical Approach**: LLM integration with PHM systems
- **Evaluation**: Standard PHM benchmarks and metrics
- **Real-world Impact**: Maintenance cost reduction, downtime prevention
- **Integration**: SCADA systems, industrial IoT, maintenance workflows