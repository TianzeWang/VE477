'''
Tianze Wang, 515370910202
Lab3, Python 1.1
'''

# Sort and Count Algorithm


def MergeCount(L1, L2):

    count = 0
    L = []
    i = 0
    j = 0
    # print("In the MergeCount function, L1 and L2 are ", L1, L2)
    while (i < len(L1) and j < len(L2)):
        if L1[i] <= L2[j]:
            L.append(L1[i])
            i = i + 1
        else:
            L.append(L2[j])
            count = count + len(L1) - i + 1
            j = j + 1
    if i >= len(L1):
        # print("j and len(L2) are ", j, len(L2))
        for t in range(j, len(L2)):
            L.append(L2[t])
    else:
        for t in range(i, len(L1)):
            L.append(L1[t])
    # print("After the MergeCount, L is ", L)
    return (count, L)


def SortCount(a):
    if (len(a) == 1):
        return (0, a)
    else:
        L1 = a[0: int(len(a) / 2)]
        L2 = a[int(len(a) / 2):]
        # print("L1 and L2 are", L1, L2)
        (count1, L1) = SortCount(L1)
        (count2, L2) = SortCount(L2)
        (count, L) = MergeCount(L1, L2)
    count = count + count1 + count2

    return (count, L)

# To run python 1.1, run the following codes
# s = [3, 5, 6, 8, 2, 1]
# a = SortCount(s)
# print(a[1])


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


def pair(Males, Females):
    print(Males[0].name, Males[1].name)
    print(Females[0].name, Females[1].name)
    print("are going to have sex! However, they have different preferences, so let's see the result")
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
            if (woman.partner is None):
                woman.pair(man)
                Pairs.append([man, woman])
            else:
                green_man = woman.partner
                if (woman.wishList).index(green_man) < (woman.wishList).index(man):
                    man.partner.unpair()
                    man.current_proposed += 1
                else:
                    green_man.unpair()
                    woman.partner = man
                    Pairs.append([man, woman])
    return Pairs


FXH = Human('fxh')
LYH = Human('lyh')
CYG = Human('cyg')
LYX = Human('lyx')
FXH.define_wishlist([LYX, CYG])
CYG.define_wishlist([LYH, FXH])
LYH.define_wishlist([CYG, LYX])
LYX.define_wishlist([FXH, LYH])
m = [FXH, LYH]
f = [CYG, LYX]
result = pair(m,f)
for i in result:
    print(i[0].name, i[1].name, "form one pair!")
