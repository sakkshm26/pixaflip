import './Mission.css'
import React from 'react'
import image from './Mission.jpg'

function Mission() {
    return (
        <div className='lower'>
            <div className='mission'>
                <h2>MISSION</h2>
                <p>To establish a platform in alliance with luminous minds of the industry around the globe, to ensure 360 reach, solution, and sustainable growth of innovation in the startup ecosystem.</p>
            </div>
            <div className='phil'>
                <div className='section-1'>
                    <h2>WHAT WE DO</h2>
                    <p>We are India's first platform to connect the startup ecosystem with a direct CSR Ecosystem and our collaboration with global VC and Angel Investors makes us more efficient and effective in the field of funds. We help innovators, doers, and Ideators to flourish by providing the right environment, network, and decorated strategy to get started their sustainable entrepreneur journey by providing required exposure, networking, technology, and the community to support revolutionary ideas.</p>    
                </div> 
                <img src={image} />
                <div className='section-2'>
                    <h2>OUR PHILOSOPHY</h2>
                    <p>We painstakingly select start-ups that we see merit in. Our process involves hours of study and interactions before working with an entrepreneur. We take all efforts to make sure that the business ideas we promote hold promise and are innovative. Once on board, we work closely with the start-ups to give them a real chance at being successful. Transparency and dedication are at the core of what we do. We feel that innovative ideas can be beneficial not only for entrepreneurs, but also for investors, backers, the economy, and communities at large.</p>
                </div>
            </div>
        </div>
    )
}

export default Mission
