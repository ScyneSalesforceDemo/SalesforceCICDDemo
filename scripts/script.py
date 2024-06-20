import os
import subprocess
import shutil

# Define the Salesforce DX folder structure
salesforce_folder = "force-app/main/default"

# Get the list of changed files using Git diff
changed_files = subprocess.check_output(["git", "diff", "--name-only", "HEAD^"]).decode("utf-8").splitlines()
print("Current working directory:", os.getcwd())
print("Changed files:", changed_files)

# Filter only the changed files inside the Salesforce folder
changed_files_in_salesforce = [file for file in changed_files if file.startswith(salesforce_folder)]
print("Changed files in Salesforce folder:", changed_files_in_salesforce)
# Create a folder to store the changed files
changed_folder = os.path.join(salesforce_folder, "changed_files")
print("Changed files:", changed_files)
print("Changed folder:", changed_folder)
os.makedirs(changed_files, exist_ok=True)

# Copy the changed files to the new folder
for file in changed_files_in_salesforce:
    src_path = os.path.join(salesforce_folder, file)
    dest_path = os.path.join(changed_folder, file)
    print("Destination folder:", os.path.dirname(dest_path))
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    shutil.copy(src_path, dest_path)

# Print a success message
print(f"Created a folder with changed files in {changed_folder}")