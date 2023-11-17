
export function useFilterResturant (allresturnat,serachText)
{
  const filterdData=allresturnat.filter((e)=>{
   
  return  e.info.name.toLowerCase().includes(serachText.toLowerCase());
 })

 // console.log(filterdData);
 return filterdData 
}
