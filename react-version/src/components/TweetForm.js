
function TweetForm() {
  
  const defaultString = 'What are you humming about?'
  
  return (
    
    // <section class="error-container"><i class="fas fa-exclamation-triangle"></i>
    //   <h4></h4> <i class="fas fa-exclamation-triangle"></i>
    // </section>

    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={ defaultString }></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;