import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Label from '../../../components/form/Lable/Lable';
import Input from '../../../components/form/Input/Input';
import Textarea from '../../../components/form/Textarea/TextArea';
import Button from '../../../components/form/Button/Button';
import ContactStyles from './ContactStyle';
import { nameRegex, formemailRegex, subjectRegex, messageRegex } from '../../../helper/RegexConstants'

const ContactContent = () => {

  const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
  
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState('');
  
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');
  
  
  
    const handleUsernameChange = (e) => {
      const value = e.target.value;
      setName(value);
  
      if (value.trim() === '') {
        setNameError('Please fill Username');
      } else if (!nameRegex.test(value)) {
        setNameError('Name must be at least 6 letters long and contain only letters and spaces.');
      } else {
        setNameError('');
      }
    };
  
    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);
  
      if (value.trim() === '') {
        setEmailError('Please fill Email');
      } else if (!formemailRegex.test(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    };
  
    const handleSubjectChange = (e) => {
      const value = e.target.value;
      setSubject(value);
  
      if (value.trim() === '') {
        setSubjectError('Please fill Subject');
      } else if (!subjectRegex.test(value)) {
        setSubjectError('Subject must be at least 5 alphanumeric characters long and can contain spaces.');
      } else {
        setSubjectError('');
      }
    };
  
  
    const handleMassageChange = (e) => {
      const value = e.target.value;
      setMessage(value);
  
      if (value.trim() === '') {
        setMessageError('Please fill Massage');
      } else if (!messageRegex.test(value)) {
        setMessageError('Message must be at least 10 characters long.');
      } else {
        setMessageError('');
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let isValid = true;
  
      if (name === '') {
        setNameError('Please Fill Username');
        isValid = false;
      } else if (!nameRegex.test(name)) {
        setNameError('Username must be 6-16 alphanumeric characters');
        isValid = false;
      } else {
        setNameError('');
        isValid = true;
      }
  
      if (email === '') {
        setEmailError('Please Fill Email');
        isValid = false;
      } else if (!formemailRegex.test(email)) {
        setEmailError('Please Enter Valid email address');
        isValid = false;
      } else {
        setEmailError('');
        isValid = true;
      }
  
      if (subject === '') {
        setSubjectError('Please Fill Subject');
        isValid = false;
      } else if (!subjectRegex.test(subject)) {
        setSubjectError('Enter Valid subject');
        isValid = false;
      } else {
        setSubjectError('');
        isValid = true;
      }
  
      if (message === '') {
        setMessageError('Please Fill Message');
        isValid = false;
      } else if (!messageRegex.test(message)) {
        setMessageError('Please Enter message');
        isValid = false;
      } else {
        setMessageError('');
        isValid = true;
      }
  
      if (isValid) {
        alert('Form submitted successfully!');
        console.log({ name, email, subject, message });
      } else {
        console.log('Please correct the errors in the form.');
      }
    };


  return (
    <ContactStyles>
      <div className="contact-wrapper">
        <div className="contact-main">
          <div className="contact-left">
            <h6>| CONTACT US</h6>
            <h1>Get In Touch With Our Agents</h1>
            <p>When you really need to download free CSS templates, please remember our 
                       website TemplateMo. Also, tell your friends about our website. Thank you for visiting. 
                       There is a variety of Bootstrap HTML CSS templates on our website. 
                       If you need more information, please contact us.</p>
            <div className="contact-info-container">
              <div className="contact-info-box">
                <i><FontAwesomeIcon icon={faPhone} /></i>
                <div className="contact-info-text">
                  <h2>010-020-0340</h2>
                  <p>Phone Number</p>
                </div>
              </div>
              <div className="contact-info-box">
                <i><FontAwesomeIcon icon={faEnvelope} /></i>
                <div className="contact-info-text">
                  <h2>info@villa.co</h2>
                  <p>Business Email</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form">
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" placeholder="Your Name..." value={name} onChange={handleUsernameChange} />
              {nameError && <p className="form_error">{nameError}</p>}

              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="Your E-mail..." value={email} onChange={handleEmailChange} />
              {emailError && <p className="form_error">{emailError}</p>}

              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Subject..." value={subject} onChange={handleSubjectChange} />
              {subjectError && <p className="form_error">{subjectError}</p>}

              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your Message" value={message} onChange={handleMassageChange} />
              {messageError && <p className="form_error">{messageError}</p>}

              <Button onClick={handleSubmit} className="send-button" type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918790408!2d72.41493012913728!3d23.020158084541738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1745644894149!5m2!1sen!2sin"
          width="90%"
          height="415"
          style={{ border: 0, borderRadius: 10 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </ContactStyles>
  );
};

export default ContactContent;








// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// const ContactContent = () => { 
//   return (
//     <div>

//       <div className='contact_content'>
//         <div className='contact_main'>

//             <div className='contact_left'>
//                 <h6>| CONTACT US</h6>
//                 <h1>Get In Touch With Our Agents</h1>
//                 <p>When you really need to download free CSS templates, please remember our 
//                     website TemplateMo. Also, tell your friends about our website. Thank you for visiting. 
//                     There is a variety of Bootstrap HTML CSS templates on our website. 
//                     If you need more information, please contact us.</p>

//                 <div className='contact_call'>
//                     <i><FontAwesomeIcon icon={faPhone} /></i>
//                     <div className='call2'>
//                         <h2>010-020-0340</h2>
//                         <p>Phone Number</p> 
//                     </div>
//                 </div>

//                 <div className='contact_call'>
//                     <i><FontAwesomeIcon icon={faEnvelope} /></i>
//                     <div className='call2'>
//                         <h2>info@villa.co</h2>
//                         <p>Business Email</p>
//                     </div>
//                 </div>
//             </div>

//             <div className='contact_right'>
//                 <form className='form'>
//                     <lable>Full Name</lable>
//                     <input type='text' placeholder='Your Name...'/>
//                     <lable>E-mail</lable>
//                     <input type='email' placeholder='Your E-mail...'/>
//                     <lable>Subject</lable>
//                     <input type='text' placeholder='Subject...'/>
//                     <lable>Message</lable>
//                     <textarea id='message' placeholder='Your Message'/>
//                     <button className='send_btn'>Send Message</button>
//                 </form>
//             </div>

//         </div>
//        </div>

//        <div class="contact-map" style={{textAlign:'center',marginBottom:100}}>
//             <div class="map-container">
//                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918790408!2d72.41493012913728!3d23.020158084541738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1745644894149!5m2!1sen!2sin" 
//                 width="90%" height="415" style={{border:0,borderRadius:10}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default ContactContent