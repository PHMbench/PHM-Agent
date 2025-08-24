# PHM-LLM Template: Prognostic Health Management Project Pages

This is a specialized template for creating project pages for Prognostic and Health Management (PHM) research projects that utilize Large Language Models. Based on the popular academic project page template, it's been optimized for PHM domain with relevant sections, styling, and functionality.


## 🚀 Perfect for PHM Projects Like:
- **PHM Agents**: Intelligent maintenance assistants
- **PHM Benchmarks**: Evaluation suites and leaderboards
- **PHM Models**: Novel algorithms and architectures
- **PHM Datasets**: New datasets and data processing tools
- **PHM Applications**: Real-world deployment case studies



## 🛠️ Quick Start

### Option 1: Use This Template (Recommended)
1. Click "Use this Template" to create your own repository
2. Clone your new repository
3. Customize using the configuration system:
   ```bash
   # Install Python (if not already installed)
   # Edit config.json with your project details
   python setup.py --customize
   ```

### Option 2: Manual Setup
1. Edit `config.json` with your project information
2. Run the setup script to apply changes:
   ```bash
   python setup.py --all
   ```
3. Replace placeholder images in `static/images/`
4. Update content sections as needed

### Option 3: Use Project Variants
Choose a pre-configured variant for your project type:
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

## 🎯 PHM-Specific Features

### Content Sections
- **Problem Statement**: Highlight PHM challenges being addressed
- **Method Overview**: Visual architecture diagrams with PHM workflow
- **Datasets & Benchmarks**: Comprehensive dataset tables with PHM metrics
- **Performance Metrics**: RUL prediction, fault classification results
- **Interactive Demos**: Live PHM agent demonstrations
- **API Documentation**: For PHM tools and agents
- **Results Visualization**: PHM-specific charts and graphs
- **Case Studies**: Real-world PHM applications

### Built-in Components
- Health status indicators
- Performance metric counters
- Interactive dataset cards
- Leaderboard tables
- Configuration-driven content
- PHM-specific styling and animations
- Responsive design for all devices

## 📝 Configuration

The template uses a `config.json` file for easy customization:

```json
{
  "project": {
    "name": "Your PHM Project Name",
    "type": "agent|benchmark|model|dataset",
    "description": "Brief description of your PHM work"
  },
  "features": {
    "show_demo": true,
    "show_api_docs": false,
    "show_leaderboard": true
  },
  "datasets": [
    {
      "name": "NASA C-MAPSS",
      "task": "RUL Prediction",
      "metrics": ["RMSE", "Score"]
    }
  ]
}
```

## 💡 Best Practices

- **Images**: Use 1920x1080 resolution, compress with [TinyPNG](https://tinypng.com)
- **Videos**: Keep under 10MB or use YouTube embedding
- **Datasets**: Use the standardized table format for consistency
- **Metrics**: Follow PHM community standards (RMSE for RUL, F1 for classification)
- **Colors**: Use the provided PHM color scheme for professional appearance
- **Mobile**: Test responsiveness on different screen sizes

## 🎨 Customization

### Styling
- Edit `static/css/phm-theme.css` for theme customization
- Use CSS variables for consistent color schemes
- PHM-specific classes available (`.phm-metric`, `.health-indicator`, etc.)

### Interactive Features
- Modify `static/js/phm-functionality.js` for custom interactions
- Built-in features: metric counters, health monitors, demo handlers
- Configuration-driven section visibility

### Project Variants
Pre-built variants available in `variants/` directory:
- `phm-agent-template.html` - For PHM agent projects
- `phm-benchmark-template.html` - For benchmark/evaluation projects
- More variants available in `examples/` directory

## 📁 File Structure

```
PHM_page/
├── index.html                 # Main template
├── config.json               # Configuration file
├── setup.py                  # Setup and customization script
├── variants/                 # Project type variants
│   ├── phm-agent-template.html
│   └── phm-benchmark-template.html
├── examples/                 # Example configurations
├── static/
│   ├── css/
│   │   ├── phm-theme.css    # PHM-specific styling
│   │   └── ...
│   ├── js/
│   │   ├── phm-functionality.js  # PHM interactions
│   │   └── ...
│   └── images/phm/          # PHM-specific assets
└── CLAUDE.md               # Development guide
```

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request with your improvements

## 🙏 Acknowledgments

- Original template adapted from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)
- Inspired by [Nerfies](https://nerfies.github.io/) project page design
- PHM domain expertise from the prognostic health management community

## 📋 Requirements

- Python 3.6+ (for setup script)
- Modern web browser
- No build process required - static HTML/CSS/JS

## 🚀 GitHub Pages Deployment

1. Enable GitHub Pages in repository settings
2. Select source branch (usually `main` or `gh-pages`)
3. The `.nojekyll` file ensures proper deployment
4. Your site will be available at `https://username.github.io/repository-name`

## 📄 License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This PHM-LLM template is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

## 📞 Support

For questions or issues:
1. Check the [examples/](examples/) directory for sample configurations
2. Review [CLAUDE.md](CLAUDE.md) for development guidelines
3. Open an issue on GitHub for bugs or feature requests
