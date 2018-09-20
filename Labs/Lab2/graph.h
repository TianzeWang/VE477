//
// Created by 大泽 on 2018/9/20.
//

#ifndef LAB2_GRAPH_H
#define LAB2_GRAPH_H

typedef struct vt * vtptr;

typedef struct vt{
    int val;
} vertice;

typedef struct ed{
    vertice * src;
    vertice * dest;
    int len;
} edge;

typedef struct gra{
    edge * _edge;
    vertice * _vertice;
} graph;

#endif //LAB2_GRAPH_H
