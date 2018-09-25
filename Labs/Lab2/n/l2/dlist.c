//
// Created by DELL on 2018/9/20.
//

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "dlist.h"

sorted_dlist *createlist() {

    sorted_dlist *list = (sorted_dlist *) malloc(sizeof(sorted_dlist));

    if (!list) return NULL;

    list->head = NULL;
    list->tail = NULL;
    list->size = 0;

    return list;
}

dlistnode *dlist_search(sorted_dlist *list, int *key) {

    dlistnode *tmp_node = list->head;

    if (key == NULL || list->size == 0) {
        return NULL;
    } else if (list->size == 1) {

        if (*key!=*list->head->dt->key) {
            return NULL;
        } else {
            return tmp_node;
        }
    } else {

        while (tmp_node != NULL) {

            if (*tmp_node->dt->key>*key) {
                return NULL;
            } else if (*tmp_node->dt->key<*key) {
                tmp_node = tmp_node->next;
            } else {
                return tmp_node;
            }

        }

        return NULL;

    }

}

int dlist_insert(sorted_dlist *list, dlistkeyvalue *dt) {

    dlistnode *new_node = (dlistnode *) malloc(sizeof(dlistnode));

    if (!new_node) return -1;

    new_node->next = NULL;
    new_node->prev = NULL;

    dlistnode *tmp_node = list->head;

    if (list->size == 0) {

        new_node->next = NULL;
        new_node->prev = NULL;
        new_node->dt = dt;

        list->head = new_node;
        list->tail = new_node;
        list->size++;
        return list->size;

    } else if (list->size == 1) {

        if (*tmp_node->dt->key<*dt->key) {

            tmp_node->next = new_node;
            new_node->prev = tmp_node;
            new_node->next = NULL;
            new_node->dt = dt;

            list->tail = new_node;

        } else{

            tmp_node->prev = new_node;
            new_node->next = tmp_node;
            new_node->prev = NULL;
            new_node->dt = dt;

            list->head = new_node;

        }
        list->size++;
        return list->size;

    } else {

        while (tmp_node != NULL) {

            if (*tmp_node->dt->key>=*dt->key) {

                if (tmp_node->prev == NULL) {

                    list->head = new_node;
                    tmp_node->prev = new_node;
                    new_node->next = tmp_node;

                } else {

                    new_node->prev = tmp_node->prev;
                    tmp_node->prev->next = new_node;
                    tmp_node->prev = new_node;
                    new_node->next = tmp_node;

                }

                new_node->dt = dt;

                list->size++;
                return list->size;

            } else {

                if (tmp_node->next == NULL) {

                    new_node->next = tmp_node->next;
                    tmp_node->next = new_node;
                    new_node->prev = tmp_node;
                    new_node->dt = dt;
                    list->tail = new_node;
                    list->size++;
                    return list->size;
                }
                tmp_node = tmp_node->next;
            }
        }
    }

}

int dlist_delete(sorted_dlist *list, int *key) {

    dlistnode *node = dlist_search(list, key);
    if (node != NULL) {

        if (list->size == 1) {

            list->head = NULL;
            list->tail = NULL;

        } else {

            if (list->head == node) {

                list->head = node->next;
                node->next->prev = NULL;

            } else if (list->tail == node) {

                list->tail = node->prev;
                node->prev->next = NULL;

            } else {

                node->prev->next = node->next;
                node->next->prev = node->prev;

            }

        }

        list->size--;
        free(node);
        return list->size;

    } else {
        return -1;
    }

}

void freelist(sorted_dlist *list) {

    if (list->head == NULL) {
        free(list);
        return;
    }

    while (list->head != NULL && list->head->next != NULL) {
        list->head = list->head->next;
        free(list->head->prev);
    }

    free(list->head);
    free(list);

}

