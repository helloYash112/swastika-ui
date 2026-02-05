import DateAndTime from "./DateAndTime"
export const Header=({img,...props})=>{
    
return <header>
    <img src={img} alt="home-image"  width={75} height={75} />
   <DateAndTime></DateAndTime>
</header>
}