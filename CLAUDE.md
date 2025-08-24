# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a specialized multi-paper research homepage template for Prognostic and Health Management (PHM) projects utilizing Large Language Models. It features expandable paper cards, interactive timelines, and a configuration-driven architecture optimized for showcasing academic research series.

## Architecture

The project uses a static website architecture with configuration-driven content:

- **Frontend**: Pure HTML/CSS/JavaScript with Bulma CSS framework
- **Configuration System**: JSON-driven content management via `config.json`
- **Template Engine**: Python-based setup script for automated customization
- **Multi-paper Support**: Expandable card interface for research series
- **Asset Management**: Organized media files in `static/` directory
- **Deployment**: GitHub Pages compatible with automatic deployment

## Key Components

### Core Architecture Files
- `index.html` - Main multi-paper homepage template with expandable cards
- `config.json` - Centralized configuration for papers, authors, metrics, and features
- `setup.py` - Template customization and variant generation script
- `static/css/phm-theme.css` - PHM-specific styling with CSS custom properties
- `static/js/phm-functionality.js` - Interactive components and configuration loader

### Template Variants
- `variants/phm-agent-template.html` - Agent-specific project layout
- `variants/phm-benchmark-template.html` - Benchmark/evaluation project layout
- `examples/` - Sample configurations for different project types

### Configuration Structure
The `config.json` file drives all content and supports:
- Multi-paper research series with expandable cards
- Author management with equal contribution flags
- Performance metrics and dataset tables
- Feature toggles for different content sections
- Theme customization via CSS variables
- Research timeline and statistics

## Commands

### Template Setup and Customization
```bash
# Apply current configuration to templates
python setup.py --customize

# Generate project variant for specific type
python setup.py --variant agent        # PHM agent projects
python setup.py --variant benchmark    # PHM benchmark projects
python setup.py --variant model        # PHM model projects
python setup.py --variant dataset      # PHM dataset projects

# Generate example configurations
python setup.py --examples

# Complete setup with all customizations
python setup.py --all
```

### Local Development
```bash
# Test locally (no build process required)
# Open index.html directly in browser or use simple HTTP server
python -m http.server 8000
# Then visit http://localhost:8000
```

### Content Management
- **Edit config.json** for project details, papers, and features
- **Update static/images/** with project-specific visuals
- **Modify static/css/phm-theme.css** for styling customizations
- **Test interactivity** by expanding paper cards and testing timeline

## Multi-Paper Homepage Features

### Expandable Paper Cards
Each paper is represented by an interactive card with:
- **Header**: Title, authors, venue, and status badge (published/submitted/preprint)
- **Summary**: One-line core contribution (always visible)
- **Expandable Details**: Core ideas, main contributions, technologies, and links
- **Smooth Animations**: CSS transitions for expand/collapse interactions
- **BibTeX Integration**: Modal dialogs with copyable citations

### Configuration-Driven Content
The template dynamically generates content from `config.json`:
- **Papers Array**: Each entry creates an expandable card
- **Timeline Items**: Research milestones and progression
- **Statistics**: Automated counters for papers, datasets, metrics
- **Theme Variables**: CSS custom properties for consistent styling

### Interactive Elements
- **Paper Card Toggle**: Click headers to expand/collapse details
- **Timeline Visualization**: Visual research progression with connected dots
- **Statistics Grid**: Responsive metric displays with hover effects
- **Navigation**: Smooth scrolling between sections with fixed header
- **Mobile Responsive**: Adaptive layout for all device sizes

## PHM Domain Specialization

### Standard PHM Datasets
Use recognized datasets in configuration:
- **NASA C-MAPSS**: Turbofan engine degradation (RUL prediction)
- **PHM08 Challenge**: Bearing fault detection (classification)
- **IMS Bearing**: Vibration data (health assessment)
- **FEMTO-ST**: Accelerated life test data (RUL prediction)

### PHM Metrics and Terminology
- **RUL Prediction**: Use RMSE, MAE, Score metrics
- **Fault Classification**: Use Accuracy, F1-Score, Precision
- **Health Assessment**: Use AUC, Precision, Recall
- **Terminology**: RUL, fault diagnosis, condition monitoring, predictive maintenance

### Styling Components
Custom CSS classes for PHM-specific elements:
- `.phm-metric` - Performance metric displays
- `.health-indicator` - Status indicators (good/warning/critical)
- `.dataset-card` - Interactive dataset information cards
- `.timeline-item` - Research progression timeline elements
- `.paper-card` - Expandable paper presentation cards

## GitHub Pages Deployment

### Required Files
- `.nojekyll` - Prevents Jekyll processing (already included)
- All assets use relative paths for portability
- No build process required - direct deployment

### Automatic Deployment
Repository supports automatic GitHub Pages deployment:
1. Push changes to main/master branch
2. GitHub Pages builds and deploys automatically
3. Site available at `https://username.github.io/repository-name`

### SEO and Social Media
Update meta tags in HTML head:
- Open Graph tags for social media sharing
- Twitter Card configuration
- Keywords for search indexing
- Proper descriptions and titles

## Development Workflow

### Adding New Papers
1. **Update config.json**: Add paper object to `papers` array
2. **Update index.html**: Add corresponding paper card HTML
3. **Update timeline**: Add milestone to research timeline
4. **Update statistics**: Increment paper counts and metrics
5. **Test locally**: Verify expandable cards and interactions work

### Customizing Styling
- **CSS Variables**: Edit `:root` section in `phm-theme.css`
- **Component Styles**: Modify specific classes for cards, timeline, etc.
- **Responsive Design**: Adjust media queries for different screen sizes
- **Color Themes**: Use PHM color palette (blue primary, green accent)

### Content Guidelines
- **Paper Summaries**: One impactful sentence per paper
- **Core Ideas**: 2-3 key insights or approaches
- **Main Contributions**: 3-4 specific technical contributions
- **Status Badges**: Use appropriate badges (published/submitted/preprint)
- **Links**: Include paper, code, demo, and supplementary materials