//
// Created by DELL on 2018/9/21.
//

#ifndef L2_PRIM_H
#define L2_PRIM_H

#include "kruskal.h"

#define MAX_INT 32767
#define MAX_VEX 20

typedef struct PrimGraph primgraph;
typedef struct PrimEdge primedge;

struct PrimGraph{
    graphnode *vex;
    edge **edge_arr;
    int vex_num;
    edge *MSTedge;
};

struct PrimEdge{
    graphnode* v1;
    graphnode* v2;
    int weight;
};

primgraph* create_primgraph(int vex_num,graphnode vex[vex_num], edge (*edge_arr)[vex_num], edge MSTedge[vex_num-1]);

void MiniSpanTree_Prim(primgraph *new_graph);

#endif //L2_PRIM_H