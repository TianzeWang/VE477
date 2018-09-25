//
// Created by DELL on 2018/9/20.
//

#include "kruskal.h"
#include <stdio.h>
#include <stdlib.h>

graph* generate_graph(){

    graph *new_graph = (graph *) malloc(sizeof(graph));

    new_graph->graphedge=createlist();
    new_graph->graphnode=createlist();
    new_graph->MST=createlist();
    new_graph->MSTnode=createlist();

    return new_graph;

}

graph* kruskal_insert(graph* new_graph,edge* new_edge){

    dlistkeyvalue *new_edge_keyvalue,*new_vex1_keyvalue,*new_vex2_keyvalue;
    new_edge_keyvalue=(dlistkeyvalue *) malloc(sizeof(dlistkeyvalue));
    new_vex1_keyvalue=(dlistkeyvalue *) malloc(sizeof(dlistkeyvalue));
    new_vex2_keyvalue=(dlistkeyvalue *) malloc(sizeof(dlistkeyvalue));
    new_edge_keyvalue->key=&new_edge->weight;
    new_edge_keyvalue->value=new_edge;
    new_vex1_keyvalue->key=&new_edge->v1->ID;
    new_vex2_keyvalue->key=&new_edge->v2->ID;

    dlist_insert(new_graph->graphedge,new_edge_keyvalue);

    if (dlist_search(new_graph->graphnode,new_vex1_keyvalue->key)==NULL){
        dlist_insert(new_graph->graphnode,new_vex1_keyvalue);
    }

    if (dlist_search(new_graph->graphnode,new_vex2_keyvalue->key)==NULL){
        dlist_insert(new_graph->graphnode,new_vex2_keyvalue);
    }

}

sorted_dlist* kruskal_generate_MST(graph* new_graph){

    dlistnode* tmp_node=new_graph->graphedge->head;

    while (tmp_node!=NULL) {

        edge *tmp_edge=tmp_node->dt->value;
        graphnode *tmp_v1=tmp_edge->v1;
        graphnode *tmp_v2=tmp_edge->v2;

        if (find_root(tmp_v1)!=find_root(tmp_v2)){
            dlist_insert(new_graph->MST,tmp_node->dt);
            form_union(tmp_v1,tmp_v2);
        }

        tmp_node=tmp_node->next;
    }

    return new_graph->MST;
}

