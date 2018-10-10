

'''
Lab3, Python 1.2
'''

# Gale-Shapley


class Human():
    """Here Human function needs
     to pair with different sex human, which will be defined later"""

    def __init__(self, name):
        self.name = name

    wishList = None
    partner = None
    current_proposed = 0

    def define_wishlist(self, wishList):
        self.wishList = wishList

    def pair(self, fxh):
        self.partner = fxh

    def unpair(self):
        self.partner = None


def Pair(Males, Females):
    print(Males[0].name + " propose to " + Females[1].name)
    print(Males[1].name + " propose to " + Females[3].name)
    print(Males[2].name + " propose to " + Females[0].name)
    print(Males[3].name + " propose to " + Females[2].name)


def pair(Males, Females):
    # print(Males[0].name, Males[1].name)
    # print(Females[0].name, Females[1].name)
    Pairs = []
    while True:
        exit_flag = True
        for man in Males:
            if man.partner is None:
                exit_flag = False
        if exit_flag is True:
            break

        for man in Males:
            woman = man.wishList[man.current_proposed]
            man.pair(woman)
            man.current_proposed += 1
            if (woman.partner is None):
                woman.pair(man)
                #Pairs.append([man, woman])
            else:
                green_man = woman.partner
                print((woman.wishList).index(green_man))
                print((woman.wishList).index(man))
                if (woman.wishList).index(green_man) > (woman.wishList).index(man):
                    # man.partner.unpair()
                    green_man.unpair()
                    woman.pair(man)
                else:
                    man.unpair()
                    #Pairs.append([man, woman])
    #        print("currently, ", man.name, " " , man.partner.name)
    for i in Males:
        Pairs.append([man, man.partner])
    return Pairs

# FXH = Human('fxh')
# LYH = Human('lyh')
# CYG = Human('cyg')
# LYX = Human('lyx')
# FXH.define_wishlist([LYX, CYG])
# CYG.define_wishlist([LYH, FXH])
# LYH.define_wishlist([CYG, LYX])
# LYX.define_wishlist([FXH, LYH])
# m = [FXH, LYH]
# f = [CYG, LYX]
w1 = Human('w1')
w2 = Human('w2')
w3 = Human('w3')
w4 = Human('w4')
m1 = Human('m1')
m2 = Human('m2')
m3 = Human('m3')
m4 = Human('m4')
w1.define_wishlist([m3, m2, m1, m4])
w2.define_wishlist([m4, m1, m2, m3])
w3.define_wishlist([m3, m4, m1, m2])
w4.define_wishlist([m1, m2, m3, m4])
m1.define_wishlist([w1, w2, w3, w4])
m2.define_wishlist([w1, w4, w3, w2])
m3.define_wishlist([w1, w3, w4, w2])
m4.define_wishlist([w1, w3, w2, w4])
m = [m1, m2, m3, m4]
f = [w1, w2, w3, w4]
# Pair(m, f)
pair(m ,f)
