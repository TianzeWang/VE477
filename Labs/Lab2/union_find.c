//
// Created by 大泽 on 2018/9/20.
//

#include "union_find.h"

void getset(node *x) {
    x->parent = x;
    x->rank = 0;
}

node *find(node *x) {
    if (x->parent != x) x->parent = find(x);
    return x->parent;
}

node *_union(node *x, node *y){
    x= find(x);
    y = find(y);
    if (x->rank > y->rank) y->parent = x;
    else x->parent = y;
    if (x->rank == y->rank) y->rank++;
}
