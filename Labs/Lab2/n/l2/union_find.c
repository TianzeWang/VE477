//
// Created by DELL on 2018/9/20.
//

#include <stdio.h>
#include <stdlib.h>
#include "union_find.h"

void generate_set(graphnode* x){

    x->parent=x;
    x->rank=0;

}

graphnode* find_root(graphnode* x){

    if (x!=x->parent) x->parent=find_root(x->parent);
    return x->parent;

}

void form_union(graphnode* x, graphnode* y){

    graphnode* X=find_root(x);
    graphnode* Y=find_root(y);
    if (X->rank>Y->rank) Y->parent=X;
    else X->parent=Y;
    if (X->rank==Y->rank) Y->rank++;

}


