// Remove unused imports
// import { Player, Controls } from '@lottiefiles/react-lottie-player'

const ContactMe = () => {
  return (
    <div className='contact-me' id='contact'>
      <h3>Want to get in touch?</h3>
      <form>
        <fieldset>
          <div>
            <label htmlFor='name' className='form-label'>
            </label>
            <input
              type='text'
              className='form-label'
              name='name'
              cols='40'
              placeholder='Person or company name'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='form-label'>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              cols='40'
              placeholder='Enter your email'
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='form-label'></label>
            <textarea
              type='text'
              cols='100'
              id='message'
              name='message'
              placeholder='Enter your message'>
            </textarea>
          </div>
          <div>
            <input type='submit' className='submit-btn' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactMe
