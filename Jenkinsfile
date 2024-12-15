pipeline { 

    agent any  

    stages { 

        stage('Checkout') { 

            steps { 

                //git 'https://github.com/nelzone1/zaq-portfolio-website.git' 
                git branch: 'main', url: 'https://github.com/nelzone1/zaq-portfolio-website.git'

            } 

        } 

        stage('Build') { 

            steps { 

                script { 

                    // Install npm dependencies and build the project 

                    sh 'npm install' 

                    sh 'npm run build' 

                } 

            } 

        }  
    } 
} 