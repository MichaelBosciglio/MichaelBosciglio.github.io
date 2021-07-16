import { useState } from "react";
import React from 'react';
import ReactPlayer from "react-player";

const InformativeVideos = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const [submit, setSubmit] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = {name,email,comments};
        setSubmit("Thank You!")
        
    }

    return (
        <div className="react-player">
          <h4 >Setting</h4>
          <ReactPlayer
           url='https://www.youtube.com/watch?v=h5mpBCRK_yk'
           className='react-player'
           />
           <p className="create">
              This video will go through the fundamentals of 'Setting' in volleyball! 
           </p>
           <br />
           <h3>Spiking</h3>
          <ReactPlayer
           url='https://www.youtube.com/watch?v=7qRzBXGvezQ'
           className='react-player'
           />
           <p className="create">
              This video will go through the fundamentals of 'Spiking' in volleyball! 
           </p>
           <br />
           <h3>Passing</h3>
          <ReactPlayer
           url='https://www.youtube.com/watch?v=gOgfoEGUDCA'
           className='react-player'
           />
           <p className="create">
           This video will go through the fundamentals of 'Passing' in volleyball! 
           </p>
        </div>
      );
}
 
export default InformativeVideos;