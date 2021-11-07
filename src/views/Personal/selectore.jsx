import { Select, Tag} from 'antd';


const options = [{ value: 'telefono' }, { value: 'cpu' }, { value: 'cable' }, { value: 'mesa' }];
function tagRender(props) { 

  const { label, value, closable, onClose } = props;
  
  return ( 
  <>
  
    <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
     <Select
     mode="multiple"
     showArrow
     tagRender={tagRender}
     defaultValue={['telefono','cpu']}
     style={{ width: '100%' }}
     options={options}
   />
   </>
  );
 
}
export default tagRender;