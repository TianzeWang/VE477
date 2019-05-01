def LinearSearch(A, n, k):
    for i in range(n):
        if A[i] is k:
            return i
    return None
