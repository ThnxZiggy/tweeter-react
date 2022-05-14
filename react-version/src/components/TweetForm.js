
function TweetForm() {

  const defaultString = 'What are you humming about?'
  const  eventHandle = (event) => {
    event.preventDefault()
  }
  return (
    <div>
    <section class="error-container"><i class="fas fa-exclamation-triangle"></i>
      <h4></h4> <i class="fas fa-exclamation-triangle"></i>
    </section>

    <section className="newtweet">
      <form onSubmit = { eventHandle } method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={ defaultString }></textarea>
        <input onClick = { eventHandle } type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
    </div>
  );
}

function MyClickableDiv() {
  return (
    <input onClick={(event) => {
      console.log(`The mouse coordinates of this click event are: x: ${event.screenX} and y: ${event.screenY}`);
      }}
    >
    </input>
  );
}

export default TweetForm;