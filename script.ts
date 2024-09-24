// aget refernce to the foam display area

const form =document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;

//Handle from submission

form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();//prevent page reload

    //collect input value
    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phone = (document.getElementById('phone')as HTMLInputElement).value
    const education = (document.getElementById('education')as HTMLInputElement).value
    const experience = (document.getElementById('experience')as HTMLInputElement).value
    const skills = (document.getElementById('skills')as HTMLInputElement).value
   
    //content the resume content dynamically

    const resumeHTML =`
    <h2><b>Resume</b></h2>
    <h2>Personal Information</h2>
    <p><b>Name:</b>${name}</p>
        <p><b>Email:</b>${name}</p>
    <p><b>Phone:</b>${name}</p>
    
    <h2><b>Education</b></h2>
    <p>${education}</p>

     <h2><b>Experience</b></h2>
    <p>${experience}</p>


 <h2><b>skills</b></h2>
    <p>${skills}</p>
    
    `;
    //Display the genertes resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML=resumeHTML;
}
    else{
        console.error('The resume display element is missing')
    }

})