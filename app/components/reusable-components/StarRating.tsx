import React from 'react'

const StarRating = ({ rating }: any) => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating
    stars.push(
      <span key={i} className={`text-[#ff6000] ${filled ? 'fill-current' : 'stroke-current'}  text-[32px] inline-block`}>
        {filled ? '★' : '☆'}
      </span>
    )
  }

  return <div>{stars}</div>
}

export default StarRating
