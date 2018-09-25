//
// Created by 大泽 on 2018/9/26.
//

#ifndef KRUSKAL_MASTER_FUNCTIONS_H
#define KRUSKAL_MASTER_FUNCTIONS_H

#include "Graph.h"

#include "time.h"

void get_specs(Graph *g);

void generate_graph(Graph *g);

void optional_result(Graph *g);

void make_edge(Graph *g, int u, int v);

int size_of(Graph *g);

double edge_prob_of(Graph *g);

void dfs(Graph *g);

void dfs_visit(Graph *g, Vertex *vertex);

double running_time(clock_t start, clock_t finish);

int check_graph(Graph *g);

void Kruskal(Graph *g);

void list_all_edges(Graph *g, Edge **E);

void merge_sort(Edge **data, int first, int last);

void merge_array(Edge **edges, int first, int split, int last);

double key(Edge e);

Vertex *from_vertex(Graph *g, Edge *e);

Vertex *to_vertex(Graph *g, Edge *e);

Vertex *fast_find(Vertex *a);

void Union(Vertex *a, Vertex *b);

void swap(Vertex *a, Vertex *b);

#endif //KRUSKAL_MASTER_FUNCTIONS_H
