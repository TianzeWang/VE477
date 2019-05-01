from random import shuffle


def LinearSearch(A, n, k):
    for i in range(n):
        if A[i] is k:
            return i
    return None


A_ = shuffle(A)
LinearSearch(A_, n, k)
