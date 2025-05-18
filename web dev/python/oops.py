class Stud:
    @staticmethod
    # decorator
    # now func does not take self
    def hell():
        print("hell")
    # class attribute
    college_nam="iitp"
    name="biki"
    # print(35)
    # default constructor
    def __init__(self):
        pass
    # constructor
    # class attr<instance atr
    def __init__(self, nam,marks):
    #    instance attribute 
       self.name = nam
       self.marks=marks
       print("something")
    def get_mark(self):
        return self.marks
s1=Stud("biki",35)
# print(s1.name)
# s1.welcome()
s1.hell()
print(s1.get_mark())
print(s1.name,s1.marks)
print(Stud.college_nam)