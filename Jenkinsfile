pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Node & NPM') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    
                    bat 'npm install --include=dev'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('frontend') {
                    
                    bat 'set NODE_ENV=production'
                }
            }
        }

        stage('Verify Build Output') {
            steps {
                dir('frontend') {
                    bat '''
                    if exist dist (
                        echo Build folder exists
                    ) else (
                        echo Build failed
                        exit 1
                    )
                    '''
                }
            }
        }

        stage('Success') {
            steps {
                bat 'echo React CI pipeline completed successfully'
            }
        }
    }
}
