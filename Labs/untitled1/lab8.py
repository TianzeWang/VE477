import numpy as np
import sys
import math


def Pivot(N, B, A, b, c, v, l, e):
    as_ = np.mat(np.zeros(A.shape))
    bs = np.mat(np.zeros(b.shape)) + sys.maxsize
    cs = np.mat(np.zeros(c.shape))
    bs[e] = b[l] / A[l, e]
    for j in N:
        if j != e:
            as_[e, j] = A[l, j] / A[l, e]
    as_[e, l] = 1 / A[l, e]
    for i in B:
        if i != l:
            bs[i] = b[i] - A[i, e] * bs[e]
            for j in N:
                if j != e:
                    as_[i, j] = A[i, j] - A[i, e] * as_[e, j]
            as_[i, l] = -A[i, e] * as_[e, l]
    v = v + float(c[e]) * float(bs[e])
    for j in N:
        if j != e:
            cs[j] = c[j] - c[e] * as_[e, j]
    cs[l] = -c[e] * as_[e, l]
    N.remove(e)
    N.append(l)
    B.remove(l)
    B.append(e)
    return N, B, as_, bs, cs, v


def Init(A, b, c, n):
    k = b.argmin()
    m = A.shape[0]
    if b[k] >= 0:
        return list(range(1, n)), list(range(n, m)), A, b, c, 0
    N = list(range(0, n))
    B = list(range(n, m))
    for i in range(m):
        if i in B:
            A[i, 0] = -1
    c_origin = np.copy(c)
    c = np.mat(np.zeros(c.shape))
    x = np.mat(np.zeros(b.shape))
    c[0] = -1
    v = 0
    l = k
    (N, B, A, b, c, v) = Pivot(N, B, A, b, c, v, l, 0)
    d = np.mat(np.zeros(b.shape)) + sys.maxsize
    n = A.shape[1]

    if m < n:
        A = [[] for i in A[0]]
        for i in A:
            for j in range(len(i)):
                A[j].append(-i[j])

    while c.max() > 0:
        e = c.argmax()
        for i in B:
            if A[i, e] > 0:
                d[i] = b[i] / A[i, e]
            else:
                d[i] = sys.maxsize
        l = d.argmin()
        if d[l] != sys.maxsize:
            (N, B, A, b, c, v) = Pivot(N, B, A, b, c, v, l, e)
        else:
            return -1
        d = np.mat(np.zeros(b.shape)) + sys.maxsize
    for i in range(len(b)):
        if i in B:
            x[i] = b[i]
        else:
            x[i] = 0
    if x[0] == 0:
        if 0 in B:
            for t in c:
                if t == 0:
                    t = -sys.maxsize
            e = c.argmax()
            for t in c:
                if t == -sys.maxsize:
                    t = 0
            (N, B, A, b, c, v) = Pivot(N, B, A, b, c, v, 0, e)
        A[:, 0] = np.transpose([np.zeros(m)])
        N.remove(0)
        for i in range(m):
            if i != 0:
                if i in N:
                    c[i] += c_origin[i]
                else:
                    for j in range(m):
                        if A[i, j] != 0:
                            c[j] += -c_origin[i] * A[i, j]
                    v += float(c_origin[i]) * float(b[i])
            else:
                c[i] = 0
        return N, B, A, b, c, v
    else:
        return -2


def Simplex(A, b, c, n):
    (N, B, A, b, c, v) = Init(A, b, c, n)
    x = np.mat(np.zeros(b.shape))
    d = np.mat(np.zeros(b.shape)) + sys.maxsize
    while c.max() > 0:
        e = c.argmax()
        for i in B:
            if A[i, e] > 0:
                d[i] = b[i] / A[i, e]
            else:
                d[i] = sys.maxsize
        l = d.argmin()
        if d[l] != sys.maxsize:
            (N, B, A, b, c, v) = Pivot(N, B, A, b, c, v, l, e)
        else:
            return -1
        d = np.mat(np.zeros(b.shape)) + sys.maxsize
    for i in range(len(b)):
        if i in B:
            x[i] = b[i]
        else:
            x[i] = 0
    return x


A = np.mat([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, -0.5, -1, 0, 0, 0],
            [0, -2, -2, 0, 0, 0], [0, -1, -4, 0, 0, 0]])
b = np.transpose(np.mat([[0, 0, 0, -6, -14, -13]]))
c = np.transpose(np.mat([[0, -24, -60, 0, 0, 0]]))

x = Simplex(A, b, c, 3)

xx = Simplex(AA, bb, cc, 4)

L2 = []
    
for i in range(6):
    L1.append(float(((x[i].item()))))
    L2.append(float((xx[i].item())))
print(L1)
print(L2)
a = (xx[1].item() * 6 + xx[2].item() * 14 + xx[3].item() * 13)
print("So the final answer is ", end = '')
#print(int(x[0].item()))
