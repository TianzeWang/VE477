# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.9

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /Applications/CLion.app/Contents/bin/cmake/bin/cmake

# The command to remove a file.
RM = /Applications/CLion.app/Contents/bin/cmake/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/kruskal_master.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/kruskal_master.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/kruskal_master.dir/flags.make

CMakeFiles/kruskal_master.dir/randmst.c.o: CMakeFiles/kruskal_master.dir/flags.make
CMakeFiles/kruskal_master.dir/randmst.c.o: ../randmst.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/kruskal_master.dir/randmst.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/kruskal_master.dir/randmst.c.o   -c /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/randmst.c

CMakeFiles/kruskal_master.dir/randmst.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/kruskal_master.dir/randmst.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/randmst.c > CMakeFiles/kruskal_master.dir/randmst.c.i

CMakeFiles/kruskal_master.dir/randmst.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/kruskal_master.dir/randmst.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/randmst.c -o CMakeFiles/kruskal_master.dir/randmst.c.s

CMakeFiles/kruskal_master.dir/randmst.c.o.requires:

.PHONY : CMakeFiles/kruskal_master.dir/randmst.c.o.requires

CMakeFiles/kruskal_master.dir/randmst.c.o.provides: CMakeFiles/kruskal_master.dir/randmst.c.o.requires
	$(MAKE) -f CMakeFiles/kruskal_master.dir/build.make CMakeFiles/kruskal_master.dir/randmst.c.o.provides.build
.PHONY : CMakeFiles/kruskal_master.dir/randmst.c.o.provides

CMakeFiles/kruskal_master.dir/randmst.c.o.provides.build: CMakeFiles/kruskal_master.dir/randmst.c.o


CMakeFiles/kruskal_master.dir/new_main.c.o: CMakeFiles/kruskal_master.dir/flags.make
CMakeFiles/kruskal_master.dir/new_main.c.o: ../new_main.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building C object CMakeFiles/kruskal_master.dir/new_main.c.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/kruskal_master.dir/new_main.c.o   -c /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/new_main.c

CMakeFiles/kruskal_master.dir/new_main.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/kruskal_master.dir/new_main.c.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/new_main.c > CMakeFiles/kruskal_master.dir/new_main.c.i

CMakeFiles/kruskal_master.dir/new_main.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/kruskal_master.dir/new_main.c.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/new_main.c -o CMakeFiles/kruskal_master.dir/new_main.c.s

CMakeFiles/kruskal_master.dir/new_main.c.o.requires:

.PHONY : CMakeFiles/kruskal_master.dir/new_main.c.o.requires

CMakeFiles/kruskal_master.dir/new_main.c.o.provides: CMakeFiles/kruskal_master.dir/new_main.c.o.requires
	$(MAKE) -f CMakeFiles/kruskal_master.dir/build.make CMakeFiles/kruskal_master.dir/new_main.c.o.provides.build
.PHONY : CMakeFiles/kruskal_master.dir/new_main.c.o.provides

CMakeFiles/kruskal_master.dir/new_main.c.o.provides.build: CMakeFiles/kruskal_master.dir/new_main.c.o


# Object files for target kruskal_master
kruskal_master_OBJECTS = \
"CMakeFiles/kruskal_master.dir/randmst.c.o" \
"CMakeFiles/kruskal_master.dir/new_main.c.o"

# External object files for target kruskal_master
kruskal_master_EXTERNAL_OBJECTS =

kruskal_master: CMakeFiles/kruskal_master.dir/randmst.c.o
kruskal_master: CMakeFiles/kruskal_master.dir/new_main.c.o
kruskal_master: CMakeFiles/kruskal_master.dir/build.make
kruskal_master: CMakeFiles/kruskal_master.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Linking C executable kruskal_master"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/kruskal_master.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/kruskal_master.dir/build: kruskal_master

.PHONY : CMakeFiles/kruskal_master.dir/build

CMakeFiles/kruskal_master.dir/requires: CMakeFiles/kruskal_master.dir/randmst.c.o.requires
CMakeFiles/kruskal_master.dir/requires: CMakeFiles/kruskal_master.dir/new_main.c.o.requires

.PHONY : CMakeFiles/kruskal_master.dir/requires

CMakeFiles/kruskal_master.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/kruskal_master.dir/cmake_clean.cmake
.PHONY : CMakeFiles/kruskal_master.dir/clean

CMakeFiles/kruskal_master.dir/depend:
	cd /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/cmake-build-debug /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/cmake-build-debug /Users/peter/Desktop/Peter/JI/VE477/Labs/Lab2/new/kruskal-master/cmake-build-debug/CMakeFiles/kruskal_master.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/kruskal_master.dir/depend

