import React from 'react'
import Image from 'next/image'
import { Rating } from './svgs'

interface Props {
    image: string,
    content: string,
    name: string,
    stack: string
}

const TestimonialCard = (props: Props) => {
    return (
        <div className="testimonial-card bg-[#ffffff] border border-primary border-solid ">
            <p>“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”</p>

            <div data-testid="rating">
                <Rating />
            </div>

            <div className="image-box">
                <Image src={props?.image} alt="testimonial-image" width={100} height={100} />
            </div>

            <h4>{props?.name}</h4>
            <small>{props?.stack}</small>
        </div>
    )
}

export default TestimonialCard
