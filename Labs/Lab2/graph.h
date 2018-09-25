//
// Created by 大泽 on 2018/9/20.
//

#ifndef LAB2_GRAPH_H
#define LAB2_GRAPH_H

#define MAX 100

typedef struct vt * vtptr;

typedef struct vt{
    int val;
    vtptr parent;
    int rank;
} vertice;

typedef struct ed{
    vertice * src;
    vertice * dest;
    int len;
} edge;

typedef struct gra{
    edge * _edge;
    vertice * _vertice;
    int edge_num;
    int vertice_num;
} graph;

#endif //LAB2_GRAPH_H
