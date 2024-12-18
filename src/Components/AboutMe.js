import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useEffect, useState } from 'react'

const AboutMe = () => {
  const [profilePicURL, setProfilePicURL] = useState()
  const [githubProfile, setGithubProfile] = useState()

  const getData = () => {
    fetch('https://api.github.com/users/zaqwanay')
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setGithubProfile(result.bio)
        setProfilePicURL(result.avatar_url)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='about-me' id='about_me'>
      <div className='about-me-special'>
        <div className='about-me-image'>
          {/* Updated alt text */}
          <img src={profilePicURL} alt="Alex Yesufu's profile photo" />
        </div>
        <div className='about-me-special2'>
          <div className='about-me-special3'>
            <h2>About Me</h2>
            <h3 className='top'>Hi, my name is Alex Yesufu</h3>
            {githubProfile}
          </div>
          <div className='about-me-animation'>
            <Player
              src='https://assets1.lottiefiles.com/packages/lf20_M5PJHFF7vA.json'
              style={{ height: '400px', width: '400px', float: 'right', margin: 0 }}
              loop
              autoplay
            />
            <Controls visible={false} />
          </div>
          <p className='about-me-container'>
            I am a multi-skilled agile software developer with over 5 years of experience in SDLC, from product ownership to programming. I have a bachelor’s in Statistics and
            a strong knowledge of business development.
            <br />
            <br />
            I demonstrate extreme comfortability using numerous Java frameworks, such as Spring, Hibernate, JDBC, and Angular. I am capable of building Python applications
            using Django and Flask frameworks and have knowledge of cloud computing with the 3 major platforms: Azure, AWS, and Google. I freelance in the meantime,
            currently working on two interesting projects. One is a long-distance rideshare app, and the other is a food bundling delivery app.
            <br />
            <br />
            When I’m not working, I spend a lot of time with my family. The ‘Squad’ loves travelling, regardless of the means, and we do this at every opportunity. My
            sincere desire is to continue to use the right platforms to showcase my creative ability and passion for programming.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
