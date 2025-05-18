
with open("demo.txt", "w+") as f:
      data=f.read()
# it automatically close the file
# w for writing delete all data first
# a append at end of file data
f=open("demo.txt","r+")
k=f.read()
f.write("\ni want to learn java")
lin1=f.readline()
print(lin1)
lin2=f.readline()
print(lin2)
print(k)
print(type(k))
# r+ read as well write overwrite from starting and reading starts from the end of overwriting
k=f.read()
print(k)
f.close()
