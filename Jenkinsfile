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
                    bat 'npm ci'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('frontend') {
                    // Example deployment: copy all files to a deployment folder
                    bat '''
                    if not exist ..\\deploy mkdir ..\\deploy
                    xcopy /E /I /Y * ..\\deploy\\
                    echo Files deployed to deploy folder
                    '''
                }
            }
        }

        stage('Success') {
            steps {
                bat 'echo React CI pipeline up to deploy completed successfully'
            }
        }
    }
}
