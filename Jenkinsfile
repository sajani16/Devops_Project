pipeline {
    agent any

    environment {
        IMAGE_NAME = "frontend"
        CONTAINER_NAME = "frontend-container"
    }

    triggers {
        pollSCM('H/5 * * * *')
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

        stage('Build Docker Image') {
            steps {
                dir('frontend') {
                    bat '''
                    docker build -t %IMAGE_NAME% .
                    '''
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop %CONTAINER_NAME% || exit 0
                docker rm %CONTAINER_NAME% || exit 0
                '''
            }
        }

        stage('Run Container') {
            steps {
                bat '''
                docker run -d -p 3000:80 --name %CONTAINER_NAME% %IMAGE_NAME%
                '''
            }
        }

        stage('Verify Container') {
            steps {
                bat '''
                docker ps | findstr %CONTAINER_NAME%
                '''
            }
        }

        stage('Success') {
            steps {
                echo 'Docker image built and container deployed successfully'
            }
        }
    }
}
