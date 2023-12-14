pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }
    environment {
        PUBLIC_URL       = 'https://github.com/IsmailHusun19/Capstone_Project'
        GIT_CREDENTIALS= credentials('jenkins-github-token')
        GITHUB_REPOSITORY = 'IsmailHusun19/Capstone_Project'
    }
    stages {
        stage('Checkout') {
      steps {
        script {
          checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/IsmailHusun19/Capstone_Project', credentialsId: GIT_CREDENTIALS]]])
        }
      }
    }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
            sh 'chmod +x ./jenkins/scripts/test.sh'
               sh './jenkins/scripts/test.sh'
            }
        }
           
        stage('Deploy') {
            steps {
                echo'Tahapan deploy ke Github Pages'
                //Dengan beberapa Konfigurasi seperti Credential pada github yang saya terapkan jenkins-github-token untuk credential
                // sh 'chmod +x ./jenkins/scripts/github-pages.sh && ./jenkins/scripts/github-pages.sh'
            }
        }
    }
}
