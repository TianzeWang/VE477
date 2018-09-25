//
// Created by DELL on 2018/9/20.
//

#ifndef L2_KRUSKAL_H
#define L2_KRUSKAL_H

#include "union_find.h"
#include "dlist.h"

#define INT_MAX 32767
#define EDGE_NUM 20
#define NODE_NUM 10

typedef struct Edge edge;
typedef struct Graph graph;

struct Edge{
    int weight;
    graphnode* v1;
    graphnode* v2;
};

struct Graph{
    sorted_dlist* graphedge;
    sorted_dlist* graphnode;
    sorted_dlist* MSTnode;
    sorted_dlist* MST;
};

graph* generate_graph();

graph* kruskal_insert(graph* new_graph,edge* new_edge);

sorted_dlist* kruskal_generate_MST(graph* new_graph);

#endif //L2_KRUSKAL_H
