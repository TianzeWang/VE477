cmake_minimum_required(VERSION 3.8)
project(l2)

set(CMAKE_C_STANDARD 99)

set(SOURCE_FILES main.c union_find.c kruskal.h dlist.c kruskal.c prim.c)
add_executable(l2 ${SOURCE_FILES})