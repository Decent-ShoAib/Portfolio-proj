import './Contact.css'
import contactImg from '../../assets/contact.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
function Contact() {
  return (
    <>
      <div id='contact'>
        <div className="leftContact">
          <img src={contactImg} alt="" />
        </div>
        <div className="rightContact">
          <form action="https://formspree.io/f/mdkgjlze" method='post'>
            <input type="text" name='userName' placeholder='Name' />
            <input type="email" name='Email' placeholder='Email' />
            <textarea name="message" placeholder="message me" id="textArea"></textarea>
            <input type="submit" id='btn' value='Submit' />
          </form>
        </div>
      </div>
      <div className='icons'>
        <a href="https://www.linkedin.com/in/muhammad-shoaib-javed-543bb024b/
" target='_blank' rel='noopener noreferrer'><FaLinkedin color='white' size={30} /></a>

        <a href="https://www.facebook.com/shoaib.sheikh.674247
" target='_blank' rel='noopener noreferrer'><FaFacebook color='white' size={30} /></a>

        <a href="https://www.instagram.com/decent_shoaib/
" target='_blank' rel='noopener  nooreferrer '><SiInstagram color='white' size={30} /></a>

      </div>
    </>
  )
}

export default Contact