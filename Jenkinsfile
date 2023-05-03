  pipeline {
    agent any
    stages {
      stage ('Checkout code'){
        steps {
          git(url: 'https://github.com/Said-Ait-Driss/said-ait-driss.github.io', branch: 'main')
        }
      }
      stage ('installing dependencies'){
          when {
              changeRequest target: 'main'
          }
          steps {
            echo '📦️ installing deps ...'
          }
      }
    }
    post {
        always {
            sh 'echo cleanup after everything'
            notifyEvents message: 'Hello <b>world</b>', token: 'reCT8w6E2oxOgYgyvf9uyjJ1EnU4ah21'
            notifyEvents message: 'installing deps ...', token: 'reCT8w6E2oxOgYgyvf9uyjJ1EnU4ah21'
        }

        failure {
            sh 'echo only on failure' 
        }

        success {
            sh 'echo only on success' 
        }

        changed {
            sh 'echo only on if status changed from success to failure or vice a versa' 
        }

        unstable {
            sh 'echo only on unstable' 
        }
    }
  }
  
  
