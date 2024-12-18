import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

const Projects = () => {
  return (
    <div className='projects' id='my-projects'>
      <div id='project-1'>
        <div className='projectimage'>
          <Player
            src='https://assets5.lottiefiles.com/packages/lf20_nkf5e15x.json'
            style={{ height: '150px', width: '150px', margin: 0 }}
            loop
            autoplay
          />
        </div>
        <h4><a className='links' href='https://github.com/zaqwanay'>Mock twitter API</a></h4>
        <h5>Implemented RESTful API clone of twitter</h5>
        <p className='project-p'>
          Environment: Java, Spring Boot, PostgreSQL
        </p>
      </div>
      <div id='project-2'>
        <div className='projectimage'>
          <Player
            src='https://assets4.lottiefiles.com/packages/lf20_69qm0U.json'
            style={{ height: '150px', width: '150px', margin: 0 }}
            loop
            autoplay
          />
          <h4><a className='links' href='https://github.com/zaqwanay/cities_trivia_game'>Cities Trivia Game</a></h4>
          <h5>A CLI trivia game with 3 difficulty levels</h5>
          <p className='project-p'>
            Environment: Python, Django
          </p>
        </div>
      </div>
      <div id='project-3'>
        <div className='projectimage'>
          <Player
            src='https://assets5.lottiefiles.com/packages/lf20_hssvolmu.json'
            style={{ height: '150px', width: '150px', margin: 0 }}
            loop
            autoplay
          />
          <h4><a className='links' href='https://github.com/zaqwanay'>Employee Org Chart</a></h4>
          <h5>Work map chart to find employees and managers</h5>
          <p className='project-p'>
            Environment: Java
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
