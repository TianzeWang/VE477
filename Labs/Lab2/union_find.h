//
// Created by 大泽 on 2018/9/20.
//

#ifndef LAB2_UNION_FIND_H
#define LAB2_UNION_FIND_H

#include "graph.h"
//typedef struct vt * vtptr;
//
//typedef struct vt{
//    int val;
//    vtptr parent;
//    int rank;
//} vertice;


void getset(vertice *x);

vertice *find(vertice *x);

void _union(vertice *x, vertice *y);

#endif //LAB2_UNION_FIND_H
