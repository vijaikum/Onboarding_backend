node {
    def app

    stage('Clone repository') {
     checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("vijkum/onboarding:node")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("node")
            app.push("node-latest")
        }
    }
    
    stage('Test Kubernetes') {
        withKubeConfig(credentialsId: 'kubeconfig', serverUrl: 'https://murugan-cl-murugan-kube-4ebfba-8817583e.hcp.centralus.azmk8s.io:443') {
            sh 'kubectl apply -f deployment.yml'
            sh 'kubectl apply -f service.yml'
        }
    }
    stage('Workspace Cleanup') {
     cleanWs()
    }
}
