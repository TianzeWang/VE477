import random


def RandomSearch(A, n, k):
    lis = []
    for i in range(n):
        lis.append(n)
    while True:
        if lis.len() is 0:
            return None
        i = random.choice(lis)
        if A[i] is k:
            return i
        else:
            lis.remove(i)
