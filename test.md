55555555
555555555
6666666



test1010
10：25


file1.puml:
@startuml
!startsub FOO1
A->A : stuffA2
!endsub
B->B : stuffB2
C->C : stuffC2
D->D : stuffD2
!includesub FOO1
@enduml


file2.puml:
@startuml
B->B : stuffB3
C->C : stuffC3
D->D : stuffD3
!includesub file1.puml!FOO1
@enduml


