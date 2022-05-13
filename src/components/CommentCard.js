import React from "react";
import './CommentCard.css';

const CommentCard = ()=>{
    return(
        <>
            <div className="CommentCard-container">
                <div className="right">
                    <h4>Card Header</h4>
                    <p>lUllamco aute fugiat in do ullamco officia ipsum. Pariatur sint minim tempor mollit proident Lorem. Elit adipisicing voluptate qui est sint non esse. Eiusmod magna dolor do ex occaecat ullamco mollit voluptate excepteur. Ipsum amet fugiat commodo consectetur excepteur sunt velit ut sit enim nostrud. Mollit esse irure do consequat ipsum veniam ad eu.</p>
                </div>
                <div className="left">
                <form action="">
                    <fieldset>
                        <legend>Contact us:</legend>
                        
                        <label for='fname'>First Name: </label><br/>
                        <input type='text' id="fname"/><br/>
                        
                        <label for='email'>Email: </label><br/>
                        <input type='email' id="email"/><br/>
                        
                        <label for='textarea'>Your comment:</label><br/>
                        <input type='textarea' id="textarea"/><br/><br/>
                        
                        <input type='submit' id="submit"/>
                    </fieldset>
                </form>
                </div>
            </div>
        </>
    );
} 

export default CommentCard;