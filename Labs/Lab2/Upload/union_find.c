//
// Created by 大泽 on 2018/9/20.
//

#include "union_find.h"

void getset(vertice *x) {
    x->parent = x;
    x->rank = 0;
}

vertice *find(vertice *x) {
    if (x->parent != x) x->parent = find(x->parent);
    return x->parent;
}

void _union(vertice *x, vertice *y) {
    x = find(x);
    y = find(y);
    if (x->rank > y->rank) y->parent = x;
    else x->parent = y;
    if (x->rank == y->rank) y->rank++;
}
