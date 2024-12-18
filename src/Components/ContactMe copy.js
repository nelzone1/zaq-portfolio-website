import { Player, Controls } from '@lottiefiles/react-lottie-player'
const ContactMe = () => {
  return (
    <div class='contact-me' id='contact'>
      <h3>Want to get in touch?</h3>
      <form>
        <fieldset>
          <div>
            <label for='name' class='form-label'>
            </label>
            <input
              type='text'
              class='form-label'
              name='name'
              cols='40'
              placeholder='Person or company name'
              required />
          </div>
          <div>
            <label for='email' class='form-label'>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              cols='40'
              placeholder='Enter your email'
              required />
          </div>
          <div>
            <label for='message' class='form-label'></label>
            <textarea
              type='text'
              cols='100'
              id='message'
              name='message'
              placeholder='Enter your message'>
            </textarea>
          </div>
          <div>
            <input type='submit' class='submit-btn' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactMe
