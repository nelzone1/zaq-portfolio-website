pipeline { 
    agent any  
    stages { 

        stage('Checkout') { 
            steps { 
                git branch: 'main', url: 'https://github.com/nelzone1/zaq-portfolio-website.git'
            } 
        } 

        stage('Build') { 
            steps { 
                script { 
                    // Install npm dependencies and build the project 
                    bat 'npm install' 
                    bat 'npm run build' 
                } 
            } 
        }  
    } 
} 