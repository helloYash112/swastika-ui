import CreatableSelect from 'react-select/creatable'; 

export default function List({ options, title, onChange, value }) {
  return (
    <CreatableSelect 
      id={title}
      options={options} 
      onChange={onChange}   
      value={value}        
      isClearable
      placeholder={`Select or type ${title}...`}
    />
  );
}
