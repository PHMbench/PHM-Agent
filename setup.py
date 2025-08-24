#!/usr/bin/env python3
"""
PHM-LLM Template Setup Script
This script helps customize the PHM-LLM template based on the config.json file.
"""

import json
import os
import sys
import shutil
from pathlib import Path

def load_config():
    """Load configuration from config.json"""
    try:
        with open('config.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print("Error: config.json not found. Please make sure it exists in the current directory.")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in config.json: {e}")
        sys.exit(1)

def create_project_variant(config, project_type):
    """Create a project variant based on type (agent, benchmark, model, dataset)"""
    
    variant_configs = {
        'agent': {
            'features': {
                'show_api_docs': True,
                'show_demo': True,
                'show_case_studies': True,
                'show_performance_metrics': True,
                'show_datasets': True
            },
            'additional_sections': ['API Documentation', 'Live Demo', 'Integration Guide']
        },
        'benchmark': {
            'features': {
                'show_datasets': True,
                'show_performance_metrics': True,
                'show_leaderboard': True,
                'show_evaluation': True
            },
            'additional_sections': ['Leaderboard', 'Evaluation Protocol', 'Submission Guidelines']
        },
        'model': {
            'features': {
                'show_method_overview': True,
                'show_performance_metrics': True,
                'show_architecture': True,
                'show_training': True
            },
            'additional_sections': ['Model Architecture', 'Training Procedure', 'Ablation Studies']
        },
        'dataset': {
            'features': {
                'show_datasets': True,
                'show_statistics': True,
                'show_download': True,
                'show_usage': True
            },
            'additional_sections': ['Dataset Statistics', 'Download Instructions', 'Usage Examples']
        }
    }
    
    if project_type in variant_configs:
        # Update config with variant-specific settings
        config['features'].update(variant_configs[project_type]['features'])
        config['project']['type'] = project_type
        
        # Save variant config
        variant_path = f"variants/{project_type}_config.json"
        os.makedirs("variants", exist_ok=True)
        
        with open(variant_path, 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
        
        print(f"Created {project_type} variant configuration at {variant_path}")
        return variant_configs[project_type]['additional_sections']
    
    return []

def update_index_html(config):
    """Update index.html with config values"""
    
    # Read current index.html
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update project information
    project = config['project']
    content = content.replace('PHM-LLM: Prognostic and Health Management with Large Language Models', project['name'])
    
    # Update meta tags
    content = content.replace(
        'PHM-LLM: Prognostic and Health Management with Large Language Models - Advanced AI approaches for predictive maintenance, fault diagnosis, and remaining useful life prediction',
        project['description']
    )
    
    # Update keywords
    keywords_str = ', '.join(project['keywords'])
    # The content replacement for keywords is already done in the template
    
    # Update authors (this would need more complex parsing, for now we'll document it)
    print("Note: Please manually update author information in index.html based on config.json")
    
    # Write back
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Updated index.html with configuration values")

def create_example_projects():
    """Create example project configurations"""
    examples = {
        'phm-agent': {
            'project': {
                'name': 'PHM Agent: Intelligent Maintenance Assistant',
                'type': 'agent',
                'description': 'An AI-powered agent for automated prognostic health management and maintenance decision support'
            },
            'features': {
                'show_api_docs': True,
                'show_demo': True,
                'show_case_studies': True
            }
        },
        'phm-benchmark': {
            'project': {
                'name': 'PHMBench: Comprehensive PHM Evaluation Suite',
                'type': 'benchmark',
                'description': 'A standardized benchmark for evaluating prognostic health management algorithms'
            },
            'features': {
                'show_datasets': True,
                'show_leaderboard': True,
                'show_evaluation': True
            }
        }
    }
    
    os.makedirs('examples', exist_ok=True)
    
    for name, config in examples.items():
        example_path = f'examples/{name}'
        os.makedirs(example_path, exist_ok=True)
        
        # Create config file for example
        with open(f'{example_path}/config.json', 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
        
        # Create README
        with open(f'{example_path}/README.md', 'w', encoding='utf-8') as f:
            f.write(f"# {config['project']['name']} Example\n\n")
            f.write(f"{config['project']['description']}\n\n")
            f.write("## Setup\n\n")
            f.write("1. Copy this config.json to the root directory\n")
            f.write("2. Run `python setup.py --customize` to apply the configuration\n")
            f.write("3. Update content sections as needed\n")
    
    print("Created example project configurations in examples/ directory")

def main():
    """Main setup function"""
    if len(sys.argv) < 2:
        print("PHM-LLM Template Setup")
        print("Usage: python setup.py [command]")
        print("Commands:")
        print("  --customize        Apply config.json settings to template")
        print("  --variant TYPE     Create variant for TYPE (agent|benchmark|model|dataset)")
        print("  --examples         Create example project configurations")
        print("  --all             Run all setup tasks")
        return
    
    command = sys.argv[1]
    config = load_config()
    
    if command == '--customize':
        update_index_html(config)
        print("Template customized successfully!")
        
    elif command == '--variant':
        if len(sys.argv) < 3:
            print("Please specify variant type: agent, benchmark, model, or dataset")
            return
        
        variant_type = sys.argv[2]
        sections = create_project_variant(config, variant_type)
        print(f"Variant '{variant_type}' created with additional sections: {sections}")
        
    elif command == '--examples':
        create_example_projects()
        
    elif command == '--all':
        update_index_html(config)
        create_example_projects()
        print("Full setup completed!")
        
    else:
        print(f"Unknown command: {command}")
        print("Use --help to see available commands")

if __name__ == '__main__':
    main()