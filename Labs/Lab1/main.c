#include<stdlib.h>
#include<string.h>
#include<stdio.h>

typedef struct node *nodeptr;
typedef struct pair {
    int key;
    int val;
};

typedef struct node {
    struct pair node_pair;
    nodeptr prev;
    nodeptr next;
};

struct node *head = NULL;
struct node *tail = NULL;

// Description: Search for the detailed key
struct node *search(struct node *begin, int key) {
    struct node *current_ptr = begin;
    while (current_ptr->node_pair.key != tail->node_pair.key) {
        if (current_ptr->node_pair.key == key) {
            return current_ptr;
        }
        else {
            current_ptr = current_ptr->next;
        }
    }
}

// Description: Insert
void Insert(int key) {
    struct node *node_temp = (struct node *) malloc(sizeof(struct node));
    node_temp->node_pair.key = key;
    node_temp->prev = NULL;
    node_temp->next = NULL;
    if (head == NULL) {
        head = node_temp;
        tail = head;
    }
    else {
        struct node *current_cmp = head;
        while (current_cmp != tail) {
            if (current_cmp->node_pair.key < key) {
                current_cmp = current_cmp->next;
            }
            else {
                struct node *current_cmp_prev = current_cmp->prev;
                if (current_cmp_prev == NULL) {
                    current_cmp->prev = node_temp;
                    node_temp->next = current_cmp;
                    head = node_temp;
                }
                else {
                    current_cmp->prev = node_temp;
                    current_cmp_prev->next = node_temp;
                    node_temp->prev = current_cmp_prev;
                    node_temp->next = current_cmp;
                }
                break;
            }
        }
        if (current_cmp == tail) {
            struct node *prev_tail = tail;
            prev_tail->next = node_temp;
            node_temp->prev = prev_tail;
            tail = node_temp;
        }
    }
}

// Description: Delete
void Delete(struct node *node_del) {
    if (node_del == head && node_del == tail) {
        head = NULL;
        tail = NULL;
    }
    else if (node_del == head && node_del != tail) {
        struct node *nodetemp = head->next;
        nodetemp->prev = NULL;
        head = nodetemp;
    }
    else if (node_del != head && node_del == tail) {
        struct node *nodetemp = tail->prev;
        nodetemp->next = NULL;
        tail = nodetemp;
    }
    else {
        struct node *nodetemp1 = node_del->prev;
        struct node *nodetemp2 = node_del->next;
        nodetemp1->next = nodetemp2;
        nodetemp2->prev = nodetemp1;
    }
    node_del->next = NULL;
    node_del->prev = NULL;
    free(node_del);
}

struct node *minimum() {
    if (head == NULL) {
        exit(2);
    }
    else return head;
}

struct node *maximum() {
    if (tail == NULL) {
        exit(2);
    }
    else return tail;
}

struct node *pre(struct node *temp) {
    return temp->prev;
}

struct node *next(struct node *temp) {
    return temp->next;
}

int main() {
    printf("Please enter the command from: Insert, Search, Delete, Pre, Succ, Min, Max, Exit");
    while (1) {
        char str[3];
        scanf("%3s", str);
        if (strcmp(str, "Ins") == 0) {
            printf("Please enter the number you want to insert:");
            int val;
            scanf("%i", &val);
            Insert(val);
        }
        else if (strcmp(str, "Sea") == 0) {
            printf("Please enter the number you want to Search:");
            int val;
            scanf("%i", &val);
            search(head, val);
        }
        else if (strcmp(str, "Del") == 0) {
            printf("Please enter the number you want to Delete:");
            int val;
            scanf("%i", &val);
            Delete(val);
        }
        else if (strcmp(str, "Pre") == 0) {
            printf("Please enter the number you want to find predecessor:");
            int val;
            scanf("%i", &val);
            printf("The predecessor of the given val is %d", pre(val)->node_pair.key);
        }
        else if (strcmp(str, "Suc") == 0) {
            printf("Please enter the number you want to find successor:");
            int val;
            scanf("%i", &val);
            printf("The successor of the given val is %d", next(val)->node_pair.key);
        }
        else if (strcmp(str, "Min") == 0) {
            printf("The min value is %d", minimum()->node_pair.key);
        }
        else if (strcmp(str, "Max") == 0) {
            printf("The max value is %d", maximum()->node_pair.key);
        }
        else if (strcmp(str, "Ext") == 0) {
            break;
        }
        else continue;
    }
}