document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelector(".testimonials");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let testimonialIndex = 0;

    const showTestimonial = () => {
        testimonials.style.transform = `translateX(-${testimonialIndex * 100}%)`;
    };

    const prevTestimonial = () => {
        testimonialIndex = testimonialIndex > 0 ? testimonialIndex - 1 : testimonials.children.length - 1;
        showTestimonial();
    };

    const nextTestimonial = () => {
        testimonialIndex = testimonialIndex < testimonials.children.length - 1 ? testimonialIndex + 1 : 0;
        showTestimonial();
    };

    prevBtn.addEventListener("click", prevTestimonial);
    nextBtn.addEventListener("click", nextTestimonial);
});
