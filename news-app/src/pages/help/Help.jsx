import React from 'react'
import "./help.css";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";


export default function Help() {
    return (
        <>
            <Topbar />
            <div className="help">
                <h1>FAQS</h1>
                <div className="info">
                    <p> Want any help from our Developers ? <br/><br/>
                    Just drop a mail at <span className="mail"> mytime.support@gmail.com</span></p>
                </div>
                <div className="faq">
                    <ul class="faq-list">
                        <li className="faq-list-li"><i className="fa fa-plus"></i>
                          <h2 className="faq-que">Do I need to login to use the application?</h2>
                          <p className="answer"> You need to login to create a post or upvote, downvote or comment on anything. Without logging in you can view the general feed.</p>
                      
                        <hr/></li>
                        <li className="faq-list-li"><i class="fa fa-plus"></i>
                        <h2 className="faq-que">What should I do if I find any post abusive or against someone?</h2>
                        <p className="answer"> You can report the post and it will be taken into consideration by the admin if it is necessary to report the post.</p>
                      
                        <hr/></li>
                        <li className="faq-list-li"><i class="fa fa-plus"></i>
                        <h2 className="faq-que">Can I post something which is articulated by me?</h2>
                        <p className="answer"> No, you just have to post the link of an article with its title, any relevant image and its corresponding tags.</p>
                      
                        <hr/></li>
                        <li className="faq-list-li"><i class="fa fa-plus"></i>
                        <h2 className="faq-que">Whom should I contact in case of any queries?</h2>
                        <p className="answer"> The email-id of the developers team is given on the contact us page. You can drop an email in case of any queries.</p>
                      
                        
                        <hr/></li></ul>
                        </div>
                </div>
            <Footer/>
        </>
    )
}