import React from 'react'
import './footer.css';
function Footer() {
  return (
    <footer>
        <div class="f-item-con">
            <div class="app-info">
                <span class='app-name'>
                    <span class='app-initial'>R</span>awnge
                </span>
                <p>We provides you with <strong>Well organised</strong> and <strong>SEO friendly</strong> Website Designs.</p>
            </div>
            <div class="useful-links">
                <div class="footer-title">Useful Links</div>
                <ul>
                    <li>Courses</li>
                    <li>Sign In</li>
                    <li>About Us</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise with Us</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div class="help-sec">
                <div class="footer-title">Help</div>
                <ul>
                    <li>Help Me</li>
                    <li>Feedback</li>
                    <li>Report a Issue / Bug</li>
                </ul>
            </div>
            <div class="g-i-t">
                <div class="footer-title">Get in Touch</div>
                <form action="/" method="post" class="space-y-2">
                    <input type="text" name="g-name" class="g-inp" id="g-name" placeholder='Name' />
                    <input type="email" name="g-email" class="g-inp" id="g-email" placeholder='Email' />
                    <textarea type="text" name="g-msg" class="g-inp h-40 resize-none" id="g-msg"
                        placeholder='Message...'></textarea>
                    <button type="submit" class='f-btn'>Submit</button>
                </form>
            </div>
        </div>
        <div class='cr-con'>Copyright &copy; 2022 | Made by Rawnge</div>
    </footer>
  )
}

export default Footer