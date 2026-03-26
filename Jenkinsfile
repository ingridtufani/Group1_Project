pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'CI=true npm test -- --watchAll=false'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}