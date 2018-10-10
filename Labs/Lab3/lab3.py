'''
Tianze Wang, 515370910202
Lab3, Python 1.1
'''

# Sort and Count Algorithm
import math


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
            count = count + len(L1) - i
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
        L1 = a[0: math.ceil(len(a) / 2)]
        L2 = a[math.ceil(len(a) / 2):]
        # print("L1 and L2 are", L1, L2)
        (count1, L1) = SortCount(L1)
        (count2, L2) = SortCount(L2)
        (count, L) = MergeCount(L1, L2)
    count = count + count1 + count2
    return (count, L)


# To run python 1.1, run the following codes
s = [1, 5, 4, 8, 10, 2, 6, 9, 3, 7]
a = SortCount(s)
print(a[1])
print(a[0])
