import React from 'react';
import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
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
   borderBottom:1,
   width:300
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Times-Roman'
  },
  p:{
    textAlign:'center',
    margin:0,
    fontSize:10,
    width:300


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
  subtitulo: {
    margin:6,
    fontSize: 14,
    textAlign: 'left',
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
const Pdf = (props) => (
  
  <PDFViewer width="500" height="500">


  <Document>
    <Page size="A4" style={styles.paginita}>
    <Text style={styles.title}>PASE DE SALIDA DE PERSONAL</Text>
    <View style={styles.subtitulo} >
        <Text style={styles.fecha}>CARMEN ARACELI VILLAVICENCIO SANDOVAL</Text>
        <Text style={styles.fecha}> ENCARGADA DEL ÁREA DE RECURSOS</Text> 
        <Text style={styles.fecha}>HUMANOS</Text>
        <Text style={styles.fecha}> DE COMPULOGIC</Text>
        <Text style={styles.fecha}> P R E S E N T E</Text> 
        <Text style={styles.fecha}> </Text> 
        <Text style={styles.fecha}>Por este conducto, el que suscribe, autoriza la salida del (la): </Text>   
        <Text style={styles.fecha}> </Text> 
        <Text style={styles.fecha}> </Text> 
        <Text style={styles.fecha}> </Text> 

          <Text style={styles.receiptline}>{props.nombre} </Text>
          <Text style={styles.p}> Nombre </Text>
          <Text style={styles.fecha}> </Text> 
          <Text style={styles.receiptline}>{props.horainicial}                                                        {props.horafinal} </Text>
          <Text style={styles.p}>A PARTIR DE LAS:           HASTA LAS: </Text> 

          <Text style={styles.fecha}> </Text> 
          <Text style={styles.receiptline}> </Text>
          <Text style={styles.p}>DIA                   MES                    AÑO</Text> 

          <Text style={styles.fecha}> </Text> 
          <Text style={styles.fecha}>Lo anterior, con la finalidad de que atienda asuntos de índole personal.</Text>  
          <Text style={styles.fecha}>Sin otro particular quedo a sus órdenes.</Text>  
          <Text style={styles.fecha}> </Text> 
          <Text style={styles.fecha}> </Text> 
          
          <Text style={styles.p}>  Trabajador                                                          Autoriza</Text> 
          <Text style={styles.fecha}> </Text> 
          <Text style={styles.p}> --------------------------                                      ----------------------------</Text>


          <Text style={styles.fecha}>OBSERVACIONES</Text> 
          <Text style={styles.fecha}></Text> 
          <Text style={styles.fecha}>{props.observaciones} </Text>
          <Text style={styles.receiptline}> </Text>
      </View>



    </Page>
  </Document>



  </PDFViewer>
);

export default Pdf;