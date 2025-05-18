class stud:
    def __init__(self,name):
        self.name=name
    def __init__(self,accno,accpass):
        self.accno=accno
        self.__accpass=accpass
        # to make it private two underscores we will not be able acces accapass outside class
        # we can also make a function private
        # only internal function can access other private func
            
# s1=stud("biki")
# del(s1.name)
# print(s1.name)
acc1=stud("12345","ppp")
print(acc1.accno,acc1.accpass)