#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Add all files
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy portfolio to GitHub Pages"

# Push to main branch
echo "Pushing to main branch..."
git push origin main

echo "Deployment complete! Your site will be available at:"
echo "https://tejaskolpek.github.io/Me"
