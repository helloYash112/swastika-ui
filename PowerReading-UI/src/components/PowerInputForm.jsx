export default function PowerInputForm(
    {kwh,pf,meterId,meterName,...props}
)
{
    let error;
    if(kwh == null || pf==null || meterId == null || meterName ==null){
        error='feilds should not be a empty';

    }
    else
        error='feild added sucessfully';
    
    return <form action="" id="input-form" >
     
    <label htmlFor="kwh">     kwh :</label>
    <input type='text' placeholder='enter a kwh value' id='kwh'></input>
   
   
    <label htmlFor="pf">    pf :</label>
    <input type='text' placeholder='enter a pf value' id='pf'></input>
  
    <label htmlFor="meterid"> meter id :</label>
    <input type='text' placeholder='enter a meter id value' id='meterid'></input>
    
    
    <label htmlFor="name"> meter name :</label>
    <input type='text' placeholder='enter a meter name value' id='name'></input> 

    <button id="btn">Submit</button>
    </form>
 
}