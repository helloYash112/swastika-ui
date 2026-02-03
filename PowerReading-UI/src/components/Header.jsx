export const Header=({img,...props})=>{
    const weeks=[
        'sunday','monday','tuesday','wednesday','thursday','friday','saturday',
    ]
    const date=new Date();
    const ddmnye=date.toLocaleDateString();
    const hour=String(date.getHours()).padStart(2, '0');
    const minute= String(date.getMinutes()).padStart(2, '0');
    
    const sec=String(date.getSeconds()).padStart(2, '0');

    const days=weeks[date.getDay()];
    const full=`${ddmnye}     ${hour} : ${minute} : ${sec} ${days}`;
return <header>
    <img src={img} alt="home-image"  width={75} height={75} />
   <span>
    {full}
   </span>
</header>
}