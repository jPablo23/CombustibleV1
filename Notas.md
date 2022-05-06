En ocaciones las formulas se pueden perder o dejar de funcionar, solo hay que volver a pegar:

#Para control combustible V1

##Muestra tabla del reporte

=QUERY(Database!A:C,"SELECT * WHERE MONTH(A)="&BUSCARV(C2,Database!$K:$L,2,0)&" AND YEAR(A)="&C3&"",1)

##Muestra consumo de operadores

=QUERY(Database!I2:I7,"SELECT *",1)

##Suma el consumo de operadores

=SUMAR.SI(D8:D1000,F3,C8:D1000)


#Para el control combustible v2

##Muestra tabla del reporte

=QUERY(Database!$A:$D,"SELECT * WHERE MONTH(A)="&BUSCARV(C2,Database!$K:$L,2,0)&" and YEAR(A) = "&C3&" and D ='"&C4&"'",1)

##Muestra consumo de operadores

=QUERY(Database!I2:I21,"SELECT *",1)

##Suma el consumo de operadores

=SUMAR.SI(D7:D1000,F4,C7:D1000)

##Trae el operador con mayor consumo

=QUERY(F3:G23,"SELECT F, G WHERE G >= "&MAX(G4:G23)&"",1)

##Trae el operador con menor consumo

=QUERY(F3:G23,"SELECT F, G WHERE G = "&MIN(filter(G4:G23,G4:G23 > 0))&"",1)

##Para Ordenar por consulta y sumar un resultado

=QUERY(BaseDatos!$A:$D,"SELECT C, SUM(B) WHERE A >= date '"&TEXTO(B4,"YYYY-MM-DD")&"' AND A <= date '"&TEXTO(B5,"YYYY-MM-DD")&"' and D ='LA LABOR' group by C",1)

## Para Excluir datos 1= Diferente [o] <>
=QUERY(Database!$A:$D,"SELECT * WHERE MONTH(A)="&BUSCARV(C2,Database!$K:$L,2,0)&" and YEAR(A) = "&C3&" AND C !='Ahorro' AND C !='Ingreso' ORDER BY B DESC  ",1)


###Utilizado en CopuTonin
