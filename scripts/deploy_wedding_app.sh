#!/bin/bash

# Variables
FRONTEND_DIR=~/weddingApp/frontend
BACKEND_DIR=~/weddingApp/backend
RPI_USER=aledi
RPI_IP=192.168.1.218  # Replace with your Raspberry Pi IP address
NGINX_ROOT=/var/www/html/weddingApp

# Build the Frontend
echo "Building the frontend..."
cd $FRONTEND_DIR
if ! npm run build; then
  echo "Frontend build failed!"
  exit 1
fi

# Copy Build Files to Raspberry Pi
echo "Copying build files to Raspberry Pi..."
scp -r build $RPI_USER@$RPI_IP:$NGINX_ROOT

# Set up Nginx
echo "Setting up Nginx..."
ssh $RPI_USER@$RPI_IP << EOF
  sudo apt update
  sudo apt install -y nginx

  # Create Nginx configuration for the app
  sudo tee /etc/nginx/sites-available/default > /dev/null << EOL
server {
    listen 8080;

    location / {
        root $NGINX_ROOT;
        index index.html index.htm;
        try_files \$uri /index.html; # For React Router support
    }

    location /api {
        proxy_pass http://localhost:5000; # Adjust if your backend runs on a different port
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

  # Restart Nginx
  sudo systemctl restart nginx
EOF

# Create Backend Directory Structure on Raspberry Pi
echo "Creating backend directory structure on Raspberry Pi..."
ssh $RPI_USER@$RPI_IP << EOF
  mkdir -p /home/aledi/weddingApp/backend/controllers
  mkdir -p /home/aledi/weddingApp/backend/models
  mkdir -p /home/aledi/weddingApp/backend/routes
  mkdir -p /home/aledi/weddingApp/backend/uploads
  mkdir -p /home/aledi/weddingApp/frontend/src
EOF

# Copy Backend Files
echo "Copying backend files to Raspberry Pi..."
scp -r $BACKEND_DIR/* $RPI_USER@$RPI_IP:/home/$RPI_USER/weddingApp/backend/

# Copy Frontend Files
echo "Copying frontend files to Raspberry Pi..."
scp -r $FRONTEND_DIR/src/* $RPI_USER@$RPI_IP:/home/$RPI_USER/weddingApp/frontend/src/
scp -r $FRONTEND_DIR/package.json $RPI_USER@$RPI_IP:/home/$RPI_USER/weddingApp/frontend/
scp -r $FRONTEND_DIR/package-lock.json $RPI_USER@$RPI_IP:/home/$RPI_USER/weddingApp/frontend/

# Run Backend Server
echo "Starting backend server on Raspberry Pi..."
ssh $RPI_USER@$RPI_IP << EOF
  cd /home/$RPI_USER/weddingApp/backend
  npm install

  # Kill existing backend server if it's running
  if lsof -i :5000; then
    echo "Stopping existing backend server..."
    kill \$(lsof -t -i :5000)
  fi

  # Install pm2 globally using sudo
  sudo npm install -g pm2

  # Set environment variables if needed
  export MONGODB_URI="mongodb://localhost:27017/your_db_name" # Adjust accordingly

  # Start backend using pm2 for better management
  pm2 start index.js --name wedding-backend -f
EOF


echo "Deployment completed! Your wedding app should be available at http://$RPI_IP/"
