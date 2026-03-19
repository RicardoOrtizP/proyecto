pipeline {
    agent any

    tools {
        nodejs 'NodeJS 24.0.0'
    }

    stages {
        stage("Preparacion") {
            steps {
                echo "Limpiando entorno..."
                sh "npm install"
            }
        }

        stage("Calidad de codigo") {
            steps {
                echo "Ejecutando Tests..."
                // sh "npm test" // Descomentar cuanto se tengan tests
            }
        }

        stage('Build') {
            steps {
                echo 'Compilando proyecto...'
                // sh 'npm run build --if-present' // Descomentar cuando se tenga build
            }
        }

        stage('Deploy Local') {
            steps {
                echo 'Desplegando en ambiente de pruebas...'
                // Aquí podrías usar PM2 para mantener la app viva localmente
                // sh 'npx pm2 restart mi-app || npx pm2 start dist/main.js --name mi-app' // Descomentar cuando se tenga PM2
            }
        }
    }
}