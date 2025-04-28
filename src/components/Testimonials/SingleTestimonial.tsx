import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <Image src={image} alt={name} width={50} height={50} className="testimonial-image" />
        <div>
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-designation">{designation}</p>
        </div>
      </div>
      <div className="testimonial-rating">{ratingIcons}</div>
      <p className="testimonial-content">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
