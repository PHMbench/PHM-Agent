# PHM Benchmark Example Configuration

This example shows how to configure the PHM-LLM template for a **comprehensive evaluation suite** project.

## Overview

PHMBench is designed for projects that focus on:
- Algorithm evaluation and comparison
- Standardized datasets and metrics
- Community leaderboards
- Benchmark submissions and evaluation

## Key Features Enabled

- ✅ **Dataset Tables**: Comprehensive dataset information
- ✅ **Leaderboard**: Sortable performance comparisons
- ✅ **Evaluation Protocol**: Submission and evaluation guidelines
- ✅ **Benchmark Statistics**: Dataset and submission counts
- ✅ **Metric Standards**: Standardized evaluation metrics

## Setup Instructions

1. **Copy Configuration**: Copy this `config.json` to the root directory
2. **Apply Settings**: Run `python setup.py --customize`
3. **Use Benchmark Variant**: Run `python setup.py --variant benchmark`
4. **Update Leaderboard**: Add current benchmark results

## Customization Points

### Datasets
Update the `datasets` array with your benchmark datasets:
```json
{
  "datasets": [
    {
      "name": "Your Dataset",
      "domain": "Application Domain",
      "task": "PHM Task Type", 
      "samples": "Number of samples",
      "features": "Number of features",
      "status": "available|processing|coming_soon",
      "metrics": ["Metric1", "Metric2"]
    }
  ]
}
```

### Leaderboard Results
Update leaderboard sections with current results:
```json
{
  "leaderboard": {
    "your_task": {
      "dataset": "Dataset Name",
      "methods": [
        {
          "rank": 1,
          "method": "Method Name",
          "team": "Team/Organization",
          "metric1": 12.4,
          "metric2": 0.94,
          "date": "2024-01-15",
          "highlight": true
        }
      ]
    }
  }
}
```

### Evaluation Metrics
Define your evaluation standards:
```json
{
  "evaluation_metrics": [
    {
      "task": "Your Task",
      "primary_metric": "Main Metric",
      "secondary_metrics": ["Supporting", "Metrics"],
      "description": "Metric description and rationale"
    }
  ]
}
```

### Benchmark Statistics
Update overview statistics:
```json
{
  "benchmark_stats": [
    {
      "metric": "Statistic Name",
      "value": 42,
      "unit": "+|%|""
    }
  ]
}
```

## Content Sections

This configuration enables these benchmark-specific sections:
- Hero with leaderboard and download links
- Benchmark overview statistics
- Comprehensive dataset tables
- Multi-task leaderboards
- Evaluation protocols and guidelines
- Submission instructions
- Evaluation toolkit documentation

## Assets to Replace

Create these assets for your benchmark:
- `static/videos/phm_benchmark_overview.mp4` - Benchmark overview video
- `static/images/phm_benchmark_banner.png` - Social media banner
- `static/images/leaderboard_screenshot.png` - Leaderboard interface
- `static/images/dataset_visualization.png` - Dataset statistics charts
- `static/images/evaluation_workflow.png` - Evaluation process diagram

## PHM Tasks Supported

This template supports various PHM evaluation tasks:
- **RUL Prediction**: Remaining useful life estimation
- **Fault Classification**: Multi-class fault detection
- **Anomaly Detection**: Outlier and novelty detection
- **Health Assessment**: Degradation state estimation
- **Maintenance Optimization**: Scheduling and resource planning

## Benchmark Components

### Dataset Organization
- **Training Sets**: Labeled data for model development
- **Validation Sets**: Hyperparameter tuning and model selection  
- **Test Sets**: Final evaluation (held-out, private)
- **Metadata**: Dataset descriptions, statistics, preprocessing info

### Evaluation Framework
- **Automated Evaluation**: Consistent metric computation
- **Statistical Testing**: Significance testing for comparisons
- **Baseline Methods**: Reference implementations
- **Submission System**: Automated result processing

### Community Features
- **Leaderboard**: Public ranking of submitted methods
- **Code Sharing**: Optional code publication for reproducibility
- **Discussion Forum**: Community discussion and questions
- **Workshops**: Associated benchmark challenges and events

## Maintenance Tasks

Regular benchmark maintenance includes:
1. **Update Leaderboards**: Add new submissions regularly
2. **Dataset Curation**: Add new datasets and domains
3. **Baseline Updates**: Implement new baseline methods
4. **Metric Evolution**: Adapt evaluation metrics as field evolves
5. **Community Engagement**: Respond to submissions and questions

## Next Steps

1. Define your specific PHM tasks and domains
2. Curate and prepare benchmark datasets
3. Implement evaluation scripts and metrics
4. Set up submission and evaluation pipeline
5. Launch with initial baseline results
6. Engage PHM community for participation