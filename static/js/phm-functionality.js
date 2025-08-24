/**
 * PHM-Agent Interactive Functionality
 * Provides dynamic features for PHM Agent project pages
 * Includes multi-agent demo, API documentation, and architecture visualization
 */

// Configuration loader
class PHMConfig {
    constructor() {
        this.config = null;
        this.loadConfig();
    }
    
    async loadConfig() {
        try {
            const response = await fetch('config.json');
            this.config = await response.json();
            this.applyConfig();
        } catch (error) {
            console.warn('Could not load config.json, using default values');
            this.config = this.getDefaultConfig();
        }
    }
    
    getDefaultConfig() {
        return {
            project: { name: "PHM-LLM Template" },
            theme: {
                primary_color: "#3273dc",
                secondary_color: "#363636",
                accent_color: "#48c774"
            },
            features: {
                show_performance_metrics: true,
                show_datasets: true
            }
        };
    }
    
    applyConfig() {
        // Apply theme colors
        if (this.config.theme) {
            document.documentElement.style.setProperty('--phm-primary', this.config.theme.primary_color);
            document.documentElement.style.setProperty('--phm-secondary', this.config.theme.secondary_color);
            document.documentElement.style.setProperty('--phm-accent', this.config.theme.accent_color);
        }
        
        // Hide/show sections based on features
        this.toggleSections();
    }
    
    toggleSections() {
        const features = this.config.features || {};
        
        // Toggle sections based on configuration
        this.toggleElement('.performance-metrics-section', features.show_performance_metrics);
        this.toggleElement('.datasets-section', features.show_datasets);
        this.toggleElement('.api-docs-section', features.show_api_docs);
        this.toggleElement('.demo-section', features.show_demo);
    }
    
    toggleElement(selector, show) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = show ? 'block' : 'none';
        }
    }
}

// Performance metrics visualization
class MetricsVisualizer {
    constructor() {
        this.initializeCharts();
    }
    
    initializeCharts() {
        // Initialize performance comparison charts
        this.createPerformanceChart();
        this.createRULChart();
        this.updateMetricCounters();
    }
    
    createPerformanceChart() {
        // Create a simple performance comparison visualization
        const performanceTables = document.querySelectorAll('.performance-table table');
        
        performanceTables.forEach(table => {
            this.enhancePerformanceTable(table);
        });
    }
    
    enhancePerformanceTable(table) {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach((row, index) => {
            const cells = row.querySelectorAll('td');
            
            // Highlight best performance
            if (index === 0) { // Assuming first row is best
                row.classList.add('best-result');
                cells.forEach(cell => cell.classList.add('best-result'));
            }
            
            // Add hover effects
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = '#f0f8ff';
            });
            
            row.addEventListener('mouseleave', () => {
                if (!row.classList.contains('best-result')) {
                    row.style.backgroundColor = '';
                }
            });
        });
    }
    
    createRULChart() {
        // Placeholder for RUL prediction visualization
        // In a real implementation, this would use Chart.js or D3.js
        const chartContainers = document.querySelectorAll('.rul-chart');
        
        chartContainers.forEach(container => {
            this.createSimpleChart(container);
        });
    }
    
    createSimpleChart(container) {
        // Create a simple SVG chart placeholder
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '200');
        svg.style.background = '#f8f9fa';
        svg.style.borderRadius = '8px';
        
        // Add chart title
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        title.setAttribute('x', '50%');
        title.setAttribute('y', '30');
        title.setAttribute('text-anchor', 'middle');
        title.setAttribute('fill', '#2d3748');
        title.textContent = 'RUL Prediction Visualization';
        title.style.fontSize = '14px';
        title.style.fontWeight = '600';
        
        svg.appendChild(title);
        container.appendChild(svg);
    }
    
    updateMetricCounters() {
        // Animate metric counters
        const metrics = document.querySelectorAll('.metric-value');
        
        metrics.forEach(metric => {
            this.animateCounter(metric);
        });
    }
    
    animateCounter(element) {
        const target = parseFloat(element.textContent) || 0;
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format number appropriately
            const formatted = target % 1 === 0 ? 
                Math.round(current).toString() : 
                current.toFixed(1);
            
            element.textContent = formatted;
        }, duration / steps);
    }
}

// Health status monitoring
class HealthMonitor {
    constructor() {
        this.initializeStatusIndicators();
        this.startStatusUpdates();
    }
    
    initializeStatusIndicators() {
        const indicators = document.querySelectorAll('.health-indicator');
        
        indicators.forEach(indicator => {
            this.updateHealthStatus(indicator);
        });
    }
    
    updateHealthStatus(indicator) {
        // Simulate health status updates
        const statuses = ['good', 'warning', 'critical'];
        const currentStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        // Remove existing classes
        indicator.classList.remove('health-good', 'health-warning', 'health-critical');
        
        // Add new status class
        indicator.classList.add(`health-${currentStatus}`);
        
        // Update status dot if present
        const statusDot = indicator.querySelector('.status-dot');
        if (statusDot) {
            statusDot.classList.remove('online', 'warning', 'offline');
            statusDot.classList.add(currentStatus === 'good' ? 'online' : 
                                   currentStatus === 'warning' ? 'warning' : 'offline');
        }
    }
    
    startStatusUpdates() {
        // Update status indicators every 30 seconds (demo purposes)
        setInterval(() => {
            const indicators = document.querySelectorAll('.health-indicator');
            indicators.forEach(indicator => {
                if (Math.random() > 0.7) { // Only update some indicators
                    this.updateHealthStatus(indicator);
                }
            });
        }, 30000);
    }
}

// Dataset information handler
class DatasetHandler {
    constructor() {
        this.initializeDatasetCards();
    }
    
    initializeDatasetCards() {
        const cards = document.querySelectorAll('.dataset-card');
        
        cards.forEach(card => {
            this.enhanceDatasetCard(card);
        });
    }
    
    enhanceDatasetCard(card) {
        // Add interactive hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 8px 25px rgba(43, 108, 176, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
        
        // Add click functionality for expansion
        card.addEventListener('click', () => {
            this.toggleDatasetDetails(card);
        });
    }
    
    toggleDatasetDetails(card) {
        const details = card.querySelector('.dataset-details');
        if (details) {
            const isVisible = details.style.display !== 'none';
            details.style.display = isVisible ? 'none' : 'block';
            
            // Animate expansion
            if (!isVisible) {
                details.style.opacity = '0';
                details.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    details.style.transition = 'all 0.3s ease';
                    details.style.opacity = '1';
                    details.style.transform = 'translateY(0)';
                }, 10);
            }
        }
    }
}

// Interactive demo features
class DemoFeatures {
    constructor() {
        this.initializeDemoElements();
    }
    
    initializeDemoElements() {
        this.setupInteractiveButtons();
        this.setupTooltips();
        this.setupModalHandlers();
    }
    
    setupInteractiveButtons() {
        const buttons = document.querySelectorAll('.phm-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleButtonClick(e, button);
            });
            
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
            });
        });
    }
    
    handleButtonClick(event, button) {
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'translateY(-2px)';
        }, 150);
        
        // Handle specific button actions
        const action = button.dataset.action;
        if (action) {
            this.executeAction(action);
        }
    }
    
    executeAction(action) {
        switch (action) {
            case 'run-demo':
                this.runDemo();
                break;
            case 'run-agent-demo':
                window.runAgentDemo();
                break;
            case 'download-data':
                this.downloadData();
                break;
            case 'view-results':
                this.viewResults();
                break;
            default:
                console.log(`Unknown action: ${action}`);
        }
    }
    
    runDemo() {
        console.log('Running PHM demo...');
        // Placeholder for demo functionality
        this.showNotification('Demo started successfully!', 'success');
    }
    
    downloadData() {
        console.log('Downloading dataset...');
        this.showNotification('Download will begin shortly...', 'info');
    }
    
    viewResults() {
        console.log('Viewing detailed results...');
        this.showNotification('Loading detailed results...', 'info');
    }
    
    setupTooltips() {
        const elements = document.querySelectorAll('[data-tooltip]');
        
        elements.forEach(element => {
            const tooltip = this.createTooltip(element.dataset.tooltip);
            
            element.addEventListener('mouseenter', (e) => {
                this.showTooltip(e, tooltip);
            });
            
            element.addEventListener('mouseleave', () => {
                this.hideTooltip(tooltip);
            });
        });
    }
    
    createTooltip(text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'phm-tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: #2d3748;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.875rem;
            z-index: 1000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
        `;
        
        document.body.appendChild(tooltip);
        return tooltip;
    }
    
    showTooltip(event, tooltip) {
        const rect = event.target.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
        tooltip.style.opacity = '1';
    }
    
    hideTooltip(tooltip) {
        tooltip.style.opacity = '0';
    }
    
    setupModalHandlers() {
        // Handle modal dialogs for detailed views
        const modalTriggers = document.querySelectorAll('[data-modal]');
        
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.dataset.modal;
                this.openModal(modalId);
            });
        });
    }
    
    openModal(modalId) {
        // Placeholder for modal functionality
        console.log(`Opening modal: ${modalId}`);
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `phm-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--phm-${type === 'success' ? 'accent' : 'primary'});
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 6px;
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Agent-specific functionality
class AgentDemo {
    constructor() {
        this.scenarios = [
            {
                id: 'bearing-fault',
                name: 'Bearing Fault Diagnosis',
                description: 'Industrial motor bearing showing early signs of wear',
                status: 'warning',
                equipment: 'Motor-001',
                data: {
                    vibration: 4.2,
                    temperature: 68,
                    current: 12.5,
                    speed: 1800
                }
            },
            {
                id: 'pump-degradation',
                name: 'Pump Performance Degradation',
                description: 'Centrifugal pump with declining efficiency',
                status: 'critical',
                equipment: 'Pump-007',
                data: {
                    flow_rate: 85,
                    pressure: 45,
                    vibration: 6.1,
                    temperature: 75
                }
            },
            {
                id: 'turbine-maintenance',
                name: 'Wind Turbine Predictive Maintenance',
                description: 'Offshore wind turbine approaching maintenance window',
                status: 'good',
                equipment: 'Turbine-15',
                data: {
                    power_output: 2.1,
                    wind_speed: 12.5,
                    nacelle_temp: 42,
                    vibration: 2.8
                }
            }
        ];
        this.currentScenario = null;
        this.initializeDemo();
    }
    
    initializeDemo() {
        this.populateScenarioSelector();
        this.setupEventListeners();
    }
    
    populateScenarioSelector() {
        const selector = document.getElementById('scenario-selector');
        if (selector) {
            selector.innerHTML = '<option value="">Select a scenario...</option>';
            this.scenarios.forEach(scenario => {
                const option = document.createElement('option');
                option.value = scenario.id;
                option.textContent = scenario.name;
                selector.appendChild(option);
            });
        }
    }
    
    setupEventListeners() {
        const selector = document.getElementById('scenario-selector');
        if (selector) {
            selector.addEventListener('change', (e) => {
                this.loadScenario(e.target.value);
            });
        }
        
        const input = document.getElementById('demo-input');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.runAgentDemo();
                }
            });
        }
    }
    
    loadScenario(scenarioId) {
        const scenario = this.scenarios.find(s => s.id === scenarioId);
        if (!scenario) return;
        
        this.currentScenario = scenario;
        
        // Update scenario display
        const display = document.getElementById('scenario-display');
        if (display) {
            display.innerHTML = `
                <div class="box">
                    <h5 class="title is-6">${scenario.name}</h5>
                    <p class="subtitle is-7">${scenario.description}</p>
                    <div class="columns">
                        <div class="column">
                            <strong>Equipment:</strong> ${scenario.equipment}
                        </div>
                        <div class="column">
                            <span class="tag is-${scenario.status === 'good' ? 'success' : scenario.status === 'warning' ? 'warning' : 'danger'}">
                                ${scenario.status.toUpperCase()}
                            </span>
                        </div>
                    </div>
                    <div class="content is-small">
                        <strong>Current Readings:</strong>
                        <ul>
                            ${Object.entries(scenario.data).map(([key, value]) => 
                                `<li>${key.replace('_', ' ')}: ${value}${this.getUnit(key)}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
            `;
            display.style.display = 'block';
        }
        
        // Pre-fill demo input with suggested query
        const input = document.getElementById('demo-input');
        if (input) {
            input.placeholder = `Ask about ${scenario.equipment}: "What's the health status?" or "Predict maintenance needs"`;
        }
    }
    
    getUnit(metric) {
        const units = {
            vibration: ' mm/s',
            temperature: '°C',
            current: 'A',
            speed: ' RPM',
            flow_rate: ' L/min',
            pressure: ' bar',
            power_output: ' MW',
            wind_speed: ' m/s',
            nacelle_temp: '°C'
        };
        return units[metric] || '';
    }
    
    runAgentDemo() {
        const input = document.getElementById('demo-input');
        const responseDiv = document.getElementById('demo-response');
        const responseText = document.getElementById('agent-response');
        
        if (!input || !responseDiv || !responseText) return;
        
        const query = input.value.trim();
        if (!query) {
            this.showError('Please enter a question for the PHM Agent');
            return;
        }
        
        // Show loading state
        responseText.textContent = 'Agent is analyzing...';
        responseDiv.style.display = 'block';
        
        // Simulate agent response
        setTimeout(() => {
            const response = this.generateAgentResponse(query);
            responseText.innerHTML = response;
        }, 1500);
    }
    
    generateAgentResponse(query) {
        if (!this.currentScenario) {
            return 'Please select a scenario first to get contextual analysis.';
        }
        
        const scenario = this.currentScenario;
        const lowerQuery = query.toLowerCase();
        
        if (lowerQuery.includes('health') || lowerQuery.includes('status')) {
            return `
                <strong>Health Assessment for ${scenario.equipment}:</strong><br>
                Status: <span class="tag is-${scenario.status === 'good' ? 'success' : scenario.status === 'warning' ? 'warning' : 'danger'}">${scenario.status.toUpperCase()}</span><br>
                ${this.getHealthAnalysis(scenario)}
            `;
        } else if (lowerQuery.includes('predict') || lowerQuery.includes('maintenance') || lowerQuery.includes('rul')) {
            return `
                <strong>Predictive Maintenance Analysis:</strong><br>
                ${this.getMaintenanceRecommendation(scenario)}
            `;
        } else if (lowerQuery.includes('recommend') || lowerQuery.includes('action')) {
            return `
                <strong>Agent Recommendations:</strong><br>
                ${this.getActionRecommendations(scenario)}
            `;
        } else {
            return `
                <strong>General Analysis:</strong><br>
                I can help you with health assessment, predictive maintenance, and recommendations for ${scenario.equipment}. 
                Try asking about health status, maintenance predictions, or recommended actions.
            `;
        }
    }
    
    getHealthAnalysis(scenario) {
        const analyses = {
            'bearing-fault': 'Elevated vibration levels detected. Early bearing wear indicated. Monitoring frequency should be increased.',
            'pump-degradation': 'Critical: Flow rate below threshold, pressure declining. Immediate inspection recommended.',
            'turbine-maintenance': 'All systems operating within normal parameters. Scheduled maintenance window approaching in 2 weeks.'
        };
        return analyses[scenario.id] || 'System analysis in progress...';
    }
    
    getMaintenanceRecommendation(scenario) {
        const recommendations = {
            'bearing-fault': '<strong>RUL Estimate:</strong> 45-60 days<br><strong>Action:</strong> Schedule bearing replacement within 4 weeks.',
            'pump-degradation': '<strong>RUL Estimate:</strong> 5-10 days<br><strong>Action:</strong> Immediate maintenance required. Risk of failure.',
            'turbine-maintenance': '<strong>RUL Estimate:</strong> 180+ days<br><strong>Action:</strong> Continue normal operation. Next service in 2 weeks.'
        };
        return recommendations[scenario.id] || 'Analyzing maintenance requirements...';
    }
    
    getActionRecommendations(scenario) {
        const actions = {
            'bearing-fault': '1. Increase monitoring frequency to daily<br>2. Order replacement bearings<br>3. Schedule downtime window',
            'pump-degradation': '1. Reduce operating speed immediately<br>2. Inspect impeller and seals<br>3. Have backup pump ready',
            'turbine-maintenance': '1. Continue normal operation<br>2. Prepare for scheduled service<br>3. Monitor weather conditions'
        };
        return actions[scenario.id] || 'Generating recommendations...';
    }
    
    showError(message) {
        const responseDiv = document.getElementById('demo-response');
        const responseText = document.getElementById('agent-response');
        
        if (responseDiv && responseText) {
            responseText.innerHTML = `<span style="color: #ff3860;">${message}</span>`;
            responseDiv.style.display = 'block';
        }
    }
}

// Architecture gallery functionality
class ArchitectureGallery {
    constructor() {
        this.setupGalleryHandlers();
    }
    
    setupGalleryHandlers() {
        // Handle architecture detail clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('[onclick*="showArchitectureDetails"]')) {
                e.preventDefault();
                const onClick = e.target.closest('[onclick*="showArchitectureDetails"]').getAttribute('onclick');
                const match = onClick.match(/showArchitectureDetails\('([^']+)'\)/);
                if (match) {
                    this.showArchitectureDetails(match[1]);
                }
            }
        });
    }
    
    showArchitectureDetails(type) {
        const details = {
            'multi-agent': {
                title: 'Multi-Agent System Architecture',
                content: `
                    <div class="content">
                        <h4>Distributed Agent Coordination</h4>
                        <p>Our multi-agent system consists of specialized agents working in coordination:</p>
                        <ul>
                            <li><strong>Monitor Agents:</strong> Continuous data collection and preprocessing</li>
                            <li><strong>Analysis Agents:</strong> Pattern recognition and anomaly detection</li>
                            <li><strong>Decision Agents:</strong> Maintenance planning and resource optimization</li>
                            <li><strong>Coordination Agent:</strong> Inter-agent communication and task distribution</li>
                        </ul>
                        <p>Each agent operates autonomously while sharing critical insights through our communication protocol.</p>
                    </div>
                `
            },
            'decision-flow': {
                title: 'Autonomous Decision Pipeline',
                content: `
                    <div class="content">
                        <h4>Agent Decision Process</h4>
                        <ol>
                            <li><strong>Data Ingestion:</strong> Real-time sensor data processing</li>
                            <li><strong>Health Assessment:</strong> Multi-modal analysis and pattern matching</li>
                            <li><strong>Risk Evaluation:</strong> Failure probability and impact assessment</li>
                            <li><strong>Decision Making:</strong> Optimal maintenance strategy selection</li>
                            <li><strong>Action Execution:</strong> Automated scheduling and resource allocation</li>
                        </ol>
                        <p>The pipeline operates with sub-second response times and 94.3% accuracy.</p>
                    </div>
                `
            },
            'communication': {
                title: 'Inter-Agent Communication',
                content: `
                    <div class="content">
                        <h4>Communication Protocol</h4>
                        <p>Agents communicate through a structured message-passing system:</p>
                        <ul>
                            <li><strong>Event Broadcasting:</strong> Critical status changes shared immediately</li>
                            <li><strong>Knowledge Sharing:</strong> Historical patterns and learned insights</li>
                            <li><strong>Coordination Messages:</strong> Task assignments and resource requests</li>
                            <li><strong>Consensus Building:</strong> Collective decision making for complex scenarios</li>
                        </ul>
                        <p>The protocol ensures 99.7% message delivery and maintains system coherence.</p>
                    </div>
                `
            },
            'learning': {
                title: 'Self-Learning Capabilities',
                content: `
                    <div class="content">
                        <h4>Continuous Improvement</h4>
                        <p>Our agents employ multiple learning strategies:</p>
                        <ul>
                            <li><strong>Reinforcement Learning:</strong> Optimization based on maintenance outcomes</li>
                            <li><strong>Transfer Learning:</strong> Knowledge adaptation across equipment types</li>
                            <li><strong>Federated Learning:</strong> Distributed learning without data sharing</li>
                            <li><strong>Meta-Learning:</strong> Rapid adaptation to new environments</li>
                        </ul>
                        <p>Learning rate averages 0.12 improvements per week with 87.5% coordination efficiency.</p>
                    </div>
                `
            }
        };
        
        const detail = details[type];
        if (!detail) return;
        
        this.showModal(detail.title, detail.content);
    }
    
    showModal(title, content) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('architecture-modal');
        if (!modal) {
            modal = this.createModal();
        }
        
        // Update content
        modal.querySelector('.modal-card-title').textContent = title;
        modal.querySelector('.modal-card-body').innerHTML = content;
        
        // Show modal
        modal.classList.add('is-active');
    }
    
    createModal() {
        const modal = document.createElement('div');
        modal.id = 'architecture-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Architecture Details</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    Content will be loaded here...
                </section>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Setup close handlers
        const closeButtons = modal.querySelectorAll('.delete, .modal-background');
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal.classList.remove('is-active');
            });
        });
        
        return modal;
    }
}

// API documentation functionality
class APIDocumentation {
    constructor() {
        this.setupAPIHandlers();
    }
    
    setupAPIHandlers() {
        const tryButtons = document.querySelectorAll('[onclick*="tryAPI"]');
        tryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const endpoint = button.getAttribute('data-endpoint');
                this.tryAPI(endpoint);
            });
        });
    }
    
    showAPI(endpoint) {
        console.log(`Showing API documentation for: ${endpoint}`);
        // This would typically show detailed API documentation
    }
    
    tryAPI(endpoint) {
        const examples = {
            '/api/v1/health': {
                method: 'GET',
                response: {
                    equipment_id: 'pump-001',
                    status: 'warning',
                    health_score: 0.73,
                    recommendations: ['Increase monitoring frequency', 'Schedule inspection'],
                    next_maintenance: '2024-02-15'
                }
            },
            '/api/v1/predict': {
                method: 'POST',
                response: {
                    equipment_id: 'motor-005',
                    rul_days: 45,
                    confidence: 0.87,
                    failure_probability: 0.23,
                    recommended_action: 'Schedule maintenance in 3-4 weeks'
                }
            }
        };
        
        const example = examples[endpoint];
        if (example) {
            this.showAPIResponse(endpoint, example);
        }
    }
    
    showAPIResponse(endpoint, example) {
        const responseArea = document.getElementById('api-response');
        if (!responseArea) return;
        
        responseArea.innerHTML = `
            <h5 class="title is-6">${example.method} ${endpoint}</h5>
            <pre><code>${JSON.stringify(example.response, null, 2)}</code></pre>
        `;
        responseArea.style.display = 'block';
    }
}

// Citation management
class CitationManager {
    constructor() {
        this.setupCitationHandlers();
    }
    
    setupCitationHandlers() {
        // Handle citation tabs
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('citation-tab')) {
                e.preventDefault();
                const paperId = e.target.getAttribute('data-paper');
                this.showCitation(paperId);
            }
        });
        
        // Handle copy citation buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.copy-citation')) {
                e.preventDefault();
                const button = e.target.closest('.copy-citation');
                const paperId = button.getAttribute('data-paper');
                this.copyCitation(paperId);
            }
        });
    }
    
    showCitation(paperId) {
        // Update active tab
        document.querySelectorAll('.citation-tab').forEach(tab => {
            tab.classList.remove('is-active');
            if (tab.getAttribute('data-paper') === paperId) {
                tab.classList.add('is-active');
            }
        });
        
        // Show corresponding citation content
        document.querySelectorAll('.citation-content').forEach(content => {
            content.style.display = 'none';
            if (content.id === `citation-${paperId}`) {
                content.style.display = 'block';
            }
        });
    }
    
    copyCitation(paperId) {
        const citationContent = document.querySelector(`#citation-${paperId} code`);
        if (citationContent) {
            navigator.clipboard.writeText(citationContent.textContent).then(() => {
                this.showCopyFeedback('Citation copied to clipboard!');
            }).catch(() => {
                this.showCopyFeedback('Failed to copy citation', 'error');
            });
        }
    }
    
    showCopyFeedback(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification is-${type === 'error' ? 'danger' : 'success'} is-light`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            min-width: 250px;
        `;
        notification.innerHTML = `
            <button class="delete"></button>
            ${message}
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove and handle close button
        const removeNotification = () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        };
        
        notification.querySelector('.delete').addEventListener('click', removeNotification);
        setTimeout(removeNotification, 3000);
    }
}

// Global functions for onclick handlers
window.loadScenario = (scenarioId) => {
    if (window.agentDemo) {
        window.agentDemo.loadScenario(scenarioId);
    }
};

window.runAgentDemo = () => {
    if (window.agentDemo) {
        window.agentDemo.runAgentDemo();
    }
};

window.showArchitectureDetails = (type) => {
    if (window.architectureGallery) {
        window.architectureGallery.showArchitectureDetails(type);
    }
};

window.showAPI = (endpoint) => {
    if (window.apiDocumentation) {
        window.apiDocumentation.showAPI(endpoint);
    }
};

window.tryAPI = (endpoint) => {
    if (window.apiDocumentation) {
        window.apiDocumentation.tryAPI(endpoint);
    }
};

window.showCitation = (paperId) => {
    if (window.citationManager) {
        window.citationManager.showCitation(paperId);
    }
};

window.copyCitation = (paperId) => {
    if (window.citationManager) {
        window.citationManager.copyCitation(paperId);
    }
};

// Initialize all PHM functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing PHM-Agent Template...');
    
    // Initialize core components
    const config = new PHMConfig();
    const metricsVisualizer = new MetricsVisualizer();
    const healthMonitor = new HealthMonitor();
    const datasetHandler = new DatasetHandler();
    const demoFeatures = new DemoFeatures();
    
    // Initialize Agent-specific components
    window.agentDemo = new AgentDemo();
    window.architectureGallery = new ArchitectureGallery();
    window.apiDocumentation = new APIDocumentation();
    window.citationManager = new CitationManager();
    
    console.log('PHM-Agent Template initialized successfully!');
});