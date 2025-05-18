#create complex no.
class com:
    def __init__(self,real,img):
        self.real=real
        self.img=img
    def show(self):
        print(self.real,"i +",self.img,"j")
    def __add__(obj1,obj2):
        re=obj1.real + obj2.real
        im=obj1.img + obj2.img
        return com(re,im)
    # by using underscore dunder function is created
    
com1=com(1,3)
com1.show()
com2=com(2,4)
com2.show()
num3=com1+com2
num3.show()