const form=document.getElementById('contactForm');
const status=document.getElementById('status');
form.addEventListener('submit',async e=>{
e.preventDefault();
const fd=new FormData(form);
const r=await fetch('https://formspree.io/f/xaqkllop',{method:'POST',body:fd,headers:{Accept:'application/json'}});
status.textContent=r.ok?'Message sent!':'Failed to send.';
if(r.ok)form.reset();
});