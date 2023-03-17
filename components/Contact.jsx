import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    
    window.location.href = `mailto:oalktan@gmail.com?subject=${subject?? ""}&body=${name} ${email} ${message}`
  }


  return (
    <form className='text-white space-y-12 mt-10 ' onSubmit={handleSubmit}>
      <div className=''>
        <label htmlFor="name" className='w-[10rem] inline-block  text-2xl float-left'>Name <span className='text-teal-400 '>*</span></label>
        <input
          required
          className='bg-[#373233] h-[3.5rem] p-4 w-[25rem] text-xl focus:outline-none focus:bg-teal-400 focus:required:bg-red-500'
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className='w-[10rem] inline-block text-2xl float-left'>Email <span className='text-teal-400 '>*</span></label>
        <input
          required
          className='bg-[#373233] h-[3.5rem] p-4 w-[25rem] text-xl focus:outline-none focus:bg-teal-400 focus:required:bg-red-500'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="subject" className='w-[10rem] inline-block text-2xl float-left'>Subject</label>
        <input
          className='bg-[#373233] h-[3.5rem] p-4 w-[25rem] text-xl focus:outline-none focus:bg-teal-400'
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div>
          <label htmlFor="message" className='w-[10rem] inline-block text-2xl float-left'>Message <span className='text-teal-400 '>*</span></label>
        <textarea
          required
          className='bg-[#373233] h-[20rem] p-4 w-[25rem] text-xl focus:outline-none focus:bg-teal-400 focus:required:bg-red-500'
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage
            (e.target.value)}
        />
      </div>
      <button type="submit" className='bg-[#0d0d0d] text-white tracking-[0.2rem] text-xl font-semibold ml-[10rem] px-8 py-6 uppercase hover:bg-white hover:text-[#0d0d0d]'>Submit</button>
    </form>
  );
};

export default Contact;