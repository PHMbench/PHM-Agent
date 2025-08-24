# PHM-Agent Component Customization Guide

This comprehensive guide helps developers customize multimedia components for their PHM-Agent projects. Each section provides specific instructions, code examples, and best practices for replacing placeholder content with your own Agent-focused materials.

## 🎥 1. Agent Demo Video Section (Teaser Video)

### Current Implementation
Located at lines 129-161 in `index.html` (formerly "Teaser video")

### How to Replace
```html
<!-- Original Structure -->
<video poster="static/images/agent-demo-poster.jpg" id="agent-demo" controls muted>
  <source src="static/videos/agent-demonstration.mp4" type="video/mp4">
  <source src="static/videos/banner_video.mp4" type="video/mp4">
</video>
```

### Agent Demo Video Guidelines

#### Content Structure (30-90 seconds recommended)
1. **Opening (0-10s)**: System overview with agent architecture diagram
2. **Data Input (10-20s)**: Show real sensor data being ingested
3. **Agent Reasoning (20-50s)**: Display agent decision-making process
4. **Coordination (50-70s)**: Show multi-agent communication
5. **Action Execution (70-90s)**: Demonstrate maintenance actions taken

#### Technical Specifications
- **Format**: MP4 H.264 for maximum compatibility
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Frame Rate**: 30fps or 24fps
- **File Size**: Under 10MB for web optimization
- **Duration**: 30-90 seconds (60s optimal for engagement)

#### Creating Effective Agent Demo Videos
```bash
# Recommended video compression
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k agent-demo.mp4

# Create poster frame
ffmpeg -i agent-demo.mp4 -ss 00:00:05 -vframes 1 agent-demo-poster.jpg
```

### Example Agent Video Storyboard
1. **Scene 1**: Industrial facility overview with agent network visualization
2. **Scene 2**: Sensor data streaming into agent console
3. **Scene 3**: Agent analysis with confidence scores and predictions
4. **Scene 4**: Inter-agent communication messages
5. **Scene 5**: Maintenance recommendation with explanation
6. **Scene 6**: Action execution and system response

## 🖼️ 2. Agent Architecture Gallery (Image Carousel)

### Current Implementation
Located at lines 307-392 in `index.html`

### How to Replace Architecture Images
```html
<!-- Example Architecture Slide -->
<div class="item">
  <img src="static/images/multi-agent-architecture.png" alt="Multi-Agent System Architecture"/>
  <div class="architecture-info">
    <h3 class="title is-4">🔗 Multi-Agent Coordination</h3>
    <p>Distributed agents collaborate seamlessly across industrial systems...</p>
    <button onclick="showArchitectureDetails('multi-agent')">Explore Architecture</button>
  </div>
</div>
```

### Recommended Agent Architecture Images

#### 1. Multi-Agent System Overview
- **Purpose**: Show overall system topology
- **Elements**: Agent nodes, communication links, data flows
- **Tools**: Draw.io, Lucidchart, Figma, or Visio
- **Style**: Clean, professional diagrams with consistent colors

#### 2. Agent Decision Pipeline
- **Purpose**: Illustrate decision-making process
- **Elements**: Data input → Processing → Reasoning → Action
- **Include**: Confidence scores, decision trees, logic flow
- **Format**: Flowchart or process diagram

#### 3. Communication Protocols
- **Purpose**: Show inter-agent messaging
- **Elements**: Message types, routing, coordination patterns
- **Include**: Protocol stack, message formats, timing diagrams
- **Style**: Network topology with message flows

#### 4. Learning & Adaptation
- **Purpose**: Demonstrate self-improvement capabilities
- **Elements**: Feedback loops, model updates, performance metrics
- **Include**: Before/after comparisons, learning curves
- **Format**: Cycle diagrams or evolution charts

### Image Specifications
- **Resolution**: 1920x1080 (will be displayed at various sizes)
- **Format**: PNG for diagrams (vector graphics), JPG for photos
- **File Size**: Optimize to <500KB per image using TinyPNG
- **Color Scheme**: Use PHM-Agent brand colors (blues, greens, whites)

### Creating Architecture Diagrams
```css
/* Recommended Color Palette */
--agent-primary: #00d4ff;    /* Cyan for technology */
--agent-secondary: #0066cc;   /* Blue for reliability */
--agent-accent: #00ff88;      /* Green for success */
--agent-neutral: #f8f9fa;     /* Light background */
--agent-text: #2d3748;        /* Dark text */
```

## 📺 3. Agent Tutorial Series (YouTube Embedding)

### Current Implementation
Located at lines 393-476 in `index.html`

### How to Replace Tutorial Videos
```html
<!-- Tutorial Player -->
<iframe id="tutorial-video" 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
</iframe>

<!-- Tutorial List Item -->
<li class="tutorial-item" onclick="loadTutorial('intro')">
  <div class="tutorial-number">01</div>
  <div class="tutorial-title">Introduction to PHM-Agent</div>
  <div class="tutorial-duration">12:34</div>
</li>
```

### Recommended Tutorial Series

#### Tutorial 1: Introduction to PHM-Agent (10-15 min)
**Content Overview:**
- What are PHM-Agents and why they matter
- Key capabilities and benefits
- Real-world use cases and success stories
- Getting started overview

**Video Structure:**
```
0:00 - Introduction & Problem Statement
2:00 - Agent Capabilities Overview
5:00 - Live Demo Walkthrough
8:00 - Use Cases & Results
12:00 - Next Steps & Resources
```

#### Tutorial 2: Setting Up Your First Agent (15-20 min)
**Content Overview:**
- Installation and prerequisites
- Configuration walkthrough
- First agent deployment
- Testing and validation

**Code Examples to Include:**
```python
# Installation
pip install phm-agent

# Basic setup
from phm_agent import Agent
agent = Agent(config='production')
agent.start()
```

#### Tutorial 3: Training Custom PHM Agents (18-25 min)
**Content Overview:**
- Data preparation for training
- Model configuration options
- Training process and monitoring
- Evaluation and validation

#### Tutorial 4: Multi-Agent Coordination (20-30 min)
**Content Overview:**
- Multi-agent architecture design
- Communication protocols
- Coordination strategies
- Scaling considerations

#### Tutorial 5: Production Deployment (20-25 min)
**Content Overview:**
- Deployment architectures
- Monitoring and maintenance
- Security considerations
- Performance optimization

### YouTube Best Practices
```yaml
Video Settings:
  - Resolution: 1080p minimum, 4K if possible
  - Frame Rate: 30fps or 60fps
  - Audio: Clear narration with minimal background noise
  - Thumbnails: Consistent design with episode numbers
  - Closed Captions: Auto-generate and manually review

Playlist Configuration:
  - Create dedicated PHM-Agent tutorial playlist
  - Order videos logically (intro to advanced)
  - Use consistent naming convention
  - Add detailed descriptions with timestamps
```

## 🎬 4. Industry Use Cases (Video Carousel)

### Current Implementation
Located at lines 783-887 in `index.html`

### How to Replace Use Case Videos
```html
<!-- Use Case Video Structure -->
<div class="item use-case-item">
  <div class="use-case-container">
    <video poster="static/images/manufacturing-poster.jpg" controls>
      <source src="static/videos/manufacturing-agent-case.mp4" type="video/mp4">
      <source src="static/videos/carousel1.mp4" type="video/mp4">
    </video>
    <div class="use-case-info">
      <h3 class="title is-4">🏭 Manufacturing Agent</h3>
      <p class="subtitle">Automotive Production Line | Detroit, MI</p>
      <!-- Metrics and case study link -->
    </div>
  </div>
</div>
```

### Recommended Use Case Videos

#### 1. Manufacturing Agent (2-3 minutes)
**Scenario**: Automotive production line monitoring
**Key Metrics to Highlight:**
- 99.2% uptime achievement
- 34% maintenance cost reduction  
- 150+ machines monitored

**Video Content Structure:**
```
0:00-0:30 - Factory overview and challenge
0:30-1:00 - Agent deployment and setup
1:00-1:30 - Real-time monitoring in action  
1:30-2:00 - Predictive maintenance intervention
2:00-2:30 - Results and ROI demonstration
```

#### 2. Energy Sector Agent (2-3 minutes)
**Scenario**: Offshore wind farm management
**Key Metrics:**
- 96% availability in harsh conditions
- 12 major failures prevented
- 80 turbines coordinated

**Storyboard:**
- Harsh offshore environment challenges
- Multi-agent coordination across turbines
- Early failure detection and prevention
- Weather adaptation and optimization

#### 3. Transportation Agent (2-3 minutes)
**Scenario**: Rail network fleet management
**Key Metrics:**
- 98.7% on-time performance
- 45% reduction in unplanned maintenance
- 200+ trains managed

**Content Focus:**
- Complex scheduling challenges
- Predictive maintenance coordination
- Real-time route optimization
- Safety and reliability improvements

### Video Production Guidelines

#### Technical Specifications
```yaml
Format: MP4 H.264
Resolution: 1920x1080 (Full HD)
Frame Rate: 30fps
Duration: 2-3 minutes each
File Size: <15MB per video
Audio: Professional narration or subtitles
```

#### Content Requirements
- **Real Data**: Use actual performance metrics when possible
- **Customer Permission**: Ensure proper approvals for case studies
- **Professional Quality**: High-quality visuals and clear audio
- **Anonymization**: Protect sensitive customer information

#### Poster Image Creation
```bash
# Extract poster frame from video
ffmpeg -i manufacturing-case.mp4 -ss 00:01:00 -vframes 1 -q:v 2 manufacturing-poster.jpg

# Optimize poster images
convert manufacturing-poster.jpg -resize 1920x1080 -quality 85 manufacturing-poster.jpg
```

## 🔧 5. API Documentation Section

### Current Implementation
Located at lines 477-782 in `index.html`

### How to Customize API Documentation
```html
<!-- API Endpoint Entry -->
<li><a onclick="showAPI('create-agent')">POST /agents/create</a></li>

<!-- API Content Display -->
<div id="api-viewer">
  <h3>POST /agents/create</h3>
  <p>Create a new PHM agent instance</p>
  <div class="api-example">
    <h4>Request Body</h4>
    <pre><code>{ JSON example }</code></pre>
  </div>
</div>
```

### Essential Agent API Endpoints

#### 1. Agent Management
```yaml
Endpoints:
  - POST /agents/create: Create new agent instance
  - GET /agents/list: List all agents
  - GET /agents/{id}/status: Get agent status
  - PUT /agents/{id}/config: Update agent configuration
  - DELETE /agents/{id}: Deactivate agent
```

#### 2. Data Processing
```yaml
Endpoints:
  - POST /data/ingest: Send sensor data to agents
  - GET /data/status: Check data processing status
  - GET /predictions: Retrieve agent predictions
  - POST /data/batch: Bulk data upload
```

#### 3. Maintenance Operations
```yaml
Endpoints:
  - POST /maintenance/schedule: Schedule maintenance tasks
  - GET /recommendations: Get maintenance recommendations
  - PUT /maintenance/{id}/status: Update task status
  - GET /maintenance/history: View maintenance history
```

### API Example Templates

#### Complete API Documentation Example
```json
{
  "endpoint": "/agents/create",
  "method": "POST",
  "description": "Create a new PHM agent instance",
  "parameters": {
    "name": {
      "type": "string",
      "required": true,
      "description": "Unique identifier for the agent"
    },
    "type": {
      "type": "string",
      "required": true,
      "enum": ["predictive_maintenance", "anomaly_detection", "optimization"],
      "description": "Type of PHM agent to create"
    },
    "config": {
      "type": "object",
      "required": true,
      "properties": {
        "model": {"type": "string", "default": "phm-agent-v2"},
        "sensors": {"type": "array", "items": {"type": "string"}},
        "threshold": {"type": "number", "minimum": 0, "maximum": 1},
        "update_frequency": {"type": "string", "pattern": "^\\d+[smh]$"}
      }
    }
  },
  "response": {
    "201": {
      "description": "Agent created successfully",
      "schema": {
        "agent_id": "string",
        "status": "string",
        "created_at": "datetime",
        "endpoint": "string"
      }
    },
    "400": {
      "description": "Invalid request parameters"
    },
    "409": {
      "description": "Agent name already exists"
    }
  }
}
```

### SDK Examples

#### Python SDK
```python
from phm_agent import Agent, Config

# Initialize agent with configuration
config = Config(
    model='phm-agent-v2',
    sensors=['temperature', 'vibration', 'pressure'],
    threshold=0.85,
    update_frequency='1min'
)

agent = Agent(
    name='turbine-monitor-01',
    type='predictive_maintenance',
    config=config
)

# Start monitoring
results = agent.start_monitoring()

# Get predictions
predictions = agent.get_predictions()

# Schedule maintenance
maintenance_plan = agent.schedule_maintenance(
    asset_id='turbine-001',
    priority='high'
)
```

#### JavaScript SDK
```javascript
const PHMAgent = require('phm-agent');

// Initialize client
const client = new PHMAgent({
  apiKey: process.env.PHM_AGENT_API_KEY,
  endpoint: 'https://api.phm-agent.com'
});

// Create agent
const agent = await client.createAgent({
  name: 'pump-monitor-02',
  type: 'anomaly_detection',
  config: {
    sensors: ['flow_rate', 'pressure'],
    threshold: 0.9
  }
});

// Send sensor data
await client.ingestData(agent.id, {
  timestamp: Date.now(),
  sensors: {
    flow_rate: 150.5,
    pressure: 2.3
  }
});

// Get recommendations
const recommendations = await client.getRecommendations(agent.id);
```

## 📝 6. Enhanced Citations Section

### Current Implementation
Located at lines 921-1009 in `index.html`

### How to Add New Citation Types
```html
<!-- New Tab -->
<li onclick="showCitation('new-paper')">
  <a>
    <span class="icon"><i class="fas fa-paper-plane"></i></span>
    <span>New Research Paper</span>
  </a>
</li>

<!-- New Citation Block -->
<div id="citation-new-paper" class="citation-block">
  <h4 class="title is-5">Paper Title</h4>
  <pre><code>@article{...}</code></pre>
  <button onclick="copyCitation('new-paper')">Copy BibTeX</button>
</div>
```

### Citation Categories

#### 1. Core Framework Papers
- Main PHM-Agent system paper
- Architecture and design papers
- Performance evaluation studies

#### 2. Specialized Technique Papers
- Multi-agent coordination algorithms
- Learning and adaptation methods
- Communication protocols

#### 3. Application Domain Papers
- Manufacturing applications
- Energy sector deployments
- Transportation use cases

#### 4. Benchmark and Evaluation
- Evaluation frameworks
- Comparison studies
- Benchmark datasets

### BibTeX Best Practices

#### Complete BibTeX Template
```bibtex
@article{unique-key-2024,
  title={Full Paper Title: Subtitle if Applicable},
  author={Last1, First1 and Last2, First2 and Last3, First3},
  journal={Journal Name or Conference Proceedings},
  volume={15},
  number={3},
  pages={123--145},
  year={2024},
  month={June},
  publisher={Publisher Name},
  doi={10.1000/journal.2024.12345},
  url={https://doi.org/10.1000/journal.2024.12345},
  issn={1234-5678},
  keywords={PHM, agents, predictive maintenance, industrial AI},
  abstract={Brief abstract of the paper content...}
}
```

#### Conference Paper Template
```bibtex
@inproceedings{conference-key-2024,
  title={Conference Paper Title},
  author={Author1, Name and Author2, Name},
  booktitle={Proceedings of the Conference on Autonomous Agents},
  pages={45--58},
  year={2024},
  month={May},
  address={Location, Country},
  organization={ACM or IEEE},
  doi={10.1145/conference.2024.12345},
  isbn={978-1-4503-1234-5}
}
```

### JavaScript for Citation Management
```javascript
// Citation management functions
const citations = {
  'main': `@article{phm-agent-2024,...}`,
  'multi': `@inproceedings{phm-multiagent-2024,...}`,
  'benchmark': `@article{phm-benchmark-2024,...}`
};

function showCitation(type) {
  // Hide all citation blocks
  document.querySelectorAll('.citation-block').forEach(block => {
    block.style.display = 'none';
  });
  
  // Remove active class from all tabs
  document.querySelectorAll('.tabs li').forEach(tab => {
    tab.classList.remove('is-active');
  });
  
  // Show selected citation block
  document.getElementById(`citation-${type}`).style.display = 'block';
  
  // Mark tab as active
  event.target.closest('li').classList.add('is-active');
}

function copyCitation(type) {
  const citation = citations[type];
  navigator.clipboard.writeText(citation).then(() => {
    // Show success notification
    showNotification('Citation copied to clipboard!', 'success');
  }).catch(err => {
    console.error('Failed to copy citation:', err);
    showNotification('Failed to copy citation', 'error');
  });
}

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification is-${type} is-light`;
  notification.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 1000;';
  notification.innerHTML = `
    <button class="delete"></button>
    ${message}
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
  
  // Remove on click
  notification.querySelector('.delete').onclick = () => {
    notification.remove();
  };
}
```

## 🎨 7. Styling and Theming

### Agent-Specific Color Scheme
```css
:root {
  /* Primary Agent Colors */
  --agent-primary: #00d4ff;      /* Cyan - Technology/Innovation */
  --agent-secondary: #0066cc;     /* Blue - Reliability/Trust */
  --agent-accent: #00ff88;        /* Green - Success/Growth */
  --agent-warning: #ffaa00;       /* Orange - Alerts/Caution */
  --agent-danger: #ff3366;        /* Red - Critical/Emergency */
  
  /* Neutral Colors */
  --agent-background: #f8f9fa;    /* Light background */
  --agent-surface: #ffffff;       /* Card/surface white */
  --agent-text: #2d3748;          /* Primary text */
  --agent-text-light: #718096;    /* Secondary text */
  --agent-border: #e2e8f0;        /* Borders and dividers */
  
  /* Gradients */
  --agent-gradient-primary: linear-gradient(135deg, var(--agent-primary), var(--agent-secondary));
  --agent-gradient-success: linear-gradient(135deg, var(--agent-accent), #38a169);
}
```

### Component-Specific Styling

#### Agent Demo Console
```css
.agent-console {
  background: #1a1a1a;
  color: var(--agent-accent);
  font-family: 'Courier New', monospace;
  padding: 1rem;
  height: 300px;
  overflow-y: auto;
  border-radius: 6px;
  font-size: 0.9rem;
  line-height: 1.4;
  
  /* Scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: var(--agent-primary) #333;
}

.agent-console::-webkit-scrollbar {
  width: 8px;
}

.agent-console::-webkit-scrollbar-track {
  background: #333;
}

.agent-console::-webkit-scrollbar-thumb {
  background: var(--agent-primary);
  border-radius: 4px;
}

.agent-console .timestamp {
  color: #888;
  font-size: 0.8rem;
}

.agent-console .decision {
  color: var(--agent-accent);
  font-weight: bold;
}

.agent-console .confidence {
  color: var(--agent-warning);
}
```

#### Use Case Metrics
```css
.metric-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--agent-primary);
  display: block;
  margin-bottom: 0.25rem;
}

.metric-label {
  font-size: 0.8rem;
  color: var(--agent-text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.metrics {
  background: rgba(0, 212, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
}
```

#### Architecture Gallery Styling
```css
.architecture-info {
  background: white;
  padding: 1.5rem;
  border-radius: 0 0 12px 12px;
  margin-top: -5px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.architecture-info:hover {
  transform: translateY(-2px);
}

.architecture-info .button {
  transition: all 0.2s ease;
}

.architecture-info .button:hover {
  transform: scale(1.05);
}
```

## 📱 8. Responsive Design Considerations

### Mobile-First Approach
```css
/* Base mobile styles */
.agent-demo {
  padding: 1rem;
}

.use-case-container {
  margin-bottom: 2rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .agent-demo {
    padding: 2rem;
  }
  
  .tutorial-container .columns {
    gap: 0;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .use-case-carousel .columns {
    gap: 2rem;
  }
}
```

### Touch-Friendly Interactions
```css
/* Larger touch targets for mobile */
@media (max-width: 768px) {
  .tutorial-item {
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  .api-menu a {
    padding: 0.75rem;
    font-size: 1rem;
  }
  
  .citation-tabs .tabs li {
    min-height: 44px;
  }
}
```

## ⚡ 9. Performance Optimization

### Image Optimization
```bash
# Batch optimize images
find static/images -name "*.jpg" -exec jpegoptim --max=85 {} \;
find static/images -name "*.png" -exec optipng -o3 {} \;

# Create WebP versions
find static/images -name "*.jpg" -exec cwebp -q 85 {} -o {}.webp \;
```

### Video Optimization
```bash
# Optimize video files
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k output.mp4

# Create multiple quality versions
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 24 output_720p.mp4
ffmpeg -i input.mp4 -vf scale=854:480 -c:v libx264 -crf 26 output_480p.mp4
```

### Lazy Loading Implementation
```html
<!-- Lazy load videos -->
<video poster="poster.jpg" preload="none" loading="lazy">
  <source src="video.mp4" type="video/mp4">
</video>

<!-- Lazy load images -->
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy" alt="Description">
```

## 🔄 10. Maintenance and Updates

### Content Update Checklist
```markdown
- [ ] Update video content regularly (quarterly)
- [ ] Refresh performance metrics with latest data
- [ ] Add new use cases as they become available
- [ ] Update API documentation with new endpoints
- [ ] Review and update citations
- [ ] Test all interactive components
- [ ] Verify mobile responsiveness
- [ ] Check loading performance
- [ ] Update copyright dates and attributions
```

### Version Control Best Practices
```bash
# Create feature branches for major updates
git checkout -b feature/update-manufacturing-case-study

# Make specific, focused commits
git commit -m "Update manufacturing metrics with Q4 2024 data"
git commit -m "Replace manufacturing video with new facility footage"
git commit -m "Add new API endpoints for agent coordination"

# Tag stable releases
git tag -a v2.1 -m "Release v2.1: Enhanced agent use cases"
```

### Automated Testing
```javascript
// Example test for component functionality
describe('Agent Demo Console', () => {
  it('should update status when scenario is loaded', () => {
    loadScenario('turbine');
    expect(document.getElementById('agent-status-text').textContent).toBe('Processing...');
  });
  
  it('should display results after analysis', async () => {
    await runAgentDemo();
    const output = document.getElementById('agent-output');
    expect(output.children.length).toBeGreaterThan(5);
  });
});
```

---

## 📞 Support and Resources

### Getting Help
- **Documentation**: Review this guide and the main README.md
- **Examples**: Check the `examples/` directory for complete implementations  
- **Issues**: Open GitHub issues for bugs or feature requests
- **Community**: Join the PHM-Agent community discussions

### Additional Resources
- **Design Assets**: Figma templates for creating architecture diagrams
- **Video Templates**: After Effects templates for consistent video styling
- **Brand Guidelines**: Official PHM-Agent branding and color specifications
- **Performance Tools**: Recommended tools for optimization and testing

---

*This guide is regularly updated to reflect the latest best practices and component implementations. Last updated: December 2024*