---
title: "Gestión de Procesos: Fork y Exec"
date: "2026-05-10"
description: "Implementación de creación de procesos en C para Sistemas Operativos."
---

# Introducción a los Procesos
En esta práctica aprendimos cómo el kernel duplica un proceso padre.

### Código de ejemplo
```c
#include <stdio.h>
#include <unistd.h>

int main() {
    pid_t pid = fork();
    if (pid == 0) printf("Soy el hijo");
    return 0;
}