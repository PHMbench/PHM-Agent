/**
 * PHM-LLM Template Interactive Functionality
 * Provides dynamic features for PHM project pages
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

// Initialize all PHM functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing PHM-LLM Template...');
    
    // Initialize all components
    const config = new PHMConfig();
    const metricsVisualizer = new MetricsVisualizer();
    const healthMonitor = new HealthMonitor();
    const datasetHandler = new DatasetHandler();
    const demoFeatures = new DemoFeatures();
    
    console.log('PHM-LLM Template initialized successfully!');
});