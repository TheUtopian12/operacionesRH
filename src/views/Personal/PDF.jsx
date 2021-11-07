import React from 'react';
import { Page, Text, View, Document, StyleSheet,Image,Table} from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logo from "./compu.jpg";
// Create styles
const BORDER_COLOR = '#807979S'
const BORDER_STYLE = 'solid'
const COL1_WIDTH = 40
const COLN_WIDTH = (130 - COL1_WIDTH) / 3
const styles = StyleSheet.create({
  paginita: {
    padding:50,
    backgroundColor: 'white',
    background: 'gold'
  },
  section: {
    marginTop: 10,
    marginleft: 75,

  },
  receiptlabel:{
    fontWeight:600
  },
  textlarge:{
    fontSize:18,
    fontFamily: 'Times-Roman',
    textAlign:'center',
  },
  textlarge2:{
    fontSize:14,
    fontFamily: 'Times-Roman',
    textAlign:'center',
  },
  image:{
    
    alignItems: 'right',
    alignContent:'center',
    width:40,
 height:50,
    
  },
  receiptsignature:{
  
    height: 80,
    margin: 50,
    padding: 50
  },
  receiptline:{
   marginBottom:10,
   borderBottom:1
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Times-Roman'
  },
  p:{
    textAlign:'center',
    margin:0,
    fontSize:10

  },

text: {
  margin: 15,
  fontSize: 16,
  textAlign: 'justify',
  fontFamily: 'Times-Roman'
},
recibio:{
  fontSize: 18,
  margin:50,
  fontFamily: 'Times-Roman',
  textAlign: 'center',
  textDecorationColor: 'blue'

},
entrego:{
  fontSize: 14,
  
  textAlign: 'center',
  fontFamily: 'Times-Roman'
},
  fecha: {
    margin:6,
    fontSize: 14,
    textAlign: 'right',
    fontFamily: 'Times-Roman'
   
  },
  body: {
    padding: 10
  },
  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 3, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  tableCol1Header: { 
    width: COL1_WIDTH + '%', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderBottomColor:'#807979',
    borderWidth: 3, 
    borderLeftWidth: 0, 
    borderTopWidth: 0
  },     
  tableColHeader: { 
    width: COLN_WIDTH + "%", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderBottomColor:'#807979',
    borderWidth: 3, 
    borderLeftWidth: 0, 
    borderTopWidth: 0
  },   
  tableCol1: { 
    width: COL1_WIDTH + '%', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 3, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },   
  tableCol: { 
    width: COLN_WIDTH + "%", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 3, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCellHeader: {
    margin: 5, 
    fontSize: 12,
    fontWeight: 500
  },  
  tableCell: { 
    margin: 5, 
    fontSize: 10 
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  }


});


// Create Document Component
const PDF = (props) => (
  
  <PDFViewer width="500" height="600">
  <Document>
    <Page size="A4" style={styles.paginita} >
  
    <Image
  
        style={styles.image}
        src={logo}
      />
      <Text style={styles.title}>Carta Responsiva</Text>

       <View style={styles.fecha} >
        <Text style={styles.fecha}>Fecha: {props.fecha}</Text>
      </View>
      <Text style={styles.text}>
      Por medio de la presente hago constar que:  RECIBÍ DE COMPULOGIC S.A. DE C.V. 
      el siguiente equipo para uso exclusivo del desempeño de mis actividades laborales asignadas,
      por lo cual estoy consciente del uso de la misma.  Consta de las siguientes características:
      </Text>
      {/*tabla*/}
      <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1Header}> 
          <Text style={styles.receiptlabel, styles.textlarge}>Producto</Text>
          </View> 
          <View style={styles.tableColHeader}> 
          <Text style={styles.receiptlabel, styles.textlarge}>Marca</Text>
          </View> 
          <View style={styles.tableColHeader}> 
          <Text style={styles.receiptlabel, styles.textlarge}>Caracteristicas</Text>
          </View> 
          
         
        </View>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
          <Text style={styles.receiptlabel, styles.textlarge2}>{props.producto}</Text>
          </View> 
          <View style={styles.tableCol}> 
          <Text style={styles.receiptlabel, styles.textlarge2}>{props.marca}</Text>
          </View> 
          <View style={styles.tableCol}>
          <Text style={styles.receiptlabel, styles.textlarge2}>{props.caracteristica}</Text>
          </View>
        </View>    
      </View>
       {/*fin tabla*/}
     
    
       <View style={styles.text} >
        <Text style={styles.text, styles.text}>Contenido:</Text>
        <Text style={styles.text}>{props.contenido}</Text>
      </View>

      <Text style={styles.text}>
      Los daños ocasionados por mal manejo o imprudencia, serán mi responsabilidad 
      y asumo las consecuencias que de esto deriven. 
      </Text>
    
      <View style={styles.recibio} >
      <Text style={styles.receiptlabel, styles.textlarge}>Entregó                                                             Recibió</Text>
        <Text style={styles.receiptlabel, styles.entrego}>{props.entrego}                              {props.recibio}</Text>
      </View>
    
      <View style={styles.receiptsignature}>
          <Text style={styles.receiptline}></Text>
          <Text style={styles.p}>Compulogic S.A. de C.V.</Text>
          <Text style={styles.p}>Marie Curie 501 Quantum Ciudad del Conocimiento, 98160</Text>
          <Text style={styles.p}> Zacatecas, Zac </Text>
          <Text style={styles.receiptline}></Text>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>




  </PDFViewer>
);


export default PDF;