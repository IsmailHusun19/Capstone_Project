pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }
    environment {
        PUBLIC_URL       = 'https://github.com/IsmailHusun19/Capstone_Project'
        // konfigurasi credential untuk menghubung github agar dapat diakses oleh jenkins dengan github token 
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
                  // Menerapkan beberapa Tahapan Build
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                // Menerapkan beberapa Tahapan test
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
