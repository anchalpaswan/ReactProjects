/* eslint-disable react/prop-types */


function Section ({section , heading}) {
    return (
        <div>
        <h2>{heading}</h2>
       <>
       {section.map((title, index)=> {
           return (
               <li key={index}>{title}</li>
           )
       })}
   
       </>
   
       </div>
   
    )
   }
   
     
   
   export default Section;