.global _start
.align 2

_start: mov X0, #1
adr X1, helloworld
mov X2, #13
mov X16,#4
srv #0x80

mov X0,#0
mov X16, #1
srv #0x80

helloworld:   .ascii "Hello World!\n"