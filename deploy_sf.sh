#!/bin/bash

# Set up Salesforce CLI (ensure it's installed and authenticated)
# Replace 'your_username' and 'your_password' with actual Salesforce credentials
#sfdx force:auth:web:login -u rohit.pootheri.mohandas@scyne.com.au2024/05/31_14-45-0.demo.dev -p ScynePSS890!

# Get the changed files between the feature branch and dev branch
changed_files=$(git diff --name-only ${{ github.event.before }} ${{ github.sha }} )

# Create a new folder for changed metadata
mkdir changed_metadata

# Copy changed files to the new folder
for file in $changed_files; do
    cp "$file" changed_metadata/
done

ls changed_metadata