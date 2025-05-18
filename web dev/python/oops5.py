class stud:
    name ="biki"
    # def changename(self,name):
    #     self.__class__.name=name
    #     # to change class name through this
    #     # OR
    #     stud.name=name
    @classmethod
    def changename(cls,name):
        cls.name=name

c=stud()
c.changename("bikram")
print(c.name)
print(stud.name)
