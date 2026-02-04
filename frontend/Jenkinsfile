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
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Verify Build Output') {
            steps {
                bat '''
                if exist build (
                    echo Build folder exists
                ) else (
                    echo Build failed
                    exit 1
                )
                '''
            }
        }

        stage('Success') {
            steps {
                bat 'echo React CI pipeline completed successfully'
            }
        }
    }
}
