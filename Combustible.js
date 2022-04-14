function fn_Guardar() {
    var ss = SpreadsheetApp.openById("1WrsAZuSYNDKWi_Iacw8W_sitDqPW6L3fjdb_LJw-RPE");
    var hojaIngresoDatos = ss.getSheetByName('IngresoDatos');
  
    var fecha = hojaIngresoDatos.getRange('F2').getValue();
    var nombre = hojaIngresoDatos.getRange('F3').getValue();
    var operador = hojaIngresoDatos.getRange('F4').getValue();
  
      if(fecha == ""|| nombre == ""|| operador == ""){
       SpreadsheetApp.getUi().alert("Datos no ingresados. Completar campos");
    }else{
      var ss2 = SpreadsheetApp.openById("1WrsAZuSYNDKWi_Iacw8W_sitDqPW6L3fjdb_LJw-RPE");
      var hojaBaseDatos = ss2.getSheetByName('Database');
      var ultimaFila = obtenerUltimaFilaColumna('A');
      
      var ingresoFecha = "A"+ultimaFila; 
      var ingresoNombre = "B"+ultimaFila;
      var ingresoOperador = "C"+ultimaFila;
   
  
  
      var ingresoNombre = hojaBaseDatos.getRange(ingresoNombre);
      ingresoNombre.setValue(nombre);
      var ingresoFecha = hojaBaseDatos.getRange(ingresoFecha);
      ingresoFecha.setValue(fecha);
      var ingresoOperador = hojaBaseDatos.getRange(ingresoOperador);
      ingresoOperador.setValue(operador);
   
  
  
      SpreadsheetApp.getUi().alert("Datos ingresados correctamente");
      SpreadsheetApp.getActive().getRange('F2:F4').activate();
      SpreadsheetApp.getActive().getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
      SpreadsheetApp.getActive().getRange('A1').activate();
  
    }
  
    function obtenerUltimaFilaColumna(Columna){
    var columna = Columna;
    var ss2 = SpreadsheetApp.openById("1WrsAZuSYNDKWi_Iacw8W_sitDqPW6L3fjdb_LJw-RPE");
    var maximoColumn = ss2.getSheetByName('Database');
    var maximoFila = maximoColumn.getMaxRows();
  
    //C1:C1000
    var valores = maximoColumn.getRange(columna+"1:"+columna+maximoFila).getValues();
  
    for(;valores[maximoFila-1]=="" && maximoFila>0; maximoFila--){}
  
    return maximoFila+1;//Ultima Fila + uno para insertar ahi.
  
    }
  }
  