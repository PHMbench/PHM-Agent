# PHM Agent Example Configuration

This example shows how to configure the PHM-LLM template for an **intelligent maintenance assistant** project.

## Overview

PHM Agent is designed for projects that focus on:
- AI-powered maintenance assistants
- Interactive PHM systems
- API-driven maintenance tools
- Real-world maintenance applications

## Key Features Enabled

- ✅ **API Documentation**: Comprehensive endpoint documentation
- ✅ **Interactive Demo**: Live agent demonstration interface
- ✅ **Case Studies**: Real-world application examples
- ✅ **Integration Examples**: Platform-specific implementations
- ✅ **Performance Impact**: Quantified business metrics

## Setup Instructions

1. **Copy Configuration**: Copy this `config.json` to the root directory
2. **Apply Settings**: Run `python setup.py --customize`
3. **Use Agent Variant**: Run `python setup.py --variant agent`
4. **Customize Content**: Update agent-specific sections

## Customization Points

### API Documentation
Update the `api_endpoints` section with your actual API:
```json
{
  "api_endpoints": [
    {
      "endpoint": "/api/v1/your-endpoint",
      "method": "GET|POST|PUT|DELETE",
      "description": "Endpoint description",
      "example": "Usage example"
    }
  ]
}
```

### Capabilities
Modify the `capabilities` array to match your agent's features:
```json
{
  "capabilities": [
    {
      "icon": "🔧",
      "title": "Your Feature",
      "description": "Feature description"
    }
  ]
}
```

### Performance Metrics
Update business impact metrics:
```json
{
  "performance_impact": [
    {
      "metric": "Your Metric",
      "value": 42,
      "unit": "%"
    }
  ]
}
```

### Integration Examples
Add your target platforms:
```json
{
  "integrations": [
    {
      "title": "🏭 Your Platform",
      "description": "Integration description"
    }
  ]
}
```

## Content Sections

This configuration enables these PHM Agent-specific sections:
- Hero with demo and API links
- Agent capabilities overview
- Interactive demo interface
- API documentation
- Integration examples
- Performance impact metrics
- Case studies (when available)

## Assets to Replace

Create these assets for your PHM Agent:
- `static/videos/phm_agent_demo.mp4` - Agent demonstration video
- `static/images/phm_agent_banner.png` - Social media banner
- `static/images/api_documentation.png` - API docs screenshot
- `static/images/agent_interface.png` - Agent UI screenshot

## Example Agent Types

This template works well for:
- **Maintenance Chatbots**: Conversational maintenance assistants
- **Diagnostic Agents**: Automated fault diagnosis systems
- **Planning Agents**: Maintenance scheduling and optimization
- **Monitoring Agents**: Real-time health monitoring systems
- **Advisory Agents**: Expert maintenance recommendation systems

## Next Steps

1. Update the project name and description
2. Add your actual API endpoints
3. Create demo interface (if interactive)
4. Add real performance metrics
5. Include case studies from deployments
6. Replace placeholder images with actual screenshots