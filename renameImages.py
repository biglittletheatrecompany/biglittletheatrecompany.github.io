import os
folderName = input("folder to rename images in: ")
folder =os.listdir(folderName)
counter = 0
for image in folder:
    os.rename(folderName+"/"+image, folderName+"/"+"img"+str(counter)+".jpg")
    counter += 1