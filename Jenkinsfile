pipeline {
    agent any

    environment {
        IMAGE_NAME = "frontend"
        CONTAINER_NAME = "frontend-container"
    }

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Docker') {
            steps {
                bat 'docker --version'
            }
        }

         stage('Stop Existing Containers') {
            steps {
                bat 'docker compose down || true'
            }
        }


     stage('Build Containers') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }
    }
}
