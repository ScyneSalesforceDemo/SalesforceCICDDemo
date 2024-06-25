import os
import subprocess
import shutil
import sys
import git
root_path = sys.argv[1]
var2 = 'origin/'+sys.argv[2]
var3 = 'origin/'+sys.argv[3]
print("Root path:"+root_path)
print("Feature branch:"+var2)
print("Develop branch:"+var3)
salesforce_folder = "force-app/main/default" 
all_singlegitsuccess_paths = ""
if os.path.exists(root_path):
    repo = git.Repo(root_path)
else:
    repo = git.Repo.clone_from('https://github.com/ScyneSalesforceDemo/SalesforceCICDDemo.git', root_path)
Baseurl=root_path
count=0
print ("This is before into loop")
#changed_files = repo.git.diff('origin/dev', 'origin/STY-25', name_only=True,name_status=True).splitlines()
#changed_files = repo.git.diff('origin/dev', 'origin/STY-28',name_status=True)
changed_files = repo.git.diff(var3, var2,name_status=True)
#changed_files = repo.git.diff(var3, var2,name_status=True)
changed_lines = changed_files.splitlines()
print(changed_lines)
# Parse the lines to extract filenames and status
changed_files = []
for line in changed_lines:
    parts = line.split('\t')
    if len(parts) == 2:
        status, file_path = parts
        changed_files.append((status, file_path))
    else:
        # Handle unexpected format
        toperformcheckout=line.split(None, 1)[-1]
        togitcheckout=toperformcheckout.split()
        for gitsinglefile in togitcheckout:
         print(" I am printing before" +gitsinglefile)
         try:
            print("From Try Block" +gitsinglefile)
         except Exception as e:
            # Handle the error
             print("An error occurred during checkout, Git Checkout is unsuccessfull:", e)
             print("Here is the file name" + gitsinglefile)
        all_singlegitsuccess_paths +=gitsinglefile + "\n"
        print("I am the consolidated file path" +all_singlegitsuccess_paths)   
print (changed_files)
selected_paths=[]
for status, file_path in changed_files:
    if status in ['M', 'A']:
     #selected_paths +=file_path +"\n"
     selected_paths.append(file_path)
print("This is selected paths, removing status")
print("This is revised appended list")
print(selected_paths)
all_singlegitsuccess_paths_list=all_singlegitsuccess_paths.split()
merged_list = selected_paths + all_singlegitsuccess_paths_list
print("This is the Merged list")
print(merged_list)
destination_dir = root_path+'/DeltaPackage'
for deltafile in merged_list:
    print ("This is from Loop "+deltafile)
    count=count+1
    print(count) 
    print("I am now trying to create in the directory")
    print("This is printing from " +deltafile)
    print(os.path.exists(deltafile))
    if os.path.exists(deltafile):
                #destination_file = os.path.join(destination_dir, os.path.basename(deltafile))
                print("This is how relative path looks" +os.path.relpath(deltafile))
                newsource = os.path.join(Baseurl,os.path.relpath(deltafile))
                print("This is the Path which I want to Look for" +newsource)
                print("This is the dir name for the file"  +os.path.dirname(deltafile))
                destpath= os.path.join(destination_dir,os.path.dirname(deltafile))
                print("This is how absolute path looks" +destpath)
                if not os.path.exists(destpath):
                    os.makedirs(destpath)
                shutil.copy2(newsource, destpath)    
